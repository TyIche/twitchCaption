function trans(qq)
{
    $.ajax({
    url: "https://fanyi-api.baidu.com/api/trans/vip/translate",
    type: "GET",
    data:{
        "q":qq,
        "from": "auto",
        "to": "zh",
        "appid":"20210617000865422",
        "salt":"0",
        "sign":md5("20210617000865422"+qq+"0"+"5uoxt7Op1o8ttaucJF3K")
    },
    success:function (data) {
        //window.location.replace("/route/home");
        console.log(data);

        $(".caption")[0].innerHTML = data.trans_result[0].dst; 
    },
    error:function(data)
    {
        //alert("数据不合法");
        $(".caption")[0].innerHTML = $("#voicein_voicebox")[0].innerHTML; 
    }
    })
}