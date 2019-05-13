var USERNAME = "Init";
var USERHEAD = "image/user.jpg";
var CITY_NUM = 20;
var city_list = ["北京", "厦门", "上海", "杭州", "南京", "成都"];

var item_num = 6;

var user_info = {};
var spot_list = {};
var curr_list = {};

var user_info_test = {
    "userId": 4,
    "touxiangId": "4",
    "spotName": "武当山",
    "userName": "张宁",
    "password": "123456"
}

var cur_page = 1;
var spot_list_test = [
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        },
                        {
                            "spotId": "oi10000067",
                            "spotName": "卧龙山",
                            "spotCity": "屯昌",
                            "spotRank": "8",
                            "picture": null,
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": null,
                            "commentsNum": 10
                        },
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷1",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居1",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        },
                        {
                            "spotId": "oi10000067",
                            "spotName": "卧龙山1",
                            "spotCity": "屯昌",
                            "spotRank": "8",
                            "picture": null,
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": null,
                            "commentsNum": 10
                        },
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷2",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居2",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        },
                        {
                            "spotId": "oi10000067",
                            "spotName": "卧龙山2",
                            "spotCity": "屯昌",
                            "spotRank": "8",
                            "picture": null,
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": null,
                            "commentsNum": 10
                        },
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷3",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居3",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        },
                        {
                            "spotId": "oi10000067",
                            "spotName": "卧龙山3",
                            "spotCity": "屯昌",
                            "spotRank": "8",
                            "picture": null,
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": null,
                            "commentsNum": 10
                        },
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷4",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居4",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        },
                        {
                            "spotId": "oi10000067",
                            "spotName": "卧龙山4",
                            "spotCity": "屯昌",
                            "spotRank": "8",
                            "picture": null,
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": null,
                            "commentsNum": 10
                        },
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷5",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居5",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        },
                        {
                            "spotId": "oi10000067",
                            "spotName": "卧龙山5",
                            "spotCity": "屯昌",
                            "spotRank": "8",
                            "picture": null,
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": null,
                            "commentsNum": 10
                        }
                    ]

var reco_cur_num = 1;
var reco_list_test = [
    "武夷山", "金鞭溪大峡谷", "宋庆龄祖居", "卧龙山", "金鞭溪大峡谷1", "宋庆龄祖居1", "卧龙山1", "金鞭溪大峡谷2", "宋庆龄祖居2", "卧龙山2", "金鞭溪大峡谷3", "宋庆龄祖居3", "卧龙山3", "金鞭溪大峡谷4", "宋庆龄祖居4", "卧龙山4", "金鞭溪大峡谷5", "宋庆龄祖居5", "卧龙山5", "金鞭溪大峡谷2", "宋庆龄祖居2"
]

var reco_list_tmp = reco_list_test.slice(reco_cur_num, reco_cur_num + 4);

var curr_list_test = [
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        },
                        {
                            "spotId": "oi10000067",
                            "spotName": "卧龙山",
                            "spotCity": "屯昌",
                            "spotRank": "8",
                            "picture": null,
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": null,
                            "commentsNum": 10
                        },
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        },
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        },
                        {
                            "spotId": "oi10000067",
                            "spotName": "卧龙山",
                            "spotCity": "屯昌",
                            "spotRank": "8",
                            "picture": null,
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": null,
                            "commentsNum": 10
                        },
                        {
                            "spotId": "oi10000046",
                            "spotName": "金鞭溪大峡谷",
                            "spotCity": "武陵源",
                            "spotRank": "100",
                            "picture": "https://img1.qunarzz.com/travel/d3/1805/bd/716a9c981535a2b5.jpg_480x360x95_589dbb20.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时 - 3小时",
                            "spotGrade": "4.8",
                            "commentsNum": "418"
                        },
                        {
                            "spotId": "oi10000063",
                            "spotName": "宋庆龄祖居",
                            "spotCity": "文昌",
                            "spotRank": "13",
                            "picture": " https://img1.qunarzz.com/travel/poi/1712/92/2e504df9bac9e537.jpg_480x360x95_8bab5b67.jpg",
                            "introduce": "峡谷被称为“山水的画廊”，谷内满目青翠，有四季清澈的小溪，小溪旁树木葱葱、花草鲜美，阳光透过林间枝叶的间隙，在水面洒落下斑驳的影子，沿着小溪前行，胜似在画中游。这里还是经典版《西游记》的取景地之一。",
                            "playTime": "建议游玩时间：2小时",
                            "spotGrade": "5.0",
                            "commentsNum": "74"
                        }
                    ]

var reco_list = [{"name": "八达岭长城", "fpath": "image/八达岭长城.jpg"},
                {"name": "故宫", "fpath": "image/故宫.jpg"},
                {"name": "颐和园", "fpath": "image/颐和园.jpg"},
                {"name": "毛感千龙洞", "fpath": "https://img1.qunarzz.com/travel/poi/1712/24/254fe58f18d31537.jpg_480x360x95_bc71b675.jpg"}];
                // {"name": "南锣鼓巷", "fpath": "image/南锣鼓巷.jpg"}];