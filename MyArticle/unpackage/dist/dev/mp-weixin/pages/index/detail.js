"use strict";
const common_util = require("../../common/util.js");
const common_api = require("../../common/api.js");
const common_vendor = require("../../common/vendor.js");
require("../../common/http.js");
const _sfc_main = {
  data() {
    return {
      id: "",
      dataInfo: "",
      FILE_URL: common_util.FILE_URL
    };
  },
  onLoad(e) {
    this.id = e.id;
    this.init();
  },
  methods: {
    formatDate: common_util.formatDate,
    init() {
      common_api.getArticleInfo({ id: this.id }).then((res) => {
        this.dataInfo = res.result;
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  (_easycom_uni_list_chat2 + _easycom_uni_list2 + _easycom_mp_html2)();
}
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  (_easycom_uni_list_chat + _easycom_uni_list + _easycom_mp_html)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.dataInfo.title),
    b: $data.dataInfo
  }, $data.dataInfo ? {
    c: common_vendor.p({
      title: $data.dataInfo.username,
      ["avatar-circle"]: true,
      avatar: `${$data.FILE_URL}${$data.dataInfo.userIcon}`,
      note: $data.dataInfo.description,
      time: $options.formatDate($data.dataInfo.createTime)
    })
  } : {}, {
    d: common_vendor.p({
      content: $data.dataInfo.content
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9e4af262"], ["__file", "E:/yxf/gitee/MyArticle/pages/index/detail.vue"]]);
wx.createPage(MiniProgramPage);
