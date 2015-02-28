app.controller('EarlyHeadStartEligibilityController', ['$scope', 'EarlyHeadStartEligibilityService',

    function ($scope, EarlyHeadStartEligibilityService) {
        EarlyHeadStartEligibilityService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);