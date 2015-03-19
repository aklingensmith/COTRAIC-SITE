app.controller('AnnualReportController', ['$scope', 'AnnualReportService',

    function ($scope, AnnualReportService) {
        AnnualReportService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.link = data.data.link;
        })
}]);