app.controller('EarlyHeadStartController', ['$scope', 'EarlyHeadStartService',

    function ($scope, EarlyHeadStartService) {
        EarlyHeadStartService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
        })
}]);