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
                    link: ""
                },
                {
                    name: "Contact Cotraic",
                    link: ""
                }
            ]
        },
        {
            name: "Education",
            link: "",
            nodes: [
                {
                    name: "Headstart",
                    nodes: [{
                        name: "What is Headstart?"
                    }]
                },
                {
                    name: "Early Headstart",
                    nodes: [{
                        name: "What is Early Headstart?"
                    }]
                },
                {
                    name: "Pre-K",
                    link: "#/preK"
                }
            ]
        }
    ];
}]);