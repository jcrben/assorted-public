// with help from http://bost.ocks.org/mike/bar/3/

// var data = [30, 4, 8, 15, 16, 17, 23, 42];

var data = [
    { "2011": [1000, 500, 500] },
    { "2012": [300, 600, 500] },
    { "2013": [400, 900, 500] }
];
var width = 300;
var columnHeight = 20;
var height = 500;

var y = d3.scale.linear()
    .domain([0, 2000])
    .range([0, height]);
// debugger;
var chart = d3.select('.chart')
    .attr('width', width)
    .attr('height', height);

var barWidth = width/data.length;

var bar = chart.selectAll('g')
    .data(data)
  .enter().append('g')
    // .attr('transform', function (d, i) { return 'translate(0,' + i * columnHeight + ")"; });

bar.append('rect')
    .attr("y", function(d) { 
        var key = Object.keys(d)[0];
        return height - y(d[key][0]); 
        })
    .attr("x", function(d, i) { return i*barWidth})
    .attr("height", function(d) { 
        var key = Object.keys(d)[0];
        return y(d[key][0])})
    .attr("width", barWidth - 10)
    .attr('fill', "blue");

bar.append('rect')
    .attr("y", function(d) { 
        var key = Object.keys(d)[0];
        return height - y(d[key][1]) - y(d[key][0]); })
    .attr("x", function(d, i) { return i*barWidth})
    .attr("height", function(d) { 
        var key = Object.keys(d)[0];
        return y(d[key][1])})
    .attr("width", barWidth - 10)
    .attr('fill', "orange");
// bar.append('text')
//     .attr('x', function(d) { return y(d) - 3; })
//     .attr('y', columnHeight /2)
//     .attr('dy', '.35em')
//     .text(function(d) { return d; });


// d3.select('body')
//     .style('background-color', 'white')
//     .selectAll('div')
//     .data(data)
//   .enter().append('div')
//     .style('border', '1px black solid')
//     .style('width', function(d) { return d * 10 + 'px';})
//     .html(function(d) { return d});

  