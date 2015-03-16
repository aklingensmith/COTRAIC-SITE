app.controller('AssistanceProgramsEldersServicesController', ['$scope', 'AssistanceProgramsEldersServicesService',

    function ($scope, AssistanceProgramsEldersServicesService) {
        AssistanceProgramsEldersServicesService.get().then(function(data) {
            
        $scope.title = data.data.title;
        $scope.information = data.data.information;
        $scope.outReach = data.data.outReach;
        $scope.socialization = data.data.socialization;
        $scope.counseling = data.data.counseling;
        $scope.emergency = data.data.emergency;
        $scope.copyrighttext = data.data.copyrighttext;
            
        })
}]);