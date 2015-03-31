app.controller('PreKServicesController', ['$scope', 'PreKServicesService',

    function ($scope, PreKServicesService) {
        PreKServicesService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);