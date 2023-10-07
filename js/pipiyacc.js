// 地址发布页 https://www.ppydy.com
// 一级筛选 数字验证
muban.短视2.二级.tab_text = '.swiper-slide--i&&Text';
var rule = {
	title:'皮皮鸭',
	模板:'短视2',
	host:'https://pipiya.cc',
	//host:'https://www.ppydy.com',
	//hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,".link&&div:eq(1)&&Text");print(src);HOST=src',
	//homeUrl:'/label/rank.html',
	class_name:'電影&電視劇&綜藝&動漫',
	class_url:'20&28&32&25',
	// url: '/vodtype/fyclass/page/fypage.html',
	url:'/vodshow/fyclassfyfilter.html',
	// url: '/api.php/provide/vod?ac=videolist&pg=fypage&t=fyclass',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter:{
		"20":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"喜劇","v":"/class/喜剧"},{"n":"愛情","v":"/class/爱情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"動作","v":"/class/动作"},{"n":"科幻","v":"/class/科幻"},{"n":"劇情","v":"/class/剧情"},{"n":"戰爭","v":"/class/战争"},{"n":"警匪","v":"/class/警匪"},{"n":"犯罪","v":"/class/犯罪"},{"n":"動畫","v":"/class/动画"},{"n":"奇幻","v":"/class/奇幻"},{"n":"冒險","v":"/class/冒险"},{"n":"懸疑","v":"/class/悬疑"},{"n":"驚悚","v":"/class/惊悚"},{"n":"網路電影","v":"/class/网络电影"},{"n":"倫理","v":"/class/伦理"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國","v":"/area/中国"},{"n":"大陸","v":"/area/大陆"},{"n":"中國大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"28":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"古裝","v":"/class/古装"},{"n":"戰爭","v":"/class/战争"},{"n":"青春偶像","v":"/class/青春偶像"},{"n":"喜劇","v":"/class/喜剧"},{"n":"家庭","v":"/class/家庭"},{"n":"犯罪","v":"/class/犯罪"},{"n":"動作","v":"/class/动作"},{"n":"奇幻","v":"/class/奇幻"},{"n":"劇情","v":"/class/剧情"},{"n":"歷史","v":"/class/历史"},{"n":"經典","v":"/class/经典"},{"n":"鄉村","v":"/class/乡村"},{"n":"情景","v":"/class/情景"},{"n":"商戰","v":"/class/商战"},{"n":"網劇","v":"/class/网剧"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國","v":"/area/中国"},{"n":"大陸","v":"/area/大陆"},{"n":"中國大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/中国台湾"},{"n":"韓國","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"美國","v":"/area/美国"},{"n":"英國","v":"/area/英国"},{"n":"泰國","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"32":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"選秀","v":"/class/选秀"},{"n":"情感","v":"/class/情感"},{"n":"訪談","v":"/class/访谈"},{"n":"播報","v":"/class/播报"},{"n":"旅遊","v":"/class/旅游"},{"n":"音樂","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"紀實","v":"/class/纪实"},{"n":"曲藝","v":"/class/曲艺"},{"n":"生活","v":"/class/生活"},{"n":"遊戲互動","v":"/class/游戏互动"},{"n":"財經","v":"/class/财经"},{"n":"求職","v":"/class/求职"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國","v":"/area/中国大陆"},{"n":"港台","v":"/area/港台"},{"n":"日韓","v":"/area/日韩"},{"n":"歐美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"25":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"情感","v":"/class/情感"},{"n":"科幻","v":"/class/科幻"},{"n":"熱血","v":"/class/热血"},{"n":"推理","v":"/class/推理"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒險","v":"/class/冒险"},{"n":"蘿莉","v":"/class/萝莉"},{"n":"校園","v":"/class/校园"},{"n":"動作","v":"/class/动作"},{"n":"機戰","v":"/class/机战"},{"n":"運動","v":"/class/运动"},{"n":"戰爭","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"少女","v":"/class/少女"},{"n":"社會","v":"/class/社会"},{"n":"原創","v":"/class/原创"},{"n":"親子","v":"/class/亲子"},{"n":"益智","v":"/class/益智"},{"n":"勵志","v":"/class/励志"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國","v":"/area/中国大陆"},{"n":"日本","v":"/area/日本"},{"n":"歐美","v":"/area/欧美"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}]
	},
	timeout:5000,
	play_parse:true,
	lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            var MacPlayerConfig={};
            eval(fetch(HOST + "/static/js/playerconfig.js").replace('var Mac','Mac'));
            var jx = MacPlayerConfig.player_list[from].parse;
            if (jx == '') {
                jx = MacPlayerConfig.parse
            };
            if (jx.startsWith("/")) {
                jx = jx = "https:" + jx;
            }
            input={jx:0,url:jx+url,parse:1,
                header: JSON.stringify({
                    'referer': input
                })}
        }
    `,
	detailUrl:'/voddetail/fyid.html',
	// pagecount:{"20":1,"26":1,"21":1,"22":1,"24":1,"27":1,"25":1},
	推荐:'.public-list-exp;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
	一级:'.public-list-box;a&&title;.lazy&&data-original;.hide&&Text;a&&href',
	//一级:'json:list;vod_name;vod_pic;vod_remarks;vod_id',
}
