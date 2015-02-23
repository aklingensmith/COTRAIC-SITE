app.controller('AboutUsController', ['$scope', 'AboutUsService',

    function ($scope, AboutUsService) {
        AboutUsService.get().then(function (data) {
            console.log(data);
            $scope.title = data.data.title;
            $scope.text = data.data.text;
        })
        
        ////
}]);