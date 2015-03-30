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
                    link: "#/aboutUsContact"
                }]
        },
        {
                name: "HeadStart",
                nodes: [{
                        name: "What is HeadStart?",
                        link: "#/whatIsHeadStart"
                    },
                    {
                        name: "Am I Eligible?",
                        link: "#/headStartAmIEligible"
                    },
                    {
                        name: "Contact HeadStart",
                        link: "#/headStartContact"
                    }]
        },
        {
            name: "Early HeadStart",
            nodes: [
                {
                    name: "What is Early HeadStart?",
                    link: "#/earlyHeadStart",
                },
                {
                    name: "Am I Eligible?",
                    link: "#/earlyHeadStartEligibility"
                },
                {
                    name: "Contact",
                    link: "#/earlyHeadStartLocations"
                }]
        },
        {
            name: "Pre-K",
            link: "#/preK",
            nodes: [
                {
                    name: "What is Pre-K?",
                    link: ""
                },
                {
                    name: "Am I Eligible?",
                    link: "#/preKEligible"
                },
                {
                    name: "Contact",
                    link: "#/preKLocations"
                    }]
        },
        {
            name: "Assistance Programs",
            nodes: [
                {
                    name: "Elders",
                    nodes: [
                        {
                            name: "Services",
                            link: "#/assistanceProgramsEldersServices"
                        },
                        {
                            name: "Am I eligible?",
                            link: "#/eldersEligibility"
                        }]
                },
                {
                    name: "WIAPrograms",
                    link: "#/wiaPrograms",
                    nodes: [
                        {
                            name: "Am I Eligible?",
                            link: "#/wiaAmIEligible"
                        },
                        {
                            name: "WIA Contact",
                            link: "#/wiaLocations"
                        }]
                }]
    },
    {
            name: "Cultural",
            nodes: [
                {
                    name: "Pow Wow",
                    link: "#/culturalPowWow"
                }]
    }];
}]);