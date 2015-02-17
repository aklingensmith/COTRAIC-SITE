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
        .when('/assistanceProgramsEldersServices', {
            templateUrl: 'assistanceProgramsEldersServices/assistanceProgramsEldersServices.html',
            controller: 'assistanceProgramsEldersServicesController'
        })
        .when('/headstartContact', {
            templateUrl: 'headstartContact/headstartContact.html',
            controller: 'headstartContactController'
        })
        .when('/culturalPowWow', {
            templateUrl: 'culturalPowWow/culturalPowWow.html',
            controller: 'culturalPowWowController'
        })
        .when('/headstartAmIEligible', {
            templateUrl: 'headstartAmIEligible/headstartAmIEligible.html',
            controller: 'headstartAmIEligibleController'
        })
        .otherwise({
            redirectTo: '/aboutUs'
        });
}]);