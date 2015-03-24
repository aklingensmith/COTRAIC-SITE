app.controller('AboutUsController', ['$scope', 'AboutUsService',

    function ($scope, AboutUsService) {
        AboutUsService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.columnOneHeader = data.data.columnOneHeader;
            $scope.columnOneText = data.data.columnOneText;
            $scope.columnTwoHeader = data.data.columnTwoHeader;
            $scope.columnTwoText = data.data.columnTwoText;
            $scope.columnThreeHeader = data.data.columnThreeHeader;
            $scope.columnThreeText = data.data.columnThreeText;
        });
}]);