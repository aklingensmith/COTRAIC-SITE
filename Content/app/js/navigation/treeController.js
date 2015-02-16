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
                    }]
                },
                {
                    name: "Early Headstart",
                    link: "#/EarlyHeadStart",
                    nodes: [{
                        name: "What is Early Headstart?",
                        link: ""
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
                        link: ""
                    },
                    {
                        name: "Contact",
                        link: "#/preKContact"
                    }]
                },
                {
                    name: "Assistance Programs",
                    link: "",
                    nodes: [{
                        name: "Elders",
                        link: "",
                    },
                    {
                        name: "WIA Program",
                        link: "",
                        nodes: [{
                            name: "What is WIA?",
                            link: ""
                        },
                        {
                            name: "Am I Eligible?",
                            link: "#/WIAEligible"
                        }]
                    }]
                }
            ]
        }
    ];
}]);
