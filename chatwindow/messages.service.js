(function() {
  
  angular
    .module('app')
    .factory('MessageGenerator', MessageGenerator);

  // MessageGenerator.$inject = ['$rootScope', '$interval']


  function MessageGenerator () {

    var messages = [
      'BOFH Excuse #400: We are Microsoft. What you are experiencing is not a ' +
        'problem; it is an undocumented feature.',
      'It is not the critic who counts; not the man who points out how the ' + 
        'strong man stumbles, or where the doer of deeds could have done them ' +
        'better. The credit belongs to the man who is actually in the arena, ' +
        'whose face is marred by dust and sweat and blood...',
      'Life is not a problem to be solved, but a reality to be experienced.',
      'One\'s objective should be to get it right, get it quick, get it out, ' +
        'and get it over... your problem won\'t improve with age.'
    ];

    var users = [ 
      'BOFH', 
      'Teddy Roosevelt',
      'Soren Kierkegaard',
      'Warren Buffett'
    ];

    function createMessage () {
      var randomMessage = messages[Math.floor(Math.random()*messages.length)]
      var randomUser = users[Math.floor(Math.random()*users.length)];
      return {message: randomMessage, user: randomUser};
    }

    function loadMessages () {
      return messages.map(function(val, i) {
        return {message: val, user: users[i]};
      })
    }

    return {
      createMessage: createMessage,
      loadMessages: loadMessages
    }
  }

})();