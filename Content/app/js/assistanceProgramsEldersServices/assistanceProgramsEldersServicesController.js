app.controller('AssistanceProgramsEldersServicesController', ['$scope', 'AssistanceProgramsEldersServicesService',

    function ($scope, AssistanceProgramsEldersServicesService) {
        AssistanceProgramsEldersServicesService.get().then(function (data) {

            $scope.title = data.data.title;
            $scope.bf1 = data.data.bf1;
            $scope.information = data.data.information;
            $scope.bf2 = data.data.bf2;
            $scope.outReach = data.data.outReach;
            $scope.bf3 = data.data.bf3;
            $scope.socialization = data.data.socialization;
            $scope.bf4 = data.data.bf4;
            $scope.counseling = data.data.counseling;
            $scope.bf5 = data.data.bf5;
            $scope.emergency = data.data.emergency;
            $scope.copyrighttext = data.data.copyrighttext;

        })
}]);