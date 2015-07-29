(function() {
  'use strict';
  angular.module('app')
         .factory('chat', chat);

  function chat ($timeout) {
    var messages = [ 
      {content: 'some message', user: 'ben'}, 
      {content: 'some other message', user: 'ben'},
      {content: 'and another', user: 'ben'}
    ];

    var users = [{name: 'ben', messages: messages}]

      return {
        chatWindow: new ChatWindow(),
        User: User,
        messages: messages,
        users: users,
      }

    // chatroom
    function ChatWindow (users, messages) {
      this.users = {};
      this.messages = [];
      this.init = function (users, messages) {
        for (var i = 0; i < users.length; i++) {
          var user = new User(users[i].name, users[i].messages);
          user.chatroom = this;
          this.users[user.name] = user;
        }

        for (var i = 0; i < messages.length; i++) {
          var user = this.users[messages[i].user]
          var message = new Message(messages[i].content, user.name);
          this.messages.push(message);
        }
      };

      this.addMessage = function (message) {
        this.messages.push(message);
      }.bind(this); 
    }

    // ChatWindow.prototype = {
      // init: function init (users, messages) {
      //   for (var i = 0; i < users.length; i++) {
      //     var user = new User(users[i].name, users[i].messages);
      //     user.chatroom = this;
      //     this[user.name] = user;
      //   }

      //   for (var i = 0; i < messages.length; i++) {
      //     var user = this.users[messages[i].username]
      //     var message = new Message(messages[i].content, user)
      //     messages.push(message);
      //   }
      // },

    //   addUser: function addUser (user) {
    //     // not necessary right now
    //     // if (!this.users[i]) {
    //     //   this.users[user.name]
    //     // }
    //   },

    //   removeUser: function removeUser () {
    //     // YAGNI
    //   },

    //   addMessage: function addMessage (message) {
    //     this.messages.push(message);
    //   }.bind(this)       
    // }

    // user
    function User (name, messages, chatroom) {
      this.name = name;
      this.messages = messages;
      this.chatroom = chatroom;

    }

    User.prototype = {
      postMessage: function postMessage (content) {
        var message = new Message(content, this.name);
        this.chatroom.addMessage(message);
      }
    }

    // message
    function Message (content, username) {
      this.content = content;
      this.username = username;
    }
   
  }

})();
