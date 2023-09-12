import {
	getMusicList,
	downloadSong,
	getTagList
} from "@/common/api";
export default {
	data() {
		return {
			tagList: [],
			form: {
				pageNo: 1,
				pageSize: 20,
				name: "",
				tagId: ''
			},
			audioSrc: "",
			total: 0,
			columns: [
				// {
				//   type: "selection",
				//   width: 60,
				//   align: "center"
				// },
				{
					title: "歌名",
					key: "name",
					minWidth: 200,
					tooltip: true
				},
				{
					title: "歌手",
					minWidth: 120,
					key: "author"
				},
				{
					title: "标签",
					minWidth: 120,
					slot: "tagIds"
				},
				{
					title: "大小",
					minWidth: 120,
					slot: "size"
				},
				{
					title: "上传时间",
					minWidth: 180,
					slot: "createdTime"
				},
				{
					title: "操作",
					slot: "action",
					width: 150,
					fixed: 'right'
				}
			],
			tableData: [],
			nowIdx: 0,
			nowSong: {},
			isRandom: false,

			palyingNow: false, //是否正在播放
			duration: 0, //歌曲时长  s
			songTimer: null,
			nowTime: 0
		};
	},
	filters: {
		getSize(value) {
			return Math.round(value * 100 / 1024 / 1024) / 100 + "MB";
		},
		durationFilter(value) {
			let duration = Math.round(value);
			let m = parseInt(duration / 60);
			if (m < 10) m = "0" + m;
			let s = duration % 60;
			if (s < 10) s = "0" + s;
			return m + ":" + s;
		}
	},
	async created() {
		await this.getTags()
		this.init();
	},
	mounted() {
		this.listeningAudio();
	},
	methods: {
		searchTag(item, isAll) {
			if (isAll) this.form.tagId = ''
			else this.form.tagId = item.id
			this.init()
		},
		getTags() {
			return new Promise(resolve => {
				getTagList().then((res) => {
					this.tagList = res.result
					resolve()
				})
			})
		},
		init() {
			getMusicList(this.form).then(res => {
				this.tableData = res.result.rows;
				this.total = res.result.total;
				let src = decodeURI(this.audioSrc);
				this.tableData.forEach(item => {
					this.$set(item, 'tagIds', item.tagIds ? item.tagIds : '')
					let ids = item.tagIds ? item.tagIds.split(',') : []
					let names = ids.map(v => {
						let find = this.tagList.find(tag => tag.id === Number(v))
						return find ? find.name : ''
					})
					this.$set(item, 'tagNames', names)
				})
				for (let i = 0; i < this.tableData.length; i++) {
					if (src.includes(this.tableData[i].fileUrl)) {
						this.nowIdx = i;
						this.nowSong = this.tableData[i];
						if (!this.$refs.myAudio.paused) {
							this.$set(this.tableData[i], "isPlaying", true);
							break;
						}
					}
				}
			});
		},
		search() {
			this.form.pageNo = 1;
			this.init();
		},
		changePage(pageNo) {
			this.form.pageNo = pageNo;
			this.init();
		},
		changeSize(pageSize) {
			this.form.pageSize = pageSize;
			this.init();
		},
		changeTab(name) {
			if (name === "all") {
				delete this.form.favoriteIds;
			} else if (name === "favorite") {
				this.form.favoriteIds = this.$store.state.favoriteIds;
			}
			this.search();
		},
		like(row) {
			let ids = [...this.$store.state.favoriteIds, row.id];
			this.$store.commit("setFavoriteIds", Array.from(new Set(ids)));
		},
		dislike(row, isRefresh) {
			let ids = this.$store.state.favoriteIds.filter(v => v != row.id);
			this.$store.commit("setFavoriteIds", Array.from(new Set(ids)));
			if (isRefresh) {
				this.form.favoriteIds = this.$store.state.favoriteIds;
				this.init();
			}
		},
		play(row = this.tableData[this.nowIdx], idx = this.nowIdx) {
			this.nowIdx = idx;
			if (this.audioSrc !== this.PRE_FILE_URL + row.fileUrl)
				this.audioSrc = this.PRE_FILE_URL + row.fileUrl;
			this.$nextTick(() => {
				this.$refs.myAudio.play();
				this.palyingNow = true;
				this.startTimer();
			});
			this.tableData.forEach(v => {
				this.$set(v, "isPlaying", false);
				if (v.id === row.id) this.$set(v, "isPlaying", true);
			});

			this.nowSong = row;
			this.setMusicTitle(row.name);
		},
		pause(row = this.tableData[this.nowIdx]) {
			this.$refs.myAudio.pause();
			this.$set(row, "isPlaying", false);
			this.palyingNow = false;
			clearInterval(this.songTimer);
		},
		download(row) {
			downloadSong({
				id: row.id
			}).then(res => {
				let fileType = row.fileUrl.substr(row.fileUrl.lastIndexOf(".") + 1);
				let blob = new Blob([res], {
					type: "audio/" + (fileType == "mp3" ? "mpeg" : "m4a")
				});
				let a = document.createElement("a"); // 指定生成的文件名
				a.download = row.name + "." + fileType;
				a.href = URL.createObjectURL(blob);
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			});
		},
		listeningAudio() {
			let audio = this.$refs.myAudio;
			let _that = this;
			audio.addEventListener(
				"ended",
				function() {
					_that.playNext();
				},
				false
			);
			audio.addEventListener("loadeddata", function() {
				_that.duration = audio.duration;
				_that.nowTime = 0;
			});
		},
		playPre() {
			if (this.isRandom) this.randomPlay();
			else this.audioOrderPlay("pre");
		},
		playNext() {
			if (this.isRandom) this.randomPlay();
			else this.audioOrderPlay("next");
		},
		setAudioSrcPlay() {
			let audio = this.$refs.myAudio;
			this.audioSrc = this.PRE_FILE_URL + this.tableData[this.nowIdx].fileUrl;
			this.$set(this.tableData[this.nowIdx], "isPlaying", true);
			this.$nextTick(() => {
				audio.play();
			});

			this.nowSong = this.tableData[this.nowIdx];
			this.setMusicTitle(this.tableData[this.nowIdx].name);

			this.nowTime = 0;
			this.palyingNow = true;
			this.startTimer();
		},
		//顺序播放
		audioOrderPlay(type) {
			this.$set(this.tableData[this.nowIdx], "isPlaying", false);
			if (type === "pre") {
				if (this.nowIdx == 0) {
					this.nowIdx = this.tableData.length - 1;
				} else {
					this.nowIdx--;
				}
			} else if (type === "next") {
				if (this.nowIdx == this.tableData.length - 1) {
					this.nowIdx = 0;
				} else {
					this.nowIdx++;
				}
			}
			this.setAudioSrcPlay();
		},
		//随机播放
		randomPlay() {
			this.$set(this.tableData[this.nowIdx], "isPlaying", false);
			this.nowIdx = parseInt(Math.random() * this.tableData.length);
			this.setAudioSrcPlay();
		},
		setMusicTitle(title) {
			document.title = `${title} 正在播放`;
		},
		pauseSong() {
			this.pause();
		},
		playSong() {
			if (this.audioSrc) {
				this.play();
			} else if (this.tableData.length) {
				this.nowIdx = 0;
				this.play();
			}
		},
		startTimer() {
			clearInterval(this.songTimer);
			this.songTimer = setInterval(() => {
				this.nowTime++;
			}, 1000);
		}
	}
}