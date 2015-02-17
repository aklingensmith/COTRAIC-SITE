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
                    link: "#/WhatisEarlyHeadStart"

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
                    },
                {
                    name: "Contact",
                    link: "#/earlyHeadstartContact"
                    }]
                },
        {
            name: "Pre-K",
            link: "#/preK",
            nodes: [{
                    name: "What is Pre-K?",
                    link: ""
                    },
                {
                    name: "Locations",
                    link: "#/preKLocations"
                    },
                {
                    name: "Am I Eligible?",
                    link: "#/preKEligible"
                    },
                {
                    name: "Enrollment",
                    link: "#/preKEnrollment"
                    },
                {
                    name: "Contact",
                    link: "#/preKContact"
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
                                    name: "Am I Eligible?",
                                    link: "#/WIAEligible"
                        },
                                {
                                    name: "WIA Locations",
                                    link: "#/WIALocations"
                            },

                                {
                                    name: "WIA Contact",
                                    link: "#/WIAContact"
                            }]
                    }]
                }
            ]
        }
    ];
}]);