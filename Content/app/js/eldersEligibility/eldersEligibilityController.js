app.controller('EldersEligibilityController', ['$scope', 'EldersEligibilityService',

    function ($scope, EldersEligibilityService) {
        EldersEligibilityService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);