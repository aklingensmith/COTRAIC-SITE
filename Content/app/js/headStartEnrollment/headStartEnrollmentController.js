app.controller('HeadStartEnrollmentController', ['$scope', 'HeadStartEnrollmentService',

      function ($scope, HeadStartEnrollmentService) {
        HeadStartEnrollmentService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
        })
}]);