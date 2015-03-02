app.controller('HistoryAndPurposeController', ['$scope', 'HistoryAndPurposeService',

    function ($scope, HistoryAndPurposeService) {
        HistoryAndPurposeService.get().then(function (data) {
            $scope.titletext = data.data.titletext;
            $scope.historyandpurposetext = data.data.historyandpurposetext;
	    $scope.copyrightdate = data.data.copyrightdate;
	    $scope.copyrighttext = data.data.copyrighttext;
        })
}]);
