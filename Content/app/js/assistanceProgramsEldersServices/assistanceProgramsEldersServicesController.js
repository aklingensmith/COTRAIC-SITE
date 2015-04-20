app.controller('AssistanceProgramsEldersServicesController', ['$scope', 'AssistanceProgramsEldersServicesService',

    function ($scope, AssistanceProgramsEldersServicesService) {
        AssistanceProgramsEldersServicesService.get().then(function (data) {

            $scope.title = data.data.title;
            $scope.information = data.data.information;
            $scope.outReach = data.data.outReach;
            $scope.socialization = data.data.socialization;
            $scope.counseling = data.data.counseling;
            $scope.emergency = data.data.emergency;
            $scope.bf1 = data.data.bf1;
            $scope.bf2 = data.data.bf2;
            $scope.bf3 = data.data.bf3;
            $scope.bf4 = data.data.bf4;
            $scope.copyrighttext = data.data.copyrighttext;

        })
}]);