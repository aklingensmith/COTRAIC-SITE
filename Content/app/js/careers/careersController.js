app.controller('CareersController', ['$scope', 'CareersService',

    function ($scope, CareersService) {
        CareersService.get().then(function (data) {
            $scope.careers = data.data.careers;
        })
    }]);