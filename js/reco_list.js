function init_reco_list() {
    var margin = {top: 5, right: 5, bottom: 5, left: 5};
    var width = document.getElementById("reco_list").clientWidth - margin.left - margin.right;
    var height = document.getElementById("reco_list").clientHeight - margin.top - margin.bottom;
    var font_size = d3.select("#user_info").select("#user_info_svg").attr("height") * 0.07;
    
    var svg = d3.select("#reco_list").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "reco_list_svg")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var guess_text = svg.append("g")
        .attr("id", "guess_text_g")
        .attr("transform", "translate(" + width * 0.03 + "," + height * 0.05 + ")");

    guess_text.append("text")
        .text("猜你喜欢")
        .attr("id", "guess_text")
        .attr("x", 0)
        .attr("y", height * 0.05)
        .attr("font-size", font_size);

    var guess_refresh = guess_text.append("g")
        .attr("id", "guess_refresh")
        .attr("transform", function(d){
            x = document.getElementById("guess_text").getBBox().width + text_width * 0.05;
            y = height * 0.05 - font_size;
            return "translate(" + x + "," + y + ")";
        })
        .attr("height", font_size);

    guess_refresh.append("image")
        .attr("xlink:href", "image/refresh_icon.jpg")
        .attr("width", font_size)
        .attr("height", font_size);

    guess_refresh.append("text")
        .text("刷新")
        .attr("x", font_size / 0.7)
        .attr("y", font_size)
        .attr("font-size", font_size)
        .attr("text-decoration", "none");
    
    guess_refresh.on("mouseover", function(d){
        this.style.cursor = "pointer";
        d3.select(this).selectAll("text")
            .attr("text-decoration", "underline");
    })

    guess_refresh.on("mouseout", function(d){
        this.style.cursor = "default";
        d3.select(this).selectAll("text")
            .attr("text-decoration", "none");
    })

    reco_g = svg.append("g")
        .attr("class", "reco_g")
        .attr("transform", "translate(" + width * 0.03 + "," + height * 0.1 + ")");

    reco_item_w = width * 0.47;
    reco_item_h = height * 0.4;

    var reco_items = reco_g.selectAll(".reco_item")
        .data(reco_list)
        .enter()
        .append("g")
        .attr("class", "reco_item")
        .attr("name", function(d) {
            return d.name;
        })
        .attr("fpath", function(d) {
            return d.fpath;
        })
        .attr("transform", function(d, i) {
            x_index = i % 2;
            y_index = parseInt(i / 2);
            console.log(x_index);
            console.log(y_index);
            x = x_index * reco_item_w;
            y = y_index * reco_item_h;
            return "translate(" + x + "," + y + ")";
        })


    reco_items.append("image")
        .attr("xlink:herf", function(d) {
            return d.fpath;
        })
        .attr("width",  reco_item_w * 0.9)
        .attr("height", reco_item_h * 0.9)
        .attr("x", reco_item_w * 0.05)
        .attr("y", reco_item_h * 0.05);

    reco_items.append("text")
        .text(function(d) {
            return d.name;
        })
        .attr("x", 0)
        .attr("y", reco_item_h * 0.9)
        .attr("font-size", font_size);

}