"use strict";
const common_util = require("../../common/util.js");
const common_api = require("../../common/api.js");
const common_vendor = require("../../common/vendor.js");
require("../../common/http.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {},
      FILE_URL: common_util.FILE_URL
    };
  },
  onLoad() {
    this.init();
  },
  methods: {
    init() {
      common_api.getUserInfo().then((res) => {
        if (res.code == 200) {
          this.userInfo = res.result;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.userInfo.userIcon
  }, $data.userInfo.userIcon ? {
    b: `${$data.FILE_URL}${$data.userInfo.userIcon}`
  } : {}, {
    c: common_vendor.t($data.userInfo.nickname),
    d: common_vendor.t($data.userInfo.mobile)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f7520f0"], ["__file", "E:/yxf/gitee/MyArticle/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
