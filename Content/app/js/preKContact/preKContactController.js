app.controller('PreKContactController', ['$scope', 'PreKContactService',

    function ($scope, PreKContactService) {
        PreKContactService.get().then(function (data) {
        $scope.title = data.data.title;
        $scope.preK = data.data.preK;
        $scope.name = data.data.name;
        $scope.addressLine = data.data.addressLine;
        $scope.cityLine = data.data.cityLine;
        $scope.faxLine = data.data.faxLine;
        })
}]);