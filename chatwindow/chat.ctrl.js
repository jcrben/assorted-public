(function() {
  'use strict';
  angular
    .module('app')
    .controller('ChatCtrl', ChatCtrl);

  ChatCtrl.$inject = ['$scope', '$rootScope', '$interval', '$timeout', 'MessageGenerator', 'ChatWindow'];

  function ChatCtrl ($scope, $rootScope, $interval, $timeout, MessageGenerator, ChatWindow) {
    var model = this;
    model.messages =  [];


    model.update = function(){
      model.messages = ChatWindow.getMessages();
      console.log('firing');
      $timeout(function() {
        var objDiv = document.querySelector(".chatbox");
        objDiv.scrollTop = objDiv.scrollHeight + 200;
        $scope.$apply();
      }, 1);
    };

    model.postMessage = function(){
      var message = {message: model.chatInput, user: model.primaryUser};
      ChatWindow.addMessage(message);
      model.chatInput = '';
      model.update();
    };

    $interval(function(){
      ChatWindow.addMessage(MessageGenerator.createMessage());
    }.bind(ChatWindow), 5000);

    $rootScope.$on('messageAdded', function(){
      model.update();
    }.bind(model));

    angular.element(document).ready(function () {
      model.primaryUser = prompt('What is your username?');
      model.update();  
      $scope.$apply();
    })
  }
})();