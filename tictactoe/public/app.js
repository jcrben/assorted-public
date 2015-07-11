'use strict'

angular
  .module('app', [
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.tpls'
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




