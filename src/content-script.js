var iframe = document.createElement('iframe'); 

iframe.style.height = "100%";
iframe.style.width = "400px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000";
iframe.frameBorder = "none"; 
iframe.src = chrome.runtime.getURL("src/slide-in-panel/index.html")

document.body.appendChild(iframe);
