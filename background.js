let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
function test()
{
  alert("jqiow");
}
chrome.runtime.onMessage.addListener(function (e, sender) {
  const { message, datum } = e
  console.log("qwqw");
  const tabId = sender.tab.id
  switch (message) {
    case 'XHR':
      $.ajax({
        url: "https://fanyi-api.baidu.com/api/trans/vip/translate",
        type: "GET",
        data: datum,
        success:function (data) {
            //window.location.replace("/route/home");
           
            $(".caption")[0].innerHTML = data.trans_result.dst; 
            console.log(data);
        },
        error:function(data)
        {
            //alert("数据不合法");
            
            console.log('wqewqeqweqwe');
            $(".caption")[0].innerHTML = $("#voicein_voicebox")[0].innerHTML; 
        }
        })
      break
  }
})
