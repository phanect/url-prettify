/* eslint-env worker */

"use strict";

onmessage = function(evt) {
  const url = new URL(evt.data.url);
  const params = new URLSearchParams(url.search);

  // Google Analytics
  params.delete("utm_source");
  params.delete("utm_medium");
  params.delete("utm_campaign");
  // Google Ads
  params.delete("gclid");
  // Facebook
  params.delete("fbclid");

  if (url.hostname === "www.youtube.com") {
    params.delete("feature");
  }

  if (
    url.hostname === "www.amazon.com" ||
    url.hostname === "www.amazon.co.jp"
  ) {
    params.delete("tag");
    params.delete("creative");
    params.delete("creativeASIN");
    params.delete("linkCode");
    params.delete("hvadid");
    params.delete("hvpos");
    params.delete("hvnetw");
    params.delete("hvrand");
    params.delete("hvpone");
    params.delete("hvptwo");
    params.delete("hvqmt");
    params.delete("hvdev");
    params.delete("hvdvcmdl");
    params.delete("hvlocint");
    params.delete("hvlocphy");
    params.delete("hvtargid");
  }

  if (url.hostname === "item.rakuten.co.jp") {
    params.delete("scid");
    params.delete("sc2id");
  }

  const queryString = params.toString();

  postMessage(url.origin + url.pathname + (queryString.length > 0 ? "?" + queryString : ""));
};
