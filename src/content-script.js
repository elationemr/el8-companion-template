chrome.runtime.onMessage.addListener(function(msg, sender){
    if ("hello" == msg) {
        toggle();
    }
    console.log(msg);
    console.log(sender);

    return {};
});

var iframe = document.createElement('iframe'); 
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "400px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none"; 
iframe.src = chrome.runtime.getURL("src/slide-in-panel/index.html")

document.body.appendChild(iframe);

function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width="400px";
    }
    else{
        iframe.style.width="0px";
    }
}
