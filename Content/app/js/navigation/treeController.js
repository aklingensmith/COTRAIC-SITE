"use strict";

directives.directive('treeView', function () {
    return {
        restrict: 'E',
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
    $scope.delete = function (data) {
        .nodes = [];
    };
    $scope.add = function (data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({
            name: newName,
            nodes: []
        });
    };
    $scope.tree = [{
        name: "Node",
        nodes: []
    }];
    $scope.tree = [
        {
            name: "About Us",
            nodes: [
                {
                    name: "History & Purpose",
                    link: "#/historyAndPurpose/historyAndPurpose.html"
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