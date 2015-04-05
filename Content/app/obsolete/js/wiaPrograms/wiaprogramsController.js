app.controller('WIAProgramsController', ['$scope', 'WIAProgramsService',

    function ($scope, WIAProgramsService) {
        WIAProgramsService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
        })
}]);