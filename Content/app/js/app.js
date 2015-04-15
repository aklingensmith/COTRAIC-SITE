var app = angular.module('cotriacWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/historyAndPurpose', {
            templateUrl: 'app/js/historyAndPurpose/historyAndPurpose.html',
            controller: 'HistoryAndPurposeController'
        })
        .when('/aboutUs', {
            templateUrl: 'app/js/aboutUs/aboutUs.html',
            controller: 'AboutUsController'
        })
        .when('/aboutUsContact', {
            templateUrl: 'app/js/aboutUsContact/aboutUsContact.html',
            controller: 'AboutUsContactController'
        })
        .when('/preKServices', {
            templateUrl: 'app/js/preKServices/preKServices.html',
            controller: 'PreKServicesController'
        })
        .when('/earlyHeadStartServices', {
            templateUrl: 'app/js/earlyHeadStartServices/earlyHeadStartServices.html',
            controller: 'EarlyHeadStartServicesController'
        })
        .when('/headStartServices', {
            templateUrl: 'app/js/headStartServices/headStartServices.html',
            controller: 'HeadStartServicesController'
        })
        .when('/annualReport', {
            templateUrl: 'app/js/annualReport/annualReport.html',
            controller: 'AnnualReportController'
        })
        .when('/wiaAmIEligible', {
            templateUrl: 'app/js/wiaAmIEligible/wiaAmIEligible.html',
            controller: 'WIAAmIEligibleController'
        })
        .when('/wiaServices', {
            templateUrl: 'app/js/wiaServices/wiaServices.html',
            controller: 'WIAServicesController'
        })
        .when('/wiaLocations', {
            templateUrl: 'app/js/wiaLocations/wiaLocations.html',
            controller: 'WIALocationsController'
        })
        .when('/eldersEligibility', {
            templateUrl: 'app/js/eldersEligibility/eldersEligibility.html',
            controller: 'EldersEligibilityController'
        })
        .when('/earlyEducation', {
            templateUrl: 'app/js/earlyEducation/earlyEducation.html',
            controller: 'EarlyEducationController'
        })
        .when('/assistanceProgramsEldersServices', {
            templateUrl: 'app/js/assistanceProgramsEldersServices/assistanceProgramsEldersServices.html',
            controller: 'AssistanceProgramsEldersServicesController'
        })
        .when('/assistancePrograms', {
            templateUrl: 'app/js/AssistancePrograms/AssistancePrograms.html',
            controller: 'AssistanceProgramsController'
        })
        .when('/eligibility', {
            templateUrl: 'app/js/eligibility/eligibility.html',
            controller: 'EligibilityController'
        })
        .when('/culturalPowWow', {
            templateUrl: 'app/js/culturalPowWow/culturalPowWow.html',
            controller: 'CulturalPowWowController'
        })
        .when('/contact', {
            templateUrl: 'app/js/contact/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/aboutUs'
        });
}]);