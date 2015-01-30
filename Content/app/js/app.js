var app = angular.module('cotriacWebApp', ['ngRoute']);

var services = angular.module("Services", []);

var directives = angular.module('Directives', ['Services']);

var controllers = angular.module('Controllers', ['Services']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/historyAndPurpose', {
            templateUrl: 'historyAndPurpose/historyAndPurpose.html',
            controller: 'HistoryAndPurposeController'
        })
        .when('/aboutUs', {
            templateUrl: 'aboutUs/aboutUs.html',
            controller: 'AboutUsController'
        })
        .otherwise({
            redirectTo: '/historyAndPurpose'
        });
}]);