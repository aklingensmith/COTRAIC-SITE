app.controller('EarlyHeadStartLocationsController', ['$scope', 'EarlyHeadStartLocationsService',

  function ($scope, EarlyHeadStartLocationsService) {
        EarlyHeadStartLocationsService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.name = data.data.name;
            $scope.addressLine = data.data.addressLine;
            $scope.cityLine = data.data.cityLine;
        })
}]);