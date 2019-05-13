function init_user_info() {
    var margin = {top: 5, right: 5, bottom: 5, left: 5};
    var width = document.getElementById("user_info").clientWidth - margin.left - margin.right;
    var height = document.getElementById("user_info").clientHeight - margin.top - margin.bottom;
    
    var svg = d3.select("#user_info").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "user_info_svg")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    text_width = width * 0.6;
    text_height = height;
    var info_text = svg.append("g")
        .attr("id", "info_text")
        .attr("transform", "translate(" + text_width * 0.05 + "," + text_height * 0.05 + ")");

    var info_time = info_text.append("text")
        .text(getTime())
        .attr("x", 0)
        .attr("y", text_height * 0.1)
        .attr("font-size", text_height * 0.07);

    setInterval(function() {
        info_time.text(getTime());
    }, 1000)

    info_text.append("text")
        .text("欢迎，" + user_info.userName)
        .attr("x", 0)
        .attr("y", text_height * 0.28)
        .attr("font-size", text_height * 0.07);

    // info_text.append("text")
    //     .text("您已去过  " + CITY_NUM + "  个城市")
    //     .attr("id", "city_num")
    //     .attr("x", 0)
    //     .attr("y", text_height * 0.3)
    //     .attr("font-size", text_height * 0.07);

    info_text.append("text")
        .text("您是第  " + user_info.userId + "  位注册的用户")
        .attr("id", "city_num")
        .attr("x", 0)
        .attr("y", text_height * 0.46)
        .attr("font-size", text_height * 0.07);

    info_text.append("text")
        .text("当前喜爱景点： " + user_info.spotName)
        .attr("id", "city_text")
        .attr("x", 0)
        .attr("y", text_height * 0.64)
        .attr("font-size", text_height * 0.07);

    var info_edit = info_text.append("g")
        .attr("id", "info_edit")
        .attr("transform", function(d){
            x = document.getElementById("city_text").getBBox().width + text_width * 0.05;
            return "translate(" + x + "," + text_height * 0.57 + ")"
        })
        .attr("height", text_height * 0.07);

    // info_edit.append("image")
    //     .attr("xlink:href", "image/edit_icon.jpg")
    //     .attr("width", text_height * 0.07)
    //     .attr("height", text_height * 0.07);
    //
    // info_edit.append("text")
    //     .text("编辑")
    //     .attr("x", text_height * 0.1)
    //     .attr("y", text_height * 0.07)
    //     .attr("font-size", text_height * 0.07)
    //     .attr("text-decoration", "none");

    info_text.append("text")
        .text("祝您出行愉快！")
        .attr("id", "city_text")
        .attr("x", 0)
        .attr("y", text_height * 0.82)
        .attr("font-size", text_height * 0.07);

    // for (i = 0; i < 6; ++i) {
    //     info_text.append("text")
    //         .text(city_list[i])
    //         .attr("x", function(d){
    //             return (i % 3) * width * 0.25;
    //         })
    //         .attr("y", function(d){
    //             return text_height * (parseInt(i / 3) * 0.13 + 0.67);
    //         })
    //         .attr("font-size", text_height * 0.07);
    // }

    head_width = width * 0.4;
    head_height = height * 0.45;
    head_size = Math.min(head_width, head_height);
    var head_image = svg.append("g").append("image")
        .attr("xlink:href", "image/image_" + user_info.touxiangId + ".jpg")
        .attr("id", "head_image")
        .attr("width", head_size)
        .attr("height", head_size)
        .attr("x", text_width + (head_width - head_size) / 2)
        .attr("y", head_height * 0.47 + (head_height - head_size) / 2);

    // info_edit.on("mouseover", function(d){
    //     this.style.cursor = "pointer";
    //     d3.select(this).selectAll("text")
    //         .attr("text-decoration", "underline");
    // })
    //
    // info_edit.on("mouseout", function(d){
    //     this.style.cursor = "default";
    //     d3.select(this).selectAll("text")
    //         .attr("text-decoration", "none");
    // })
}

function getTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hours = time.getHours();
    var min = time.getMinutes();
    var seconds = time.getSeconds();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return year + "年" + month + "月" + date + "日  " + hours + ":" + min + ":" + seconds;
}