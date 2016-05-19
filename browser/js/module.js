'use strict';

var juke = angular.module('juke', ['ui.router']);
juke.config(function($locationProvider){
  // $urlRouterProvider.rule(function($injector, $location){
  //   var host = $location.protocol() + '://' + $location.host();
  //   if($location.port()) host += ':' + $location.port()
  //   var location = $location.url();
  //   $location.url(location)
  // })
  $locationProvider.html5Mode(true);
})
