var rule={
            title:'吼吼[飞]',
            host:'https://hoho.tv',
            url:'/vod/show/fyfilter.html',
            filterable:1,//是否启用分类筛选,
            filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}/page/fypage{{fl.year}}',
            filter: {
                        "1":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"6"},{"n":"喜劇片","v":"7"},{"n":"愛情片","v":"8"},{"n":"科幻片","v":"9"},{"n":"恐怖片","v":"10"},{"n":"劇情片","v":"11"},{"n":"戰爭片","v":"12"},{"n":"災難片","v":"29"},{"n":"懸疑片","v":"32"},{"n":"冒險片","v":"30"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"喜劇","v":"/class/喜剧"},{"n":"愛情","v":"/class/爱情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"動作","v":"/class/动作"},{"n":"科幻","v":"/class/科幻"},{"n":"劇情","v":"/class/剧情"},{"n":"戰爭","v":"/class/战争"},{"n":"警匪","v":"/class/警匪"},{"n":"犯罪","v":"/class/犯罪"},{"n":"動畫","v":"/class/动画"},{"n":"奇幻","v":"/class/奇幻"},{"n":"武俠","v":"/class/武侠"},{"n":"冒險","v":"/class/冒险"},{"n":"槍戰","v":"/class/枪战"},{"n":"恐怖","v":"/class/恐怖"},{"n":"懸疑","v":"/class/悬疑"},{"n":"驚悚","v":"/class/惊悚"},{"n":"經典","v":"/class/经典"},{"n":"青春","v":"/class/青春"},{"n":"文藝","v":"/class/文艺"},{"n":"微電影","v":"/class/微电影"},{"n":"古裝","v":"/class/古装"},{"n":"歷史","v":"/class/历史"},{"n":"運動","v":"/class/运动"},{"n":"農村","v":"/class/农村"},{"n":"兒童","v":"/class/儿童"},{"n":"網路電影影","v":"/class/网络电影"},{"n":"Top美劇","v":"/class/Top美剧"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]}],
                        "2":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"2"},{"n":"國產劇","v":"13"},{"n":"港台劇","v":"14"},{"n":"日韓劇","v":"15"},{"n":"美劇","v":"16"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"懸疑","v":"/class/悬疑"},{"n":"刑偵","v":"/class/刑侦"},{"n":"古裝","v":"/class/古装"},{"n":"戰爭","v":"/class/战争"},{"n":"愛情","v":"/class/爱情"},{"n":"喜劇","v":"/class/喜剧"},{"n":"家庭","v":"/class/家庭"},{"n":"犯罪","v":"/class/犯罪"},{"n":"動作","v":"/class/动作"},{"n":"奇幻","v":"/class/奇幻"},{"n":"劇情","v":"/class/剧情"},{"n":"歷史","v":"/class/历史"},{"n":"經典","v":"/class/经典"},{"n":"鄉村","v":"/class/乡村"},{"n":"商戰","v":"/class/商战"},{"n":"網劇","v":"/class/网剧"},{"n":"其他","v":"/class/其他"},{"n":"Top美劇","v":"/class/Top美剧"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"韓國","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"美國","v":"/area/美国"},{"n":"泰國","v":"/area/泰国"},{"n":"英國","v":"/area/英国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]}],
                        "3":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"選秀","v":"/class/选秀"},{"n":"情感","v":"/class/情感"},{"n":"訪談","v":"/class/访谈"},{"n":"播報","v":"/class/播报"},{"n":"旅遊","v":"/class/旅游"},{"n":"音樂","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"紀實","v":"/class/纪实"},{"n":"曲藝","v":"/class/曲艺"},{"n":"生活","v":"/class/生活"},{"n":"遊戲","v":"/class/游戏"},{"n":"互動","v":"/class/互动"},{"n":"財經","v":"/class/财经"},{"n":"求職","v":"/class/求职"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"港台","v":"/area/港台"},{"n":"日韓","v":"/area/日韩"},{"n":"歐美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]}],
                        "4":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"情感","v":"/class/情感"},{"n":"科幻","v":"/class/科幻"},{"n":"熱血","v":"/class/热血"},{"n":"推理","v":"/class/推理"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒險","v":"/class/冒险"},{"n":"蘿莉","v":"/class/萝莉"},{"n":"校園","v":"/class/校园"},{"n":"動作","v":"/class/动作"},{"n":"機戰","v":"/class/机战"},{"n":"運動","v":"/class/运动"},{"n":"戰爭","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"少女","v":"/class/少女"},{"n":"社會","v":"/class/社会"},{"n":"原創","v":"/class/原创"},{"n":"親子","v":"/class/亲子"},{"n":"益智","v":"/class/益智"},{"n":"勵志","v":"/class/励志"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"國產","v":"/area/国产"},{"n":"日本","v":"/area/日本"},{"n":"歐美","v":"/area/欧美"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]}],
                      "20":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]}]
                      },
            filter_def:{
               1:{cateId:'1',by:'/by/time'},
               2:{cateId:'2',by:'/by/time'},
               3:{cateId:'3',by:'/by/time'},
               4:{cateId:'4',by:'/by/time'},
             20:{cateId:'20',by:'/by/time'}
             },
            class_name:'電影&電視劇&綜藝&動漫&紀錄片', // 分类筛选 /api.php/app/nav
            class_url:'1&2&3&4&20',
            searchUrl:'/vod/search/page/fypage/wd/**.html',
            //class_parse:'.nav-menu-items&&li;a&&title;a&&href;.*/(.*?).html',
            play_parse: true,
            lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
            limit: 6,
            推荐: '*',
            double: false, // 推荐内容是否双层定位
           //推荐: '.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
            //double: true, // 推荐内容是否双层定位
            一级: '.module-items .module-item;.module-item-title&&Text;img&&data-src;.module-item-caption&&span:eq(0)&&Text;a&&href',
            二级: {
                "title": "h1&&Text;.tag-link&&Text",
                "img": ".module-item-pic&&img&&data-src",
                "desc": ".video-info-items:eq(3)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text",
                //"desc": ".video-info-items:eq(0)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text",
                "content": ".vod_content&&Text",
                "tabs": ".module-tab-item",
                "lists": ".module-player-list:eq(#id)&&.scroll-content&&a"
            },
            搜索: '.module-items .module-search-item;.lazyload&&alt;*;.video-serial&&Text;.video-serial&&href',
        }
