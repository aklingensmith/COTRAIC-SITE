app.controller('WIAContactController', ['$scope', 'WIAContactService',

    function ($scope, WIAContactService) {
        WIAContactService.get().then(function (data) {
            $scope.titletext = data.data.titletext;
            $scope.wpawiacenter = data.data.wpawiacenter;
            $scope.wpawiacenteremail = data.data.wpawiacenteremail;
            $scope.epawiacenter = data.data.epawiacenter;
            $scope.epawiacenteremail = data.data.epawiacenteremail;
            $scope.wwvcenter = data.data.wwvcenter;
            $scope.wwvcenteremail = data.data.wwvcenteremail;
            $scope.fbwiahagerstown = data.data.fbwiahagerstown;
            $scope.fbwiahagerstownemail = data.data.fbwiahagerstownemail;
            $scope.fbwiabaltimore = data.data.fbwiabaltimore;
            $scope.fbwiabaltimoreemail = data.data.fbwiabaltimoreemail;
            $scope.lexingtonwia = data.data.lexingtonwia;
            $scope.lexingtonwiaemail = data.data.lexingtonwiaemail;
            $scope.louisvillewia = data.data.louisvillewia;
            $scope.louisvillewiaemail = data.data.louisvillewiaemail;
            $scope.copyrightdate = data.data.copyrightdate;
            $scope.copyrighttext = data.data.copyrighttext;
        })
}]);