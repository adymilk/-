
var request = require('request');// 引入网络请求模块
var fs = require('fs'); //引入网络流模块
var path = require('path'); // 引入路径操作模块
var cheerio = require('cheerio');// 引入html数据解析模块
var requrl='';// 这是我们的目标网址
var baseUrl = 'http://www.mmjpg.com/';//这是我们要爬去的网站首页

for (var i=1; i<2; i++){//这个的20 最高为65 因为网站图片就65页
    requrl= baseUrl +'home/' + i ;//通过循环我们可以遍历所有页面的图片
    console.log(requrl);
console.log('第'+ i + '页图片准备下载中......');
    request(requrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            acquireData(body);//发送 request 请求，如果没有错误就返回数据
        }
    })
}
//获取数据函数
function acquireData(data) {
    var $ = cheerio.load(data);//通过上门我们引入的cheerio模块提供的方法，解析数据
    var meizi = $('.pic ul li a img').toArray();//选择图片所在的 dom结构在封装成数组
    console.log(meizi.length);//打印数组长度
    var len = meizi.length; // 把数组的长度赋给 len
    for (var i=0; i<len; i++) {
        var imgsrc = meizi[i].attribs.src;//通过 attribs 方法得到每张图片的src地址
        console.log(imgsrc);
        var filename = parseUrlForFileName(imgsrc);  //调用生成文件名方法
        downloadImg(imgsrc,filename,function() {//调用下载方法下载图片，并且保存在根目录下的images下
        });
    }
}
//生成文件名方法 parseUrlForFileName 见名知意 把url地址转化成文件名
function parseUrlForFileName(address) {
    var filename = path.basename(address);
    return filename;
}
var downloadImg = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        if (err) {
            console.log('err: '+ err);
            return false;
        }
        console.log('res: '+ res);
        console.log(filename+"图片下载完毕！尽情欣赏吧！");
        request(uri).pipe(fs.createWriteStream('images/'+filename)).on('close', callback);
        //调用request的管道来下载到 images文件夹下
    });
};
