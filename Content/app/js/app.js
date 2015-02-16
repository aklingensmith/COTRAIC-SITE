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
        .when('/ContactCotraic', {
            templateUrl: 'aboutUsContact/aboutUsContact.html',
            controller: 'AboutUsContactController'
        })
        .when('/preK', {
            templateUrl: 'preK/preK.html',
            controller: 'preKController'
        })
        .when('/EarlyHeadStart', {
            templateUrl: 'EarlyHeadStart/EarlyHeadStart.html',
            controller: 'EarlyHeadStartController'
        })
        .when('/annualReport', {
            templateUrl: 'annualReport/annualReport.html',
            controller: 'annualReportController'
        })
        .when('/whatIsHeadStart', {
            templateUrl: 'headStart/whatIsHeadStart.html',
            controller: 'WhatIsHeadStartController'
        })
        .when('/eldersEligibility', {
            templateUrl: 'eldersEligibility/eldersEligibility.html',
            controller: 'eldersEligibilityController'
        })
        .when('/earlyHeadStartEnrollment', {
            templateUrl: 'EarlyHeadStart/earlyHeadStartEnrollment.html',
            controller: 'earlyHeadStartEnrollmentController'
        })
        .when('/preKEnrollment', {
            templateUrl: 'preK/preKEnrollment.html',
            controller: 'preKEnrollmentController'
        })
        .when('/earlyHeadStartEligibility', {
            templateUrl: 'EarlyHeadStart/earlyHeadStartEligibility.html',
            controller: 'earlyHeadStartEligibilityController'
        })
        .otherwise({
            redirectTo: '/aboutUs'
        });
}]);