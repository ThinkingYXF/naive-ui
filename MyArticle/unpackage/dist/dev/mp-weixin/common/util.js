"use strict";
const common_vendor = require("./vendor.js");
const FILE_URL = `https://thinkingyxf.top`;
const $message = function(title, icon = "error", duration = 2e3) {
  common_vendor.index.showToast({
    title,
    icon,
    duration
  });
};
exports.$message = $message;
exports.FILE_URL = FILE_URL;
