(function() {
  
  angular
    .module('app')
    .factory('ChatWindow', ChatWindow);

  ChatWindow.$inject = ['$rootScope', '$interval', 'MessageGenerator']

  function ChatWindow ($rootScope, $interval, MessageGenerator) {
    var messages = MessageGenerator.loadMessages();

    return {
      addMessage: addMessage,
      getMessages: getMessages,
    };

    // chatroom
    function addMessage(message){
      messages.push(message);
      $rootScope.$emit('messageAdded');
    }

    function getMessages(){
      return messages;
    }
  }

})();
