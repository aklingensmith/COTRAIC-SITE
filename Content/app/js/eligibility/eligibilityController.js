app.controller('EligibilityController', ['$scope', 'EligibilityService',

    function ($scope, EligibilityService) {
        EligibilityService.get().then(function (data) {
            $scope.titletext = data.data.titletext;
            $scope.text = data.data.text;
            $scope.link = data.data.link;
        })
    }]);