app.controller('HeadStartServicesController', ['$scope', 'HeadStartServicesService',

    function ($scope, HeadStartServicesService) {
        HeadStartServicesService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
        })
    }]);