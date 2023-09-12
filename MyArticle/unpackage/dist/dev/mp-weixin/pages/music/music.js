"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
const common_util = require("../../common/util.js");
require("../../common/http.js");
let musicObj = "";
const _sfc_main = {
  data() {
    return {
      searchInput: "",
      form: {
        pageNo: 1,
        pageSize: 20,
        name: "",
        tagId: ""
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
        duration: 0
      },
      FILE_URL: common_util.FILE_URL
    };
  },
  onLoad() {
    this.init();
  },
  methods: {
    init() {
      common_api.getMusicList(this.form).then((res) => {
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
          musicObj.destroy();
          this.offListeningAudio();
        }
        this.nowIdx = idx;
        musicObj = common_vendor.index.createInnerAudioContext();
        musicObj.obeyMuteSwitch = false;
        musicObj.src = this.FILE_URL + encodeURI(item.fileUrl);
        musicObj.play();
        this.listeningAudio();
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
      musicObj.destroy();
      musicObj = common_vendor.index.createInnerAudioContext("myAudio");
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
      musicObj.onEnded(() => {
        this.playNext();
      });
      musicObj.onWaiting(() => {
      });
    },
    /**
     * 取消监听音频
     */
    offListeningAudio() {
      musicObj.offEnded();
      musicObj.offWaiting();
    }
  },
  onReachBottom() {
    setTimeout(() => {
      this.form.pageNo++;
      this.init();
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.search && $options.search(...args)),
    b: $data.searchInput,
    c: common_vendor.o(($event) => $data.searchInput = $event.detail.value),
    d: common_vendor.f($data.musicList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.author),
        c: common_vendor.n($data.nowIdx == i ? "active" : ""),
        d: i,
        e: common_vendor.o(($event) => $options.playOrPause(item, i), i)
      };
    }),
    e: common_vendor.t($data.loadmore)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c9f7182c"], ["__file", "E:/yxf/gitee/MyArticle/pages/music/music.vue"]]);
wx.createPage(MiniProgramPage);
