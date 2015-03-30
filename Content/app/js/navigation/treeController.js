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
            name: "Early Education",
            link: "#/earlyEducation",
            nodes: [
                {
                    name: "Pre-K",
                    link: "#/preKEligible"
                },
                {
                    name: "Early Headstart",
                    link: "#/earlyHeadStartEligibility"
                },
                {
                    name: "Headstart",
                    link: "#/headStartAmIEligible"
                }]
        },
        {
            name: "Assistance Programs",
            link: "#/assistancePrograms",
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