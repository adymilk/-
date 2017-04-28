```
for (var i=0; i<20; i++){
    requrl= baseUrl +'home/' + i ;
    console.log(requrl);
    request(requrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            acquireData(body);//获取数据
        }
    })
}
```

这是一个for循环，目的我们来分析分析网页就知道了

注意看我点击了第二页以后地址栏的地址由 
        http://www.mmjpg.com/ 
变化成了 http://www.mmjpg.com/home/2

变化的区域就在于 home/2
所以我们判断 分页的关键就在这里 数字代表几 就是第几页


代码分析完毕，我们来运行程序试试看效果把

运行的方式有两种，
1、webstorm 直接右键运行

2、命令行运行

这里我就采用命令行来运行了

这时候我们的程序已经抓取了大量的图片，程序还在继续运行中。。。
如果你的电脑内存足够大的话，效率会更高


### 好了，视频到这里就结束了。整个代码我会放到我的网站上门。如果感兴趣，你可以下载下来亲自试一试。

当然了，学会了这个爬虫，不仅仅爬去这个一个网站。更好玩的东西等待你去发现呢，比如写个程序去爬行某大型
动作片网站，，，，，，，，，xxxxxxx好了，真的不能再说了。你懂就好。

### 拜拜！！！！！
