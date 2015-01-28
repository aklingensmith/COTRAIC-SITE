// Code goes here

var app = angular.module('bindexample', ['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/count', {
      templateUrl: 'placeholder.html',
      controller: 'mycontroller'
    })
    
    .when('/aboutus', {
      templateUrl: 'aboutus.html',
      controller: 'mycontroller'
    })
    
    
    .otherwise({
      redirectTo: '/count'
    })
  }
])

.controller('mycontroller', ['$scope',
  function($scope) {
    $scope.counter = 1;
    $scope.click = function() {
      $scope.counter = parseInt($scope.counter) + 1;
    }
  }
])