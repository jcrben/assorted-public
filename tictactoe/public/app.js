'use strict'

angular
  .module('app', [
    'ui.router',
    'ui.bootstrap',
  ])
  .config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider']

function configure ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider.state("game", {
    url: "/",
    templateUrl: "game/game.html"
  })
}
  




