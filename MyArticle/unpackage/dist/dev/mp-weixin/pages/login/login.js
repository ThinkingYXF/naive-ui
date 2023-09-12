"use strict";
const common_vendor = require("../../common/vendor.js");
const common_util = require("../../common/util.js");
const common_api = require("../../common/api.js");
require("../../common/http.js");
const _sfc_main = {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (!this.form.username) {
        return common_util.$message("请输入账号");
      }
      if (!this.form.password) {
        return common_util.$message("请输入密码");
      }
      common_api.toLogin(this.form).then((res) => {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.form.username,
    b: common_vendor.o(($event) => $data.form.username = $event.detail.value),
    c: $data.form.password,
    d: common_vendor.o(($event) => $data.form.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.login && $options.login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"], ["__file", "E:/yxf/gitee/MyArticle/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
