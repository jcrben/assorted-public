
var Tree = function(val) {
  this.value = val || 0;
  this.children = [];
  this.metrics = {
    sum: 0,
    number: 0,
    average: 0
  };

}

Tree.prototype.insert = function(val) {
  this.children.push(new Tree(val));
}

Tree.prototype.calculateChildren = function() {

  (function recursiveFn(tree) {
    if (this.children.length === 0) {
      this.metrics = {
        sum: 0,
        number: 0,
        average: 0
      }
    }
    for (var i = 0; i < this.children.length; i++) {
      if (typeof this.children[i].value === 'string') {
        //no-op
      } else {
        var temp = this.children[i].calculateChildren();
        this.metrics.sum += temp.sum + this.children[i].value;
        this.metrics.number += temp.number + 1;
      }
    }
      
  }).call(this);
  this.metrics.average = this.metrics.sum/this.metrics.number;

  return this.metrics;

}

var tree = new Tree(1);
tree.insert('a');
tree.insert(2);
tree.insert(3);
tree.children[0].insert(5);
tree.children[0].insert(6);
tree.calculateChildren();
console.log(tree.metrics);