

var data = [4, 8, 15, 16, 23, 42];

var width = 420;
var height = 20;

var xAxis = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select('.chart')
    .attr('width', width)
    .attr('height', barHeight * data.length);


var bar = chart.selectAll('g')
    .data(data)
  .enter().append('g')
    .attr('transform', function (d, i) { return 'translate(0,' + i * barHeight + ")"; });

bar.append('rect')
    .attr('width', xAxis)
    .attr('height', barHeight - 1);

bar.append('text')
    .attr('x', function(d) { return xAxis(d) - 3; })
    .attr('y', barHeight /2)
    .attr('dy', '.35em')
    .text(function(d) { return d; });


// d3.select('body')
//     .style('background-color', 'white')
//     .selectAll('div')
//     .data(data)
//   .enter().append('div')
//     .style('border', '1px black solid')
//     .style('width', function(d) { return d * 10 + 'px';})
//     .html(function(d) { return d});

  