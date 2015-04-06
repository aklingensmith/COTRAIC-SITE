app.controller('PreKEnrollmentController', ['$scope', 'PreKEnrollmentService',

    function ($scope, PreKEnrollmentService) {
        PreKEnrollmentService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);