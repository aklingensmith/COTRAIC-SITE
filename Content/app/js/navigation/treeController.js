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
                },
                {
                    name: "Early Headstart",
                    link: "#/EarlyHeadStart",
                    nodes: [{
                            name: "What is Early Headstart?",
                            link: "#WhatisEarlyHeadStart"

                    },
                        {
                            name: "Locations",
                            link: "#/Locations"
                    }]
                },
                {
                    name: "Pre-K",
                    link: "#/preK",
                },
                {
                    name: "Assistance Programs",
                    nodes: [{
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