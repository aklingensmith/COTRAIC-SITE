app.controller('WIAContactController', ['$scope', 'WIAContactService',

    function ($scope, WIAContactService) {
        WIAContactService.get().then(function (data) {
            $scope.titletext = data.data.titletext;
            $scope.wpawiacenter = data.data.wpawiacenter;
            $scope.epawiacenter = data.data.epawiacenter;
            $scope.wwvcenter = data.data.wwvcenter;
            $scope.fbwiahagerstown = data.data.fbwiahagerstown;
            $scope.fbwiabaltimore = data.data.fbwiabaltimore;
            $scope.lexingtonwia = data.data.lexingtonwia;
            $scope.louisvillewia = data.data.louisvillewia;
	    $scope.copyrightdate = data.data.copyrightdate;
	    $scope.copyrighttext = data.data.copyrighttext;
        })
}]);
