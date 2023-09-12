"use strict";
const common_vendor = require("./vendor.js");
const common_util = require("./util.js");
class FetchHttp {
  constructor() {
    this.baseUrl = "";
  }
  postFileData(url, data) {
    return this._http(url, "post", data);
  }
  postData(url, data) {
    return this._http(
      url,
      "post",
      JSON.stringify(data),
      {
        header: {
          "content-type": "application/json"
        }
      }
    );
  }
  getData(url, data) {
    return this._http(url, "get", data);
  }
  _http(url, method = "get", data, extraConfig) {
    url = this.baseUrl + url;
    const token = common_vendor.index.getStorageSync("loginToken");
    if (token)
      extraConfig.header.Authorization = `Bearer ${token}`;
    let config = {
      url,
      method,
      data,
      cache: "no-cache",
      referrer: "no-referrer",
      header: extraConfig ? extraConfig.header : {}
    };
    this._renderLoading();
    return new Promise((resolve, reject) => {
      common_vendor.index.request(config).then((response) => {
        let res = response.data;
        if (res.code === 900) {
          this._toLogin();
          reject(res);
        } else if (res.code === 500) {
          if (res.message === "jwt expired") {
            this._toLogin();
          } else {
            common_util.$message(res.message || "系统出错，请联系管理员！");
          }
          reject(res);
        } else if (res.code !== 200) {
          common_util.$message("系统出错，请稍后重试！");
          reject(res);
        } else if (res.code === 200) {
          let t = response.header["x-jwt-token"];
          if (t) {
            common_vendor.index.setStorageSync("loginToken", t);
          }
          resolve(res);
        }
      }).catch((err) => reject(err)).finally(() => {
        this._removeLoading();
      });
    });
  }
  _setHeaders() {
  }
  _renderLoading() {
    common_vendor.index.showLoading({
      title: "加载中"
    });
  }
  _removeLoading() {
    common_vendor.index.hideLoading();
  }
  _toLogin() {
    common_util.$message("登录超时");
    common_vendor.index.reLaunch({
      url: "/pages/login/login"
    });
  }
}
exports.FetchHttp = FetchHttp;
