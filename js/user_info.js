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
        .text("您已去过  " + CITY_NUM + "  个城市")
        .attr("x", 0)
        .attr("y", text_height * 0.3)
        .attr("font-size", text_height * 0.07);

    info_text.append("text")
        .text("当前想去城市： ")
        .attr("id", "city")
        .attr("x", 0)
        .attr("y", text_height * 0.5)
        .attr("font-size", text_height * 0.07);

    for (i = 0; i < 6; ++i) {
        info_text.append("text")
            .text(city_list[i])
            .attr("x", function(d){
                return (i % 3) * width * 0.25;
            })
            .attr("y", function(d){
                return text_height * (parseInt(i / 3) * 0.13 + 0.67);
            })
            .attr("font-size", text_height * 0.07);
    }


    head_width = width * 0.3;
    head_height = height * 0.5;
    head_size = Math.min(head_width, head_height);
    var head_image = svg.append("g").append("image")
        .attr("xlink:href", USERHEAD)
        .attr("id", "head_image")
        .attr("width", head_size * 0.9)
        .attr("height", head_size * 0.9)
        .attr("x", text_width + (head_width - head_size) / 2)
        .attr("y", (head_height - head_size) / 2);
}