app.controller('EarlyHeadStartEnrollmentController', ['$scope', 'EarlyHeadStartEnrollmentService',

    function ($scope, EarlyHeadStartEnrollmentService) {
        EarlyHeadStartEnrollmentService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.copyrighttext = data.data.copyrightdate;
        })
    }]);