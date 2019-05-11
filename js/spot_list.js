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

	
}