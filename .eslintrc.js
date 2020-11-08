"use strict";

module.exports = {
  extends: "plugin:@phanect/js",

  env: {
    browser: true,
    node: false,
    webextensions: true,
  },
  plugins: [ "@phanect" ],
};
