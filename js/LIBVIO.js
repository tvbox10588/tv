// 永久网址：https://libvio.app
var rule = {
            title:'LIBVIO',
            host:'https://libvio.app',
            hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"li:eq(0)&&a:eq(0)&&href");print(src);HOST=src',
            url:'/show/fyclassfyfilter.html',
            filterable:1,//是否启用分类筛选,
            filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}----fypage---{{fl.year}}',
            filter: 
                    {
                    "1":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"動作","v":"动作"},{"n":"喜劇","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"懸疑","v":"悬疑"},{"n":"犯罪","v":"犯罪"},{"n":"劇情","v":"剧情"},{"n":"戰爭","v":"战争"},{"n":"動畫","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"武俠","v":"武侠"},{"n":"冒險","v":"冒险"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"臺灣","v":"中国台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"法語","v":"法语"},{"n":"德語","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
                    "2":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"古裝","v":"古装"},{"n":"劇情","v":"剧情"},{"n":"喜劇","v":"喜剧"},{"n":"青春偶像","v":"青春偶像"},{"n":"農村","v":"农村"},{"n":"歷史","v":"历史"},{"n":"犯罪","v":"犯罪"},{"n":"家庭","v":"家庭"},{"n":"奇幻","v":"奇幻"},{"n":"動作","v":"动作"},{"n":"戰爭","v":"战争"},{"n":"鄉村","v":"乡村"},{"n":"經典","v":"经典"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"臺灣","v":"中国台湾"},{"n":"香港","v":"中国香港"},{"n":"韓國","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰國","v":"泰国"},{"n":"美國","v":"美国"},{"n":"德國","v":"德国"},{"n":"英國","v":"英国"},{"n":"加拿大","v":"加拿大"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
                    "3":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
                    "4":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國","v":"中国"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}]
                   },
            headers:{'User-Agent':'MOBILE_UA'},
            //class_parse:'.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;/(\\d+).html',
            class_name:'電影&電視劇&綜藝&動漫&即將上映', 
            class_url:'1&2&3&4&27',
            tab_exclude:'夸克网盘|百度云盘',
            pagecount:{"27":1},
            play_parse: true,
               lazy:`js: var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
               var url = html.url;
               var from = html.from;
               var next = html.link_next;
               var id = html.id;
               var nid = html.nid;
               var paurl = request("https://libvio.cc/static/player/" + from + ".js").match(/ src="(.*?)'/)[1];
               if (/https/.test(paurl)) {
	var purl = paurl + url + "&next=" + next + "&id=" + id + "&nid=" + nid;
	input = {
		jx: 0,
		url: request(purl).match(/var .* = '(.*?)'/)[1],
		parse: 0
	}
             }`,
            limit: 6,
            推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            二级: {
                "title":  'h1&&Text;.data:eq(0)&&Text',
                "img": ".stui-content__thumb .lazyload&&data-original",
                "desc":  '.data.hidden-xs&&Text;;;.data:eq(1)&&Text;.data:eq(4)&&Text',
                "content": '.detail-content&&Text',
                "tabs": ".stui-vodlist__head h3",
                "lists": ".stui-content__playlist:eq(#id) li"
            },
            searchUrl:'/index.php/ajax/suggest?mid=1&wd=**',
            detailUrl:'/detail/fyid.html', //非必填,二级详情拼接链接
            搜索:'json:list;name;pic;;id',
            //搜索: 'ul.stui-vodlist__media:eq(0) li,ul.stui-vodlist:eq(0) li,#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
            搜索1: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
            搜索2: 'ul.stui-vodlist__media&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
}
