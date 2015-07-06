'use strict'

angular
  .module('app', [
    'ui.router',
    'ui.bootstrap'
  ])
  .config(configure);

configure.$inject = ['$stateProvider']

function configure ($stateProvider) {
  $stateProvider.state("game", {
    url: "/main",
    templateUrl: "game/game.html"
  })
}
  




