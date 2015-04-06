app.controller('PreKAmIEligibleController', ['$scope', 'PreKAmIEligibleService',

function ($scope, PreKAmIEligibleService) {
        PreKAmIEligibleService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.header = data.data.header;
            $scope.pInfo = data.data.pInfo;
            $scope.val1 = data.data.val1;
            $scope.val2 = data.data.val2;
            $scope.val3 = data.data.val3;
            $scope.val4 = data.data.val4;
            $scope.val5 = data.data.val5;
            $scope.val6 = data.data.val6;
            $scope.val7 = data.data.val7;
            $scope.val8 = data.data.val8;
            $scope.valA = data.data.valA;
            $scope.copyrighttext = data.data.copyrighttext;
        })

}]);