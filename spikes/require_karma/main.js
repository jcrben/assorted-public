requirejs.config({
    baseUrl: 'src',
    // paths: {
    //     app: '../app'
    // }
    callback: function() {
      requirejs(['app']);
      
    }
});
