app.controller('PreKServicesController', ['$scope', 'PreKServicesService',

    function ($scope, PreKServicesService) {
        PreKServicesService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.bullet1 = data.data.bullet1;
            $scope.bullet2 = data.data.bullet2;
            $scope.bullet3 = data.data.bullet3;
            $scope.bullet4 = data.data.bullet4;
            $scope.bullet5 = data.data.bullet5;
            $scope.text2 = data.data.text2;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);