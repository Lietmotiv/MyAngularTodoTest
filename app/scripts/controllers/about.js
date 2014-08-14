'use strict';

/**
 * @ngdoc function
 * @name myAppTest1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAppTest1App
 */
angular.module('myAppTest1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
