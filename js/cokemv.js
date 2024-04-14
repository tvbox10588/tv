// 搜索验证 --> drpy_ocr验证码提交成功
var rule = {
    title: 'cokemv',
    host: 'http://cokemv.fun',
    homeUrl: '/label/week.html',
    url: '/show/fyfilter.html',
    searchUrl:'/search/**----------fypage---.html',
    //searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
    filterable: 1, //是否启用分类筛选,
    filter_url: '{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter:{
		"1":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"netflix"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"动画","v":"动画"},{"n":"悬疑","v":"悬疑"},{"n":"犯罪","v":"犯罪"},{"n":"惊悚","v":"惊悚"},{"n":"冒险","v":"冒险"},{"n":"历史","v":"历史"},{"n":"奇幻","v":"奇幻"},{"n":"恐怖","v":"恐怖"},{"n":"战争","v":"战争"},{"n":"传记","v":"传记"},{"n":"歌舞","v":"歌舞"},{"n":"武侠","v":"武侠"},{"n":"灾难","v":"灾难"},{"n":"古装","v":"古装"},{"n":"运动","v":"运动"},{"n":"西部","v":"西部"},{"n":"纪录片","v":"纪录片"},{"n":"短片","v":"短片"},{"n":"音乐","v":"音乐"},{"n":"家庭","v":"家庭"},{"n":"儿童","v":"儿童"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰國","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"荷兰","v":"荷兰"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"汉语普通话"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"俄语","v":"俄语"},{"n":"印度语","v":"印度语"},{"n":"马来语","v":"马来语"},{"n":"西班牙语","v":"西班牙语"},{"n":"意大利语","v":"意大利语"},{"n":"爱尔兰语","v":"爱尔兰语"},{"n":"瑞典语","v":"瑞典语"},{"n":"葡萄牙语","v":"葡萄牙语"},{"n":"阿拉伯语","v":"阿拉伯语"},{"n":"挪威语","v":"挪威语"},{"n":"希伯来语","v":"希伯来语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}],
		"2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"netflix"},{"n":"HBO","v":"hbo"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"悬疑","v":"悬疑"},{"n":"武侠","v":"武侠"},{"n":"犯罪","v":"犯罪"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"历史","v":"历史"},{"n":"战争","v":"战争"},{"n":"动作","v":"动作"},{"n":"家庭","v":"家庭"},{"n":"冒险","v":"冒险"},{"n":"传记","v":"传记"},{"n":"剧情","v":"剧情"},{"n":"奇幻","v":"奇幻"},{"n":"惊悚","v":"惊悚"},{"n":"灾难","v":"灾难"},{"n":"古装","v":"古装"},{"n":"歌舞","v":"歌舞"},{"n":"音乐","v":"音乐"},{"n":"动画","v":"动画"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰國","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"荷兰","v":"荷兰"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"汉语普通话"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"俄语","v":"俄语"},{"n":"印度语","v":"印度语"},{"n":"马来语","v":"马来语"},{"n":"西班牙语","v":"西班牙语"},{"n":"意大利语","v":"意大利语"},{"n":"爱尔兰语","v":"爱尔兰语"},{"n":"瑞典语","v":"瑞典语"},{"n":"葡萄牙语","v":"葡萄牙语"},{"n":"阿拉伯语","v":"阿拉伯语"},{"n":"挪威语","v":"挪威语"},{"n":"希伯来语","v":"希伯来语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}],
		"3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"netflix"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"悬疑","v":"悬疑"},{"n":"犯罪","v":"犯罪"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"战争","v":"战争"},{"n":"动作","v":"动作"},{"n":"动画","v":"动画"},{"n":"冒险","v":"冒险"},{"n":"剧情","v":"剧情"},{"n":"奇幻","v":"奇幻"},{"n":"惊悚","v":"惊悚"},{"n":"灾难","v":"灾难"},{"n":"短片","v":"短片"},{"n":"歌舞","v":"歌舞"},{"n":"音乐","v":"音乐"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"中国大陆"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"汉语普通话"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}],
		"4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"纪录片","v":"纪录片"},{"n":"历史","v":"历史"},{"n":"真人秀","v":"真人秀"},{"n":"脱口秀","v":"脱口秀"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"中国大陆"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}]
	     },
    filter_def:{1:{cateId:'1',by:'hits'},2:{cateId:'2',by:'hits'},3:{cateId:'3',by:'hits'},4:{cateId:'4',by:'hits'}},
    class_name: '电影&电视剧&动漫&综艺',
    class_url: '1&2&3&4',
    play_parse: true,
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		let play_Url = 'json:http://127.0.0.1:10079/parse/?thread=0&proxy=&url=';
		if (/\\.m3u8|\\.mp4/.test(url)) {
			input = {
				jx: 0,
				url: url,
				playUrl: play_Url,
				parse: 1
			}
		} else if (/\\/share/.test(url)) {
			url = getHome(url) + request(url).match(/main.*?"(.*?)"/)[1];
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else {
			input
		}
	`,
    limit: 6,
    推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    double: true, // 推荐内容是否双层定位
    一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级: {
        "title": 'h1&&Text;.module-info-tag-link:eq(2)&&Text',
        "img": ".lazyload&&data-original",
        "desc": '.module-info-item-content:eq(6)&&Text;.module-info-tag-link:eq(0)&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text',
        "content": '.show-desc&&Text',
        "tabs": '#y-playList&&.module-tab-item',
        "lists": ".module-play-list:eq(#id) a"
    },
    detailUrl:'/detail/fyid.html', //非必填,二级详情拼接链接
    //搜索:'json:list;name;pic;;id',
    搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
}
