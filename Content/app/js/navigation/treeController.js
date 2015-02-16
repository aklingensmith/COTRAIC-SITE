app.directive('treeview', function () {
    return {
        restrict: "E",
        templateUrl: 'navigation/navigation.html',
        scope: {},
        controller: 'TreeController',
        link: function (scope, e, a, controller) {
            controller.init();
        }
    };
});

app.controller("TreeController", ['$scope', function ($scope) {
    this.init = function () {

    };
    $scope.tree = [
        {
            name: "About Us",
            link: "#/aboutUs",
            nodes: [
                {
                    name: "History & Purpose",
                    link: "#/historyAndPurpose"
                },
                {
                    name: "Annual Report",
                    link: "#/annualReport"
                },
                {
                    name: "Contact Cotraic",
                    link: "#/ContactCotraic"
                }
            ]
        },
        {
            name: "Education",
            nodes: [
                {
                    name: "Headstart",
                    nodes: [{
                            name: "What is Headstart?",
                            link: "#/whatIsHeadStart"
                    },
                        {
                            name: "Enrollment",
                            link: "#/Enrollment"
                    }
                            ]
                    }]
                },
        {
            name: "Early Headstart",
            link: "#/EarlyHeadStart",
            nodes: [{
                    name: "What is Early Headstart?",
                    link: "#WhatisEarlyHeadStart"

                    },
                {
                    name: "Enrollment",
                    link: "#/earlyHeadStartEnrollment"
                        },
                {
                    name: "Am I Eligible?",
                    link: "#/earlyHeadStartEligibility"
                        },
                {
                    name: "Locations",
                    link: "#/Locations"
                    }]
                },
        {
            name: "Pre-K",
            link: "#/preK",
            nodes: [{
                name: "Enrollment",
                link: "#/preKEnrollment"
                    }]
                },
        {
            name: "Assistance Programs",
            nodes: [
                {
                    name: "Elders",
                    nodes: [{
                            name: "Am I eligible?",
                            link: "#/eldersEligibility"
                    },
                        {
                            name: "WIAPrograms",
                            link: "#/WIAPrograms",
                            nodes: [
                                {
                                    name: "WIALocations",
                                    link: "#/WIALocations"
                            },
                                {
                                    name: "WIA Contact",
                                    link: "#/WIAContact"
                            }]
                    }, ]
                }
            ]
        }
    ];
}]);