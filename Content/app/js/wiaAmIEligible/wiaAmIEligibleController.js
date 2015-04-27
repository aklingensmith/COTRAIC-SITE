app.controller('WIAAmIEligibleController', ['$scope', 'WIAAmIEligibleService',

    function ($scope, WIAAmIEligibleService) {
        WIAAmIEligibleService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.how = data.data.how;
            $scope.one = data.data.one;
            $scope.two = data.data.two;
            $scope.three = data.data.three;
            $scope.four = data.data.four;
            $scope.text2 = data.data.text2;
            $scope.text3 = data.data.text3;
            $scope.text4 = data.data.text4;
            $scope.text5 = data.data.text5;
            $scope.text6 = data.data.text6;
            $scope.text7 = data.data.text7;
            $scope.text8 = data.data.text8;
            $scope.text9 = data.data.text9;
        })
    }]);