var app = angular.module('cotriacWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/historyAndPurpose', {
            templateUrl: 'historyAndPurpose/historyAndPurpose.html',
            controller: 'HistoryAndPurposeController'
        })
        .when('/aboutUs', {
            templateUrl: 'aboutUs/aboutUs.html',
            controller: 'AboutUsController'
        })
	   .when('/annualReport', {
            templateUrl: 'annualReport/annualReport.html',
            controller: 'annualReportController'
        })

        .otherwise({
            redirectTo: '/historyAndPurpose'
        });
}]);
