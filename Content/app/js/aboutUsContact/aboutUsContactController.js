app.controller('AboutUsContactController', ['$scope', 'AboutUsContactService',

    function ($scope, AboutUsContactService) {
        AboutUsContactService.get().then(function (data) {
        $scope.title = data.data.title;
        $scope.name = data.data.name;
        $scope.addressLine = data.data.addressLine;
        $scope.cityLine = data.data.cityLine;
        $scope.phoneLine = data.data.phoneLine;
        $scope.faxLine = data.data.faxLine;
        })
}]);