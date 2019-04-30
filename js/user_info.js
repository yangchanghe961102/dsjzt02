function load_user_info() {
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

    info_text.append("text")
        .text("欢迎，" + USERNAME)
        .attr("x", 0)
        .attr("y", text_height * 0.1)
        .attr("font-size", text_height * 0.07);

    info_text.append("text")
        .text("您已去过  " + "20" + "  个城市")
        .attr("x", 0)
        .attr("y", text_height * 0.3)
        .attr("font-size", text_height * 0.07);

    info_text.append("text")
        .text("当前想去城市： ")
        .attr("x", 0)
        .attr("y", text_height * 0.5)
        .attr("font-size", text_height * 0.07);

    info_text.append("text")
        .text("北京                厦门                上海")
        .attr("x", 0)
        .attr("y", text_height * 0.67)
        .attr("font-size", text_height * 0.07);

    info_text.append("text")
        .text("杭州                南京                成都")
        .attr("x", 0)
        .attr("y", text_height * 0.8)
        .attr("font-size", text_height * 0.07);
}