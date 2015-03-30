app.controller('PreKLocationsController', ['$scope', 'PreKLocationsService',

    function ($scope, PreKLocationsService) {
        PreKLocationsService.get().then(function (data) {
        $scope.title = data.data.title;
        $scope.name = data.data.name;
        $scope.addressLine = data.data.addressLine;
        $scope.cityLine = data.data.cityLine;
        $scope.phone = data.data.phone;
        $scope.fax = data.data.fax;
        })
         $scope.openEmail = function () {
            $scope.showEmailDialog = true;
        };
}]);