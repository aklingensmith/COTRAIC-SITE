app.controller('AssistanceProgramsController', ['$scope', 'AssistanceProgramsService',

 function ($scope, AssistanceProgramsService) {
        AssistanceProgramsService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.columnOneHeader = data.data.columnOneHeader;
            $scope.columnOneText = data.data.columnOneText;
            $scope.columnTwoHeader = data.data.columnTwoHeader;
            $scope.columnTwoText = data.data.columnTwoText;
        });
}]);