function init_spot_list() {
    var margin = {top: 5, right: 5, bottom: 5, left: 5};
    var width = document.getElementById("spot_list").clientWidth - margin.left - margin.right;
    var height = document.getElementById("spot_list").clientHeight - margin.top - margin.bottom;
    var font_size = d3.select("#user_info").select("#user_info_svg").attr("height") * 0.07;

    var svg = d3.select("#spot_list").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "spot_list_svg")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var spot_filter = svg.append("g")
        .attr("id", "spot_filter")
        .attr("transform", "translate(0,0)");

    var spot_items = svg.append("g")
        .attr("id", "spot_items")
        .attr("transform", "translate(0," + height * 0.1 + ")");

    var spot_item = spot_items.selectAll(".spot_item")
        .data(curr_list)
        .enter()
        .append("g")
        .attr("class", "spot_item")
        .attr("name", function(d) {
            return d.spotName;
        })
        .attr("transform", function(d, i) {
            y = height * 0.9 / item_num * i;
            return "translate(" + width * 0.1 + "," + y + ")";
        })
        .on("click",function(d,i){
            //alert(d.spotName);
            d3.select('#spot_detail').style('visibility','visible');
            d3.selectAll('.kuang').style('opacity','0.3');
            
            (document.getElementById("spot_image")).src = d.picture;
            if(d.picture === null){
                (document.getElementById("spot_image")).src = "image/picture_null.png";
            }
            //console.log( (document.getElementById("spot_image")))
        })
        .on("mouseover",function(d){
            this.style.cursor = "pointer";
        })
        .on("mouseout", function(d){
            this.style.cursor = "default";
        })

    spot_item.append("image")
        .attr("xlink:href", function(d) {
            if (d.picture === null) {
                d.picture = "image/picture_null.png";
            }
            return d.picture;
        })
        .attr("width", width * 0.2)
        .attr("height", height * 0.8 / item_num)
        .attr("x", width * 0.05)
        .attr("y", height * 0.05 / item_num);

    spot_item.append("text")
        .text(function(d) {
            return d.spotName;
        })
        .attr("font-size", height * 0.16 / item_num)
        .attr("x", width * 0.3)
        .attr("y", height * 0.42 / item_num);

    spot_item.append("text")
        .text(function(d) {
            if (d.spotGrade === null) {
                d.spotGrade = "暂无评分";
            }
            return "评分：" + d.spotGrade;
        })
        .attr("font-size", height * 0.12 / item_num)
        .attr("x", width * 0.7)
        .attr("y", height * 0.46 / item_num);

    var search_g = spot_filter.append("g")
        .attr("id", "search")
        .attr("transform", "translate(" + width * 0.2 + ",0)");

    var jump_g = spot_filter.append("g")
        .attr("id", "jump")
        .attr("transform", "translate(" + width * 0.4 + ",0)");

    var p_page = jump_g.append("text")
        .text("上一页")
        .attr("id", "p_page")
        .attr("font-size", height * 0.06)
        .attr("x", width * 0)
        .attr("y", height * 0.08);

    var c_page = jump_g.append("text")
        .text("第 " + cur_page + " 页")
        .attr("id", "c_page")
        .attr("font-size", height * 0.06)
        .attr("x", width * 0.02 + document.getElementById("p_page").getBBox().width)
        .attr("y", height * 0.08);

    var n_page = jump_g.append("text")
        .text("下一页")
        .attr("id", "n_page")
        .attr("font-size", height * 0.06)
        .attr("x", width * 0.04 + document.getElementById("p_page").getBBox().width + document.getElementById("c_page").getBBox().width)
        .attr("y", height * 0.08);

    p_page.on("mouseover", function(d){
        this.style.cursor = "pointer";
        d3.select(this).selectAll("text")
            .attr("text-decoration", "underline");
    })

    p_page.on("mouseout", function(d){
        this.style.cursor = "default";
        d3.select(this).selectAll("text")
            .attr("text-decoration", "none");
    })

    p_page.on("click", function(d) {
        if (cur_page >= 2) {
            console.log("cur_page: " + cur_page);
            cur_page = cur_page - 1;
            curr_list = spot_list.slice(cur_page * item_num, (cur_page + 1) * item_num);
            reload_reco_item();
        }
    })

    n_page.on("mouseover", function(d){
        this.style.cursor = "pointer";
        d3.select(this).selectAll("text")
            .attr("text-decoration", "underline");
    })

    n_page.on("mouseout", function(d){
        this.style.cursor = "default";
        d3.select(this).selectAll("text")
            .attr("text-decoration", "none");
    })

    n_page.on("click", function(d) {
        if (cur_page <= 1000) {
            console.log("cur_page: " + cur_page);
            cur_page = cur_page + 1;
            curr_list = spot_list.slice(cur_page * item_num, (cur_page + 1) * item_num);
            reload_reco_item();
        }
    })
}

function reload_reco_item() {
    spot_items.selectAll(".spot_item").remove();
    var spot_item = spot_items.selectAll(".spot_item")
        .data(curr_list)
        .enter()
        .append("g")
        .attr("class", "spot_item")
        .attr("name", function(d) {
            return d.spotName;
        })
        .attr("transform", function(d, i) {
            y = height * 0.9 / item_num * i;
            return "translate(" + width * 0.1 + "," + y + ")";
        })
        .on("click",function(d,i){
            //alert(d.spotName);
            d3.select('#spot_detail').style('visibility','visible');
            d3.selectAll('.kuang').style('opacity','0.3');
            
            (document.getElementById("spot_image")).src = d.picture;
            if(d.picture === null){
                (document.getElementById("spot_image")).src = "image/picture_null.png";
            }
            //console.log( (document.getElementById("spot_image")))
        })
        .on("mouseover",function(d){
            this.style.cursor = "pointer";
        })
        .on("mouseout", function(d){
            this.style.cursor = "default";
        })
}