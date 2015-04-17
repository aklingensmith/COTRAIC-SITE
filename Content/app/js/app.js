var app = angular.module('cotriacWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/historyAndPurpose', {
            templateUrl: 'Content/app/js/historyAndPurpose/historyAndPurpose.html',
            controller: 'HistoryAndPurposeController'
        })
        .when('/aboutUs', {
            templateUrl: 'Content/app/js/aboutUs/aboutUs.html',
            controller: 'AboutUsController'
        })
        .when('/aboutUsContact', {
            templateUrl: 'Content/app/js/aboutUsContact/aboutUsContact.html',
            controller: 'AboutUsContactController'
        })
        .when('/preKServices', {
            templateUrl: 'Content/app/js/preKServices/preKServices.html',
            controller: 'PreKServicesController'
        })
        .when('/earlyHeadStartServices', {
            templateUrl: 'Content/app/js/earlyHeadStartServices/earlyHeadStartServices.html',
            controller: 'EarlyHeadStartServicesController'
        })
        .when('/headStartServices', {
            templateUrl: 'Content/app/js/headStartServices/headStartServices.html',
            controller: 'HeadStartServicesController'
        })
        .when('/annualReport', {
            templateUrl: 'Content/app/js/annualReport/annualReport.html',
            controller: 'AnnualReportController'
        })
        .when('/wiaAmIEligible', {
            templateUrl: 'Content/app/js/wiaAmIEligible/wiaAmIEligible.html',
            controller: 'WIAAmIEligibleController'
        })
        .when('/wiaServices', {
            templateUrl: 'Content/app/js/wiaServices/wiaServices.html',
            controller: 'WIAServicesController'
        })
        .when('/wiaLocations', {
            templateUrl: 'Content/app/js/wiaLocations/wiaLocations.html',
            controller: 'WIALocationsController'
        })
        .when('/eldersEligibility', {
            templateUrl: 'Content/app/js/eldersEligibility/eldersEligibility.html',
            controller: 'EldersEligibilityController'
        })
        .when('/earlyEducation', {
            templateUrl: 'Content/app/js/earlyEducation/earlyEducation.html',
            controller: 'EarlyEducationController'
        })
        .when('/assistanceProgramsEldersServices', {
            templateUrl: 'Content/app/js/assistanceProgramsEldersServices/assistanceProgramsEldersServices.html',
            controller: 'AssistanceProgramsEldersServicesController'
        })
        .when('/assistancePrograms', {
            templateUrl: 'Content/app/js/AssistancePrograms/AssistancePrograms.html',
            controller: 'AssistanceProgramsController'
        })
        .when('/eligibility', {
            templateUrl: 'Content/app/js/eligibility/eligibility.html',
            controller: 'EligibilityController'
        })
        .when('/culturalPowWow', {
            templateUrl: 'Content/app/js/culturalPowWow/culturalPowWow.html',
            controller: 'CulturalPowWowController'
        })
        .when('/contact', {
            templateUrl: 'Content/app/js/contact/contact.html',
            controller: 'ContactController'
        })
        .when('/careers', {
            templateUrl: 'Content/app/js/careers/careers.html',
            controller: 'CareersController'
        })
        .when('/boardMembers', {
            templateUrl: 'Content/app/js/boardMembers/boardMembers.html',
            controller: 'BoardMembersController'
        })
        .otherwise({
            redirectTo: '/aboutUs'
        });
}]);