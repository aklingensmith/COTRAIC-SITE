app.controller('EarlyHeadStartServicesController', ['$scope', 'EarlyHeadStartServicesService',

    function ($scope, EarlyHeadStartServicesService) {
        EarlyHeadStartServicesService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.text2 = data.data.text2;
            $scope.text3 = data.data.text3;
            $scope.text4 = data.data.text4;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);