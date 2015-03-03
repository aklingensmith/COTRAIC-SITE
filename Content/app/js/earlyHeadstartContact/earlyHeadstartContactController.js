app.controller('EarlyHeadStartContactController', ['$scope', 'EarlyHeadstartContactService',

    function ($scope, EarlyHeadstartContactService) {
        EarlyHeadstartContactService.get().then(function (data) {
        $scope.title = data.data.title;
        $scope.email = data.data.email;
        $scope.phone = data.data.phone;
        })
}]);