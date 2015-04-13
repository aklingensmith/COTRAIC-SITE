app.controller('EarlyHeadStartServicesController', ['$scope', 'EarlyHeadStartServicesService',

    function ($scope, EarlyHeadStartServicesService) {
        EarlyHeadStartServicesService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.text2 = data.data.text2;
            $scope.text3 = data.data.text3;
            $scope.text4 = data.data.text4;
            $scope.bf1 = data.data.bf1;
            $scope.bf2 = data.data.bf2;
            $scope.bf3 = data.data.bf3;
            $scope.bf4 = data.data.bf4;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);