app.controller('EarlyHeadStartEligibilityController', ['$scope', 'EarlyHeadStartEligibilityService',

    function ($scope, EarlyHeadStartEligibilityService) {
        EarlyHeadStartEligibilityService.get().then(function (data) {
            $scope.titletext = data.data.titletext;
            $scope.titletext2 = data.data.titletext2;
            $scope.titletext3 = data.data.titletext3;
            $scope.text = data.data.text;
            $scope.text2 = data.data.text2;
            $scope.copyrighttext = data.data.copyrighttext;
            $scope.link = data.data.link;
        })
    }]);