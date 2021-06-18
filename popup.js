// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: init,
  });
});

var recognition;
function init()
{
  // $("#a").bind('DOMNodeInserted', function() {
  //   document.getElementById("a").innerHTML = "oqwhi";
  // });
  var a = document.createElement("div");
  a.className = "caption";
  a.innerHTML = "LittlePrincess";
  


  document.getElementsByClassName("video-player__container--resize-calc")[0].appendChild(a);
  a = document.createElement("input");
  a.style.background =" white";
  a.style.zIndex = 999;
  a.style.position = "fixed";
  
  document.getElementsByClassName("video-player__container--resize-calc")[0].appendChild(a);
  
  recognition = new webkitSpeechRecognition();
  $("#voicein_voicebox").bind('DOMNodeInserted', function() {
    //var qq = escape(encodeUtf8($("#voicein_voicebox")[0].innerHTML)).replace(/\%/g,"/");
    var qq = $("#voicein_voicebox")[0].innerHTML;
    //var qq = "참";
    //console.log("还哦");
    //console.log(md5("20210617000865422"+qq+"0"+"5uoxt7Op1o8ttaucJF3K"))
    //console.log("20210617000865422"+qq+"0"+"5uoxt7Op1o8ttaucJF3K")
    // console.log($("#voicein_voicebox")[0].innerHTML)
    // console.log();
    //console.log(qq)
    trans(qq);
    
    // console.log("AAAA#");
  });
}
// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
