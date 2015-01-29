function listctrl($scope) {
    $scope.showChilds = function (index) {
        $scope.items[index].active = !$scope.items[index].active;
        collapseAnother(index);
    };

    var collapseAnother = function (index) {
        for (var i = 0; i < $scope.items.length; i++) {
            if (i != index) {
                $scope.items[i].active = false;
            }
        }
    };

    $scope.items = [
        {
            name: "About Us",
            subItems: [
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
            subItems: [
                {
                    name: "Headstart",
                    subItems: [{
                        name: "What is Headstart?"
                    }]
                },
                {
                    name: "Early Headstart",
                    subItems: [{
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
            subItems: [
                {
                    name: "SubItem6"
                }
            ]
        }
    ];
}