"use strict";

// Cache Loading
if (window.Worker) {
  const process = () => {
    const worker = new Worker(browser.extension.getURL("worker.js"));

    worker.postMessage({
      url: document.URL,
    });

    worker.onmessage = (e) => {
      history.pushState({}, "", e.data);
    };
  };

  if (document.readyState === "complete") {
    process();
  } else {
    window.addEventListener("load", process, {
      once: true,
      passive: true,
    });
  }
}
