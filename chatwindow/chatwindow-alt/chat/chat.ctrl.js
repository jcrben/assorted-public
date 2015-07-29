(function() {
  'use strict';
  angular.module('app')
  .controller('ChatCtrl', ChatCtrl)

function ChatCtrl (chat, $scope, $timeout, $interval) {
  var model = this;
  chat.chatWindow.init(chat.users, chat.messages);
  model.messages = chat.chatWindow.messages;
  console.log(model.messages);
  model.users = chat.chatWindow.users;

  $(document).ready(function() {
    var name = window.prompt('Please enter your name');
    var primaryUser = new chat.User(name);
    model.primary = primaryUser.name;
  })

  model.handleInput = function() {
    model.messages.push(model.chatInput);
    model.chatInput = '';
  }


}
})();