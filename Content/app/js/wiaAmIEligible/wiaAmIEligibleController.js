app.controller('WIAAmIEligibleController', ['$scope', 'WIAAmIEligibleService',

    function ($scope, WIAAmIEligibleService) {
        WIAAmIEligibleService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.one = data.data.one;
            $scope.two = data.data.two;
            $scope.three = data.data.three;
            $scope.four = data.data.four;
            $scope.five = data.data.five;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);