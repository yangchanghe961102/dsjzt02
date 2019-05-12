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
        .data(curr_list_test)
        .enter()
        .append("g")
        .attr("class", "spot_item")
        .attr("name", function(d) {
            return d.spotName;
        })
        .attr("transform", function(d, i) {
            y = height * 0.9 / 5 * i;
            return "translate(" + width * 0.1 + "," + y + ")";
        })
}