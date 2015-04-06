app.controller('EarlyHeadStartController', ['$scope', 'EarlyHeadStartService',

    function ($scope, EarlyHeadStartService) {
        EarlyHeadStartService.get().then(function (data) {
            $scope.titletext = data.data.titletext;
            $scope.titletext2 = data.data.titletext2;
            $scope.titletext3 = data.data.titletext3;
            $scope.titletext4 = data.data.titletext4;
            $scope.titletext5 = data.data.titletext5;
            $scope.earlyheadstarttext = data.data.earlyheadstarttext;
            $scope.earlyheadstarttext2 = data.data.earlyheadstarttext2;
            $scope.earlyheadstarttext3 = data.data.earlyheadstarttext3;
            $scope.earlyheadstarttext4 = data.data.earlyheadstarttext4;
        })
}]);