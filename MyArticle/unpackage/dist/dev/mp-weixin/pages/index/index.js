"use strict";
const common_api = require("../../common/api.js");
const common_util = require("../../common/util.js");
const common_vendor = require("../../common/vendor.js");
require("../../common/http.js");
const _sfc_main = {
  data() {
    return {
      FILE_URL: common_util.FILE_URL,
      searchInput: "",
      form: {
        pageNo: 1,
        pageSize: 10,
        title: ""
        // userId: this.$store.getters.loginUserId
      },
      dataList: [],
      loadmore: "暂无数据"
    };
  },
  onLoad() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      common_api.getArticleList(this.form).then((res) => {
        this.dataList = [...this.dataList, ...res.result.rows];
        if (res.result.rows.length < 10) {
          this.loadmore = "- 已经到底了 -";
        }
        if (this.dataList.length == 0) {
          this.loadmore = "- 暂无数据 -";
        }
      });
    },
    search() {
      this.form.title = this.searchInput;
      this.form.pageNo = 1;
      this.dataList = [];
      this.getArticle();
    }
  },
  onReachBottom() {
    setTimeout(() => {
      this.form.pageNo++;
      this.getArticle();
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.search && $options.search(...args)),
    b: $data.searchInput,
    c: common_vendor.o(($event) => $data.searchInput = $event.detail.value),
    d: common_vendor.f($data.dataList, (item, i, i0) => {
      return {
        a: $data.FILE_URL + item.imgUrl,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.description),
        d: i
      };
    }),
    e: common_vendor.t($data.loadmore)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/yxf/gitee/MyArticle/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
