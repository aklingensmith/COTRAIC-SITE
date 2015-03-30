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
        .when('/aboutUsContact', {
            templateUrl: 'aboutUsContact/aboutUsContact.html',
            controller: 'AboutUsContactController'
        })
        .when('/preK', {
            templateUrl: 'preK/preK.html',
            controller: 'PreKController'
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
        .when('/earlyHeadStart', {
            templateUrl: 'earlyHeadStart/earlyHeadStart.html',
            controller: 'EarlyHeadStartController'
        })
        .when('/earlyHeadStartLocations', {
            templateUrl: 'earlyHeadStartLocations/earlyHeadStartLocations.html',
            controller: 'EarlyHeadStartLocationsController'
        })
        .when('/earlyHeadStartContact', {
            templateUrl: 'earlyHeadStartContact/earlyHeadStartContact.html',
            controller: 'EarlyHeadStartContactController'
        })
        .when('/annualReport', {
            templateUrl: 'annualReport/annualReport.html',
            controller: 'AnnualReportController'
        })
        .when('/whatIsHeadStart', {
            templateUrl: 'headStart/whatIsHeadStart.html',
            controller: 'WhatIsHeadStartController'
        })
        .when('/headStartEnrollment', {
            templateUrl: 'headStartEnrollment/headStartEnrollment.html',
            controller: 'HeadStartEnrollmentController'
        })
        .when('/headStartAmIEligible', {
            templateUrl: 'headStartAmIEligible/headStartAmIEligible.html',
            controller: 'HeadStartAmIEligibleController'
        })
        .when('/wiaContact', {
            templateUrl: 'wiaContact/wiaContact.html',
            controller: 'WIAContactController'
        })
        .when('/wiaPrograms', {
            templateUrl: 'wiaPrograms/wiaPrograms.html',
            controller: 'WIAProgramsController'
        })
        .when('/wiaLocations', {
            templateUrl: 'wiaLocations/wiaLocations.html',
            controller: 'WIALocationsController'
        })
        .when('/eldersEligibility', {
            templateUrl: 'eldersEligibility/eldersEligibility.html',
            controller: 'EldersEligibilityController'
        })
        .when('/earlyEducation', {
            templateUrl: 'earlyEducation/earlyEducation.html',
            controller: 'EarlyEducationController'
        })
        .when('/earlyHeadStartEnrollment', {
            templateUrl: 'earlyHeadStartEnrollment/earlyHeadStartEnrollment.html',
            controller: 'EarlyHeadStartEnrollmentController'
        })
        .when('/preKEnrollment', {
            templateUrl: 'preKEnrollment/preKEnrollment.html',
            controller: 'PreKEnrollmentController'
        })
        .when('/earlyHeadStartEligibility', {
            templateUrl: 'earlyHeadStartEligibility/earlyHeadStartEligibility.html',
            controller: 'EarlyHeadStartEligibilityController'
        })
        .when('/wiaAmIEligible', {
            templateUrl: 'wiaAmIEligible/wiaAmIEligible.html',
            controller: 'WIAAmIEligibleController'
        })
        .when('/assistanceProgramsEldersServices', {
            templateUrl: 'assistanceProgramsEldersServices/assistanceProgramsEldersServices.html',
            controller: 'AssistanceProgramsEldersServicesController'
        })
        .when('/assistancePrograms', {
            templateUrl: 'assistancePrograms/assistancePrograms.html',
            controller: 'AssistanceProgramsController'
        })
        .when('/headStartContact', {
            templateUrl: 'headStartContact/headStartContact.html',
            controller: 'HeadStartContactController'
        })
        .when('/culturalPowWow', {
            templateUrl: 'culturalPowWow/culturalPowWow.html',
            controller: 'CulturalPowWowController'
        })
        .otherwise({
            redirectTo: '/aboutUs'
        });
}]);