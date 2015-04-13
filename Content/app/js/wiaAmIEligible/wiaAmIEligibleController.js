app.controller('WIAAmIEligibleController', ['$scope', 'WIAAmIEligibleService',

    function ($scope, WIAAmIEligibleService) {
        EldersEligibilityService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.text = data.data.text;
            $scope.one = data.data.information;
            $scope.two = data.data.outReach;
            $scope.three = data.data.socialization;
            $scope.four = data.data.counseling;
            $scope.five = data.data.emergency;
            $scope.copyrighttext = data.data.copyrighttext;
        })
    }]);