muban.海螺3.二级.title = '.hl-dc-title&&Text;li.hl-col-xs-12:eq(6)--em&&Text';
muban.海螺3.二级.desc = 'li.hl-col-xs-12:eq(1)&&Text;li.hl-col-xs-12:eq(4)--em&&Text;li.hl-col-xs-12:eq(5)--em&&Text;li.hl-col-xs-12:eq(2)--em&&Text;li.hl-col-xs-12:eq(3)--em&&Text';
var rule = {
	title:'KUBO影视[飞]',
	模板:'海螺3',
	host:'https://123kubo.tv',
	// url:'/show/fyclass/page/fypage.html',
	url:'/show/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter: {"1":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"6"},{"n":"喜劇片","v":"7"},{"n":"愛情片","v":"8"},{"n":"科幻片","v":"9"},{"n":"恐怖片","v":"10"},{"n":"劇情片","v":"11"},{"n":"戰爭片","v":"12"},{"n":"紀錄片","v":"20"},{"n":"微電影","v":"21"},{"n":"動漫片","v":"22"}]},{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"驚悚","v":"/class/驚悚"},{"n":"懸疑","v":"/class/懸疑"},{"n":"魔幻","v":"/class/魔幻"},{"n":"罪案","v":"/class/罪案"},{"n":"災難","v":"/class/災難"},{"n":"動畫","v":"/class/動畫"},{"n":"古裝","v":"/class/古裝"},{"n":"青春","v":"/class/青春"},{"n":"歌舞","v":"/class/歌舞"},{"n":"文藝","v":"/class/文藝"},{"n":"生活","v":"/class/生活"},{"n":"歷史","v":"/class/歷史"},{"n":"勵志","v":"/class/勵志"},{"n":"預告片","v":"/class/預告片"},{"n":"搞笑","v":"/class/搞笑"},{"n":"愛情","v":"/class/愛情"},{"n":"喜劇","v":"/class/喜劇"},{"n":"恐怖","v":"/class/恐怖"},{"n":"動作","v":"/class/動作"},{"n":"科幻","v":"/class/科幻"},{"n":"劇情","v":"/class/劇情"},{"n":"戰爭","v":"/class/戰爭"},{"n":"犯罪","v":"/class/犯罪"},{"n":"奇幻","v":"/class/奇幻"},{"n":"武俠","v":"/class/武俠"},{"n":"冒險","v":"/class/冒險"},{"n":"經典","v":"/class/經典"},{"n":"微電影","v":"/class/微電影"},{"n":"運動","v":"/class/運動"},{"n":"兒童","v":"/class/兒童"},{"n":"網路電影","v":"/class/網絡電影"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"美國","v":"/area/美國"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韓國"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],"2":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"2"},{"n":"陸劇","v":"13"},{"n":"港劇","v":"14"},{"n":"台劇","v":"15"},{"n":"日劇","v":"16"},{"n":"韓劇","v":"24"},{"n":"美劇","v":"25"},{"n":"泰劇","v":"26"},{"n":"海外劇","v":"27"}]},{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"言情","v":"/class/言情"},{"n":"都市","v":"/class/都市"},{"n":"家庭","v":"/class/家庭"},{"n":"生活","v":"/class/生活"},{"n":"偶像","v":"/class/偶像"},{"n":"喜劇","v":"/class/喜劇"},{"n":"歷史","v":"/class/歷史"},{"n":"古裝","v":"/class/古裝"},{"n":"武俠","v":"/class/武俠"},{"n":"刑偵","v":"/class/刑偵"},{"n":"戰爭","v":"/class/戰爭"},{"n":"神話","v":"/class/神話"},{"n":"軍旅","v":"/class/軍旅"},{"n":"諜戰","v":"/class/諜戰"},{"n":"商戰","v":"/class/商戰"},{"n":"校園","v":"/class/校園"},{"n":"穿越","v":"/class/穿越"},{"n":"懸疑","v":"/class/懸疑"},{"n":"犯罪","v":"/class/犯罪"},{"n":"科幻","v":"/class/科幻"},{"n":"預告片","v":"/class/預告片"},{"n":"愛情","v":"/class/愛情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"驚悚","v":"/class/驚悚"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"韓國","v":"/area/韓國"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"日本","v":"/area/日本"},{"n":"美國","v":"/area/美國"},{"n":"泰國","v":"/area/泰國"},{"n":"英國","v":"/area/英國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],"3":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"3"},{"n":"內地綜藝","v":"28"},{"n":"日韓綜藝","v":"29"},{"n":"港台綜藝","v":"30"},{"n":"歐美綜藝","v":"31"}]},{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"脫口秀","v":"/class/脫口秀"},{"n":"真人秀","v":"/class/真人秀"},{"n":"選秀","v":"/class/選秀"},{"n":"情感","v":"/class/情感"},{"n":"訪談","v":"/class/訪談"},{"n":"時尚","v":"/class/時尚"},{"n":"晚會","v":"/class/晚會"},{"n":"財經","v":"/class/財經"},{"n":"益智","v":"/class/益智"},{"n":"音樂","v":"/class/音樂"},{"n":"遊戲","v":"/class/遊戲"},{"n":"職場","v":"/class/職場"},{"n":"美食","v":"/class/美食"},{"n":"旅遊","v":"/class/旅遊"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"美國","v":"/area/美國"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韓國"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],"4":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"4"},{"n":"國產動漫","v":"32"},{"n":"日韓動漫","v":"33"},{"n":"港台動漫","v":"34"},{"n":"歐美動漫","v":"35"},{"n":"海外動漫","v":"36"}]},{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"冒險","v":"/class/冒險"},{"n":"熱血","v":"/class/熱血"},{"n":"搞笑","v":"/class/搞笑"},{"n":"少女","v":"/class/少女"},{"n":"推理","v":"/class/推理"},{"n":"競技","v":"/class/競技"},{"n":"益智","v":"/class/益智"},{"n":"童話","v":"/class/童話"},{"n":"經典","v":"/class/經典"},{"n":"運動","v":"/class/運動"},{"n":"勵志","v":"/class/勵志"},{"n":"戰鬥","v":"/class/戰鬥"},{"n":"競技","v":"/class/競技"},{"n":"校園","v":"/class/校園"},{"n":"青春","v":"/class/青春"},{"n":"愛情","v":"/class/愛情"},{"n":"後宮","v":"/class/後宮"},{"n":"百合","v":"/class/百合"},{"n":"治癒","v":"/class/治癒"},{"n":"蘿莉","v":"/class/蘿莉"},{"n":"魔法","v":"/class/魔法"},{"n":"懸疑","v":"/class/懸疑"},{"n":"推理","v":"/class/推理"},{"n":"奇幻","v":"/class/奇幻"},{"n":"科幻","v":"/class/科幻"},{"n":"遊戲","v":"/class/遊戲"},{"n":"神魔","v":"/class/神魔"},{"n":"恐怖","v":"/class/恐怖"},{"n":"血腥","v":"/class/血腥"},{"n":"機戰","v":"/class/機戰"},{"n":"戰爭","v":"/class/戰爭"},{"n":"犯罪","v":"/class/犯罪"},{"n":"歷史","v":"/class/歷史"},{"n":"社會","v":"/class/社會"},{"n":"職場","v":"/class/職場"},{"n":"劇情","v":"/class/劇情"},{"n":"偽娘","v":"/class/偽娘"},{"n":"耽美","v":"/class/耽美"},{"n":"童年","v":"/class/童年"},{"n":"教育","v":"/class/教育"},{"n":"親子","v":"/class/親子"},{"n":"真人","v":"/class/真人"},{"n":"歌舞","v":"/class/歌舞"},{"n":"肉番","v":"/class/肉番"},{"n":"美少女","v":"/class/美少女"},{"n":"輕小說","v":"/class/輕小說"},{"n":"吸血鬼","v":"/class/吸血鬼"},{"n":"女性向","v":"/class/女性向"},{"n":"泡麵番","v":"/class/泡麵番"},{"n":"歡樂向","v":"/class/歡樂向"},{"n":"武俠","v":"/class/武俠"},{"n":"動作","v":"/class/動作"},{"n":"穿越","v":"/class/穿越"},{"n":"寵物","v":"/class/寵物"},{"n":"格鬥","v":"/class/格鬥"},{"n":"玄幻","v":"/class/玄幻"},{"n":"親情","v":"/class/親情"},{"n":"後愛情","v":"/class/後愛情"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"美國","v":"/area/美國"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韓國"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}]},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
	searchUrl:'/search/page/fypage/wd/**.html',
	cate_exclude:'專題',
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/m3u8|mp4/.test(url)) {
			input = url
		} else {
			input
		}
	`,
}
