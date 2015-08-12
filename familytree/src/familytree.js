
'use strict'

var assert = require('assert');
var Tree = function (name, parent) {
  this.name = name;
  this.children = [];
  this.parent = parent || null;
}

Tree.prototype.addChild = function(child) {
  if (typeof child === 'object') {
    this.children.push(child);
  } else if (typeof child === 'string') { // "child" is actually a name
    this.children.push(new Tree(child, this));
  }
}

Tree.prototype.queryOptions = {
  'noChildren': function() {
    var result = [];

    this.traverse(function (member) {
      if (member.children.length === 0) {
        result.push(member);
      }
    });

    return result;
  },
  'noSiblings': function () {
    var result = [];

    this.traverse(function(member) {
      if (member.parent && member.parent.children.length === 1) {
        result.push(member);
      }
    });

    return result;
  },
  'Grandparent': function (name) {
    var result = null;

    this.traverse(function(member) {
      if (member.name === name) {
        result = member.parent.parent;
      }
    });
    return result;
  },
  'mostGrandChildren': function () {
    var result = null;
    var currentMax = 0;

    this.traverse(function(member) {
      member.children.forEach(function(child) {
        if (child.children.length > currentMax) {
          currentMax = child.children.length;
          result = member;
        }
      })
    })
    return result;
  }
}

Tree.prototype.traverse = function (callback) {
  callback(this);

  if (this.children === 0) {
    return;
  } 

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
}

Tree.prototype.query = function (query, arg) {
  query = this.queryOptions[query].bind(this, arg);
  if (query) {
    return query(arg);
  } else {
    console.log('Invalid query');
  }
}

var data = {

  'Nancy': {
    'Adam': null,
    'Carl': {
      'Catherine': null,
      'Joseph': null
    },
    'Jill': {
      'Kevin': {
        'Samuel': null,
        'George': {
          'Patrick': null,
          'Robert': null
        },
        'James': {
          'Mary': null
        },
        'Aaron': null
      }
    }
  }
}

var test = new Tree('nancy');
test.addChild('joe');
test.addChild('ben');
test.children[0].addChild('george');
test.children[0].addChild('jane');
test.children[0].children[0].addChild('1')
test.children[0].children[0].addChild('2')
test.children[0].children[0].addChild('3')

assert.equal(test.query('Grandparent', 'george').name, 'nancy');
assert.equal(test.query('mostGrandChildren').name, 'joe');

// var createTree = function (name, json, parent) {
//   if (typeof json != 'undefined') {
//     var children = json;
//   }

//   for (var child in children) {
//     createTree(child, json[child], tree);
//     tree.addChild(child);
//   }
//   var tree = new Tree(name);
//   parent = parent || null;


//   if (!children) {
//     return 'something';
//   }

//   return tree;
// }

// //   // nodes.forEach(function(val) {
// //   //   if (parent) {
// //   //     parent.addChild(val);
// //   //     createTree(json.val, )
// //   //   } else {
// //   //     createTree(json.val, new Tree(val));
// //   //   }
// //   // });

// //   // for (var node in NancyFamily.Nancy) {
// //   //   root.addChild(node.name);
// //   //   if (node.children.length) {
  
// //   //   }
// //   // }
// // }
// var nancy = createTree('Nancy', data);
