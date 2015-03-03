app.controller('WIALocationsController', ['$scope', 'WIALocationsService',

    function ($scope, WIALocationsService) {
        WIALocationsService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
        })
}]);