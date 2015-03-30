app.controller('CulturalPowWowController', ['$scope', 'CulturalPowWowService',

    function ($scope, CulturalPowWowService) {

        CulturalPowWowService.get().then(function (data) {

            $scope.title = data.data.title;
            $scope.content = data.data.content;
            $scope.link = data.data.link;
            $scope.copyrighttext = data.data.copyrighttext;
        })
}]);