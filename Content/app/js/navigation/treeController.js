directives.directive('treeView', function () {
    return {
        templateUrl: 'Content/app/js/navigation/navigation.html',
        replace: true,
        scope: {},
        controller: 'TreeController',
        link: function (scope) {
            controller.init();
        }
    };
});

controllers.controller("TreeController", ['$scope', function ($scope) {
    this.init = function () {

    };
    $scope.tree = [
        {
            name: "About Us",
            nodes: [
                {
                    name: "History & Purpose",
                    link: "#/historyAndPurpose"
                },
                {
                    name: "Annual Report",
                    link: "#/aboutus"
                },
                {
                    name: "Contact Cotraic",
                    link: ""
                }
            ]
        },
        {
            name: "Education",
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
                    name: "Pre-K"
                }
            ]
        },
        {
            name: "Item3",
            nodes: [
                {
                    name: "SubItem6"
                }
            ]
        }
    ];
}]);