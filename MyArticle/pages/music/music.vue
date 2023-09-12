<template>
	<view class="music">
		<view class="search_content">
			<view class="index_search">
				<icon size="16" type="search" />
				<input type="text" v-model="searchInput" placeholder="请输入歌曲/歌手" @confirm="search" />
			</view>
		</view>
		<view class="item_content">
			<view class="item" :class="nowIdx == i ? 'active' : ''" v-for="(item, i) in musicList" :key="i"
				@click="playOrPause(item, i)">
				<view class="item_left">
					<view class="title">{{ item.name }}</view>
					-
					<view class="desc">{{ item.author }}</view>
				</view>
				<!-- <view class="item_right">
	          
	        </view> -->
			</view>
			<view class="loadmore">{{ loadmore }}</view>
		</view>

		<view style="height: 30px"></view>

	</view>
</template>

<script>
	import {
		getMusicList
	} from "../../common/api";
	import {
		FILE_URL
	} from "../../common/util";
	let musicObj = "";
	export default {
		data() {
			return {
				searchInput: "",
				form: {
					pageNo: 1,
					pageSize: 20,
					name: "",
					tagId: "",
				},
				musicList: [],
				loadmore: "暂无数据",

				nowIdx: -1,
				nowAudio: {},
				audioInfo: {
					name: "",
					author: "",
					currentTime: 0,
					isPlaying: false,
					duration: 0,
				},
				FILE_URL,
			}
		},
		onLoad(){
			this.init();
		},
		methods: {
			init() {
				getMusicList(this.form).then((res) => {
					this.musicList = [...this.musicList, ...res.result.rows];
					if (res.result.rows.length < 10) {
						this.loadmore = "- 已经到底了 -";
					}
					if (this.musicList.length == 0) {
						this.loadmore = "- 暂无数据 -";
					}
					let idx = this.musicList.findIndex(
						(v) => this.audioInfo.name == v.name
					);
					if (idx != -1) {
						this.nowIdx = idx;
					}
				});
			},
			search() {
				this.form.name = this.searchInput;
				this.form.pageNo = 1;
				this.musicList = [];
				this.init();
			},
			playOrPause(item, idx) {
				if (this.nowIdx != idx) {
					if (musicObj) {
						musicObj.destroy(); //销毁
						this.offListeningAudio(); //取消监听
					}
					this.nowIdx = idx;
					musicObj = uni.createInnerAudioContext();
					musicObj.obeyMuteSwitch = false;
					musicObj.src = this.FILE_URL + encodeURI(item.fileUrl);
					musicObj.play();
					this.listeningAudio(); //监听

					this.audioInfo.name = item.name;
					this.audioInfo.author = item.author;
					setTimeout(() => {
						this.audioInfo.duration = musicObj.duration;
						musicObj.play();
						this.audioInfo.isPlaying = true;
					}, 20);
				} else if (musicObj && this.nowIdx == idx) {
					if (this.audioInfo.isPlaying) {
						musicObj.pause();
						this.audioInfo.isPlaying = false;
					} else {
						musicObj.play();
						this.audioInfo.isPlaying = true;
					}
				}
			},
			playNext() {
				this.audioOrderPlay("next");
			},
			//顺序播放
			audioOrderPlay(type) {
				if (type === "pre") {
					if (this.nowIdx == 0) {
						this.nowIdx = this.musicList.length - 1;
					} else {
						this.nowIdx--;
					}
				} else if (type === "next") {
					if (this.nowIdx == this.musicList.length - 1) {
						this.nowIdx = 0;
					} else {
						this.nowIdx++;
					}
				}
				this.setAudioSrcPlay();
			},
			setAudioSrcPlay() {
				musicObj.destroy(); //销毁
				musicObj = uni.createInnerAudioContext("myAudio");
				let item = this.musicList[this.nowIdx];
				musicObj.src = this.FILE_URL + encodeURI(item.fileUrl);

				this.audioInfo.name = item.name;
				this.audioInfo.author = item.author;

				this.$nextTick(() => {
					this.audioInfo.duration = musicObj.duration;
					musicObj.play();
					this.audioInfo.isPlaying = true;
				});
			},
			/**
			 * 监听音频
			 */
			listeningAudio() {
				//自然结束
				musicObj.onEnded(() => {
					this.playNext();
				});
				//加载中
				musicObj.onWaiting(() => {});
			},
			/**
			 * 取消监听音频
			 */
			offListeningAudio() {
				musicObj.offEnded();
				musicObj.offWaiting();
			},
		},
		onReachBottom() {
			setTimeout(() => {
				this.form.pageNo++;
				this.init();
			});
		}
	}
</script>

<style scoped lang="less" src="./music.less"></style>