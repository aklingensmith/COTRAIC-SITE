app.controller('PreKController', ['$scope', 'PreKService',

    function ($scope, PreKService) {
        PreKService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);