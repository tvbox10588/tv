/*地址发布页 https://www.dmxq.vip */
var rule = {
            title:'大米星球',
            host:'https://www.dmxq.vip',
            hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"ul&&li:eq(1)&&a&&href");print(src);HOST=src',
            url:'/vodshow/fyclassfyfilter.html',
            searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
            searchable: 1,//是否启用全局搜索,
            quickSearch: 1,//是否启用快速搜索,
            filterable:1,//是否启用分类筛选,
	filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}----fypage---{{fl.year}}',
	filter: {
		"20":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"仙俠","v":"仙侠"},{"n":"劇情","v":"剧情"},{"n":"科幻","v":"科幻"},{"n":"動作","v":"动作"},{"n":"喜劇","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"冒險","v":"冒险"},{"n":"兒童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"音樂","v":"音乐"},{"n":"奇幻","v":"奇幻"},{"n":"動畫","v":"动画"},{"n":"恐怖","v":"恐怖"},{"n":"驚悚","v":"惊悚"},{"n":"喪屍","v":"丧尸"},{"n":"戰爭","v":"战争"},{"n":"傳記","v":"传记"},{"n":"紀錄","v":"纪录"},{"n":"犯罪","v":"犯罪"},{"n":"懸疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"災難","v":"灾难"},{"n":"古裝","v":"古装"},{"n":"武俠","v":"武侠"},{"n":"家庭","v":"家庭"},{"n":"短片","v":"短片"},{"n":"校園","v":"校园"},{"n":"文藝","v":"文艺"},{"n":"運動","v":"运动"},{"n":"青春","v":"青春"},{"n":"同性","v":"同性"},{"n":"勵志","v":"励志"},{"n":"人性","v":"人性"},{"n":"美食","v":"美食"},{"n":"女性","v":"女性"},{"n":"治愈","v":"治愈"},{"n":"歷史","v":"历史"},{"n":"真人秀","v":"真人秀"},{"n":"脫口秀","v":"脱口秀"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"英國","v":"英国"},{"n":"法國","v":"法国"},{"n":"德國","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰國","v":"泰国"},{"n":"丹麥","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄羅斯","v":"俄罗斯"},{"n":"義大利","v":"意大利"},{"n":"比利時","v":"比利时"},{"n":"愛爾蘭","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亞","v":"澳大利亚"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"英語","v":"英语"},{"n":"法語","v":"法语"},{"n":"國語","v":"国语"},{"n":"粵語","v":"粤语"},{"n":"日語","v":"日语"},{"n":"韓語","v":"韩语"},{"n":"泰語","v":"泰语"},{"n":"德語","v":"德语"},{"n":"俄語","v":"俄语"},{"n":"閩南語","v":"闽南语"},{"n":"丹麥語","v":"丹麦语"},{"n":"波蘭語","v":"波兰语"},{"n":"瑞典語","v":"瑞典语"},{"n":"印地語","v":"印地语"},{"n":"挪威語","v":"挪威语"},{"n":"義大利語","v":"意大利语"},{"n":"西班牙語","v":"西班牙语"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"21":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"劇情","v":"剧情"},{"n":"喪屍","v":"丧尸"},{"n":"仙俠","v":"仙侠"},{"n":"穿越","v":"穿越"},{"n":"驚悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"言情","v":"言情"},{"n":"科幻","v":"科幻"},{"n":"動作","v":"动作"},{"n":"喜劇","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"偶像","v":"偶像"},{"n":"都市","v":"都市"},{"n":"軍旅","v":"军旅"},{"n":"諜戰","v":"谍战"},{"n":"罪案","v":"罪案"},{"n":"宫廷","v":"宫廷"},{"n":"冒險","v":"冒险"},{"n":"兒童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"音樂","v":"音乐"},{"n":"奇幻","v":"奇幻"},{"n":"動畫","v":"动画"},{"n":"戰爭","v":"战争"},{"n":"傳記","v":"传记"},{"n":"記錄","v":"记录"},{"n":"犯罪","v":"犯罪"},{"n":"懸疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"災難","v":"灾难"},{"n":"古裝","v":"古装"},{"n":"武俠","v":"武侠"},{"n":"家庭","v":"家庭"},{"n":"短片","v":"短片"},{"n":"校園","v":"校园"},{"n":"文藝","v":"文艺"},{"n":"運動","v":"运动"},{"n":"青春","v":"青春"},{"n":"同性","v":"同性"},{"n":"勵志","v":"励志"},{"n":"人性","v":"人性"},{"n":"美食","v":"美食"},{"n":"女性","v":"女性"},{"n":"治愈","v":"治愈"},{"n":"歷史","v":"历史"},{"n":"真人秀","v":"真人秀"},{"n":"脫口秀","v":"脱口秀"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"英國","v":"英国"},{"n":"法國","v":"法国"},{"n":"德國","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰國","v":"泰国"},{"n":"丹麥","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄羅斯","v":"俄罗斯"},{"n":"義大利","v":"意大利"},{"n":"比利時","v":"比利时"},{"n":"愛爾蘭","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亞","v":"澳大利亚"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"英語","v":"英语"},{"n":"法語","v":"法语"},{"n":"國語","v":"国语"},{"n":"粵語","v":"粤语"},{"n":"日語","v":"日语"},{"n":"韓語","v":"韩语"},{"n":"泰語","v":"泰语"},{"n":"德語","v":"德语"},{"n":"俄語","v":"俄语"},{"n":"閩南語","v":"闽南语"},{"n":"丹麥語","v":"丹麦语"},{"n":"波蘭語","v":"波兰语"},{"n":"瑞典語","v":"瑞典语"},{"n":"印地語","v":"印地语"},{"n":"挪威語","v":"挪威语"},{"n":"義大利語","v":"意大利语"},{"n":"西班牙語","v":"西班牙语"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"22":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"熱血","v":"热血"},{"n":"科幻","v":"科幻"},{"n":"美少女","v":"美少女"},{"n":"魔幻","v":"魔幻"},{"n":"經典","v":"经典"},{"n":"勵志","v":"励志"},{"n":"少兒","v":"少儿"},{"n":"冒險","v":"冒险"},{"n":"搞笑","v":"搞笑"},{"n":"推理","v":"推理"},{"n":"戀愛","v":"恋爱"},{"n":"治愈","v":"治愈"},{"n":"幻想","v":"幻想"},{"n":"校園","v":"校园"},{"n":"動物","v":"动物"},{"n":"機戰","v":"机战"},{"n":"親子","v":"亲子"},{"n":"兒歌","v":"儿歌"},{"n":"運動","v":"运动"},{"n":"懸疑","v":"悬疑"},{"n":"怪物","v":"怪物"},{"n":"戰爭","v":"战争"},{"n":"益智","v":"益智"},{"n":"青春","v":"青春"},{"n":"童話","v":"童话"},{"n":"競技","v":"竞技"},{"n":"動作","v":"动作"},{"n":"社會","v":"社会"},{"n":"友情","v":"友情"},{"n":"真人版","v":"真人版"},{"n":"電影版","v":"电影版"},{"n":"OVA版","v":"OVA版"},{"n":"TV版","v":"TV版"},{"n":"新番動畫","v":"新番动画"},{"n":"完結動畫","v":"完结动画"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"日本","v":"日本"},{"n":"歐美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"更早","v":"更早"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"23":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"YouTube","v":"YouTube"},{"n":"脫口秀","v":"脱口秀"},{"n":"真人秀","v":"真人秀"},{"n":"選秀","v":"选秀"},{"n":"八卦","v":"八卦"},{"n":"訪談","v":"访谈"},{"n":"情感","v":"情感"},{"n":"生活","v":"生活"},{"n":"晚會","v":"晚会"},{"n":"搞笑","v":"搞笑"},{"n":"音樂","v":"音乐"},{"n":"時尚","v":"时尚"},{"n":"遊戲","v":"游戏"},{"n":"少兒","v":"少儿"},{"n":"體育","v":"体育"},{"n":"紀實","v":"纪实"},{"n":"科教","v":"科教"},{"n":"曲藝","v":"曲艺"},{"n":"歌舞","v":"歌舞"},{"n":"財經","v":"财经"},{"n":"汽車","v":"汽车"},{"n":"播報","v":"播报"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"韓國","v":"韩国"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"35":[{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}]
	},
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA',
                // "Cookie": "searchneed=ok"
            },
            class_name:'電視劇&電影&綜藝&動漫&🔞福利',
            class_url:'21&20&23&22&35',
            //class_parse:'li.swiper-slide.navbar-item;span&&Text;a&&href;/(\\d+).html',
            //cate_exclude:'福利',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级:'a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
            二级: {
                "title": "h1&&Text;.module-info-tag-link:eq(2)&&Text",
                "img": ".lazyload&&src",
                //"img": ".lazyload&&data-original",
                //"desc": ".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text",
                "desc": ".module-info-item-content:eq(4)&&Text;.module-info-tag-link:eq(0)&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item-content:eq(2)&&Text;.module-info-item-content:eq(0)&&Text",
                "content": ".module-info-introduction-content&&p&&Text",
                "tabs": "#y-playList&&.module-tab-item",
                "lists": ".module-play-list:eq(#id) a"
            },
            detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
            搜索:'json:list;name;pic;;id',
        }
