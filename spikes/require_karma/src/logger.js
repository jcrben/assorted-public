define(function() {
  return function(input) {
    var header = document.getElementsByTagName('h1')[0];
    var div = document.createElement('div');
    div.textContent = input;
    header.appendChild(div);
  };
});