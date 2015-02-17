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
        .when('/preKLocations', {
            templateUrl: 'preKLocations/preKLocations.html',
            controller: 'PreKLocationsController'
        })          
        .when('/preKEligible', {
            templateUrl: 'preKAmIEligible/preKAmIEligible.html',
            controller: 'PreKAmIEligibleController'
        })
        .when('/preKContact', {
            templateUrl: 'preKContact/preKContact.html',
            controller: 'PreKContactController'
        })          
        .when('/EarlyHeadStart', {
            templateUrl: 'EarlyHeadStart/EarlyHeadStart.html',
            controller: 'EarlyHeadStartController'
        })
        .when('/Locations', {
            templateUrl: 'EarlyHeadStart/Locations.html',
            controller: 'LocationsController'
        })
        .when('/earlyHeadstartContact', {
            templateUrl: 'earlyHeadstartContact/earlyHeadstartContact.html',
            controller: 'EarlyHeadstartContactController'
        })
        .when('/annualReport', {
            templateUrl: 'annualReport/annualReport.html',
            controller: 'annualReportController'
        })
        .when('/whatIsHeadStart', {
            templateUrl: 'headStart/whatIsHeadStart.html',
            controller: 'WhatIsHeadStartController'
        })
        .when('/WIAContact', {
            templateUrl: 'WIAProgram/WIAContact.html',
            controller: 'WIAContactController'
        })
        .when('/Enrollment', {
            templateUrl: 'headStart/Enrollment.html',
            controller: 'EnrollmentController'
        })
        .when('/WIAPrograms', {
            templateUrl: 'AssistancePrograms/WIAProgram/WIAPrograms.html',
            controller: 'WIAProgramsController'
        })
        .when('/WIALocations', {
            templateUrl: 'AssistancePrograms/WIAProgram/WIALocations.html',
            controller: 'WIALocationsController'
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
        .when('/WIAEligible', {
            templateUrl: 'wiaAmIEligible/wiaAmIEligible.html',
            controller: 'WIAAmIEligibleController'
        })
        .otherwise({
            redirectTo: '/aboutUs'
        });
}]);