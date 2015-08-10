// based on http://www.janwillemtulp.com/2011/03/23/tutorial-line-interpolations-in-d3/

var x = d3.scale.linear().domain([0,10]).range([0,400]),
    y = d3.scale.linear().domain([0,1]).range([0,50]),
    groupHeight = 60,
    topMargin = 100

var data = d3.range(10).map(Math.random);
// var data = []
// d3.range(10).forEach(function(d) { data.push(Math.random()) })

var interpolations = [
      'linear',
      'step-before',
      'basis',
      'basis-closed',
      'cardinal',
      'cardinal-closed'];

var vis = d3.select('body')
            .append('svg:svg')
            .attr('class', 'vis')
            .attr('width', window.innerWidth)
            .attr('height', window.innerHeight)

var lg = vis.selectAll()
    .data(interpolations)
    .enter().append('svg:g')
      .attr('class', function(d) { return d})
      .attr('transform', function(d, i) {
        return 'translate(100,' + (topMargin + i * groupHeight) + ")"
  }).each(drawLine)

function drawLine (p, index) {
  var lineGroup = d3.select('.'+p);

  d3.select('.'+p)
    .append('svg:path')
    .attr('d', getLine(p)(data))
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 3)
    .attr('class', p+'')
}


function getLine(interpolation) {
  return d3.svg.line().x(function(d, i) {
    return x(i);
  }).y(function(d) {
      return y(d);
  }).interpolate(interpolation)
}