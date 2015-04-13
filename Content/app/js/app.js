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
        .when('/preKServices', {
            templateUrl: 'preKServices/preKServices.html',
            controller: 'PreKServicesController'
        })
        .when('/earlyHeadStartServices', {
            templateUrl: 'earlyHeadStartServices/earlyHeadStartServices.html',
            controller: 'EarlyHeadStartServicesController'
        })
        .when('/headStartServices', {
            templateUrl: 'headStartServices/headStartServices.html',
            controller: 'HeadStartServicesController'
        })
        .when('/annualReport', {
            templateUrl: 'annualReport/annualReport.html',
            controller: 'AnnualReportController'
        })
        .when('/wiaAmIEligible', {
            templateUrl: 'wiaAmIEligible/wiaAmIEligible.html',
            controller: 'WIAAmIEligibleController'
        })
        .when('/wiaServices', {
            templateUrl: 'wiaServices/wiaServices.html',
            controller: 'WIAServicesController'
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
        .when('/assistanceProgramsEldersServices', {
            templateUrl: 'assistanceProgramsEldersServices/assistanceProgramsEldersServices.html',
            controller: 'AssistanceProgramsEldersServicesController'
        })
        .when('/assistancePrograms', {
            templateUrl: 'AssistancePrograms/AssistancePrograms.html',
            controller: 'AssistanceProgramsController'
        })
        .when('/eligibility', {
            templateUrl: 'eligibility/eligibility.html',
            controller: 'EligibilityController'
        })
        .when('/culturalPowWow', {
            templateUrl: 'culturalPowWow/culturalPowWow.html',
            controller: 'CulturalPowWowController'
        })
        .when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/aboutUs'
        });
}]);