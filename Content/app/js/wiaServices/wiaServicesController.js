app.controller('WIAServicesController', ['$scope', 'WIAServicesService',

    function ($scope, WIAServicesService) {
        WIAServicesService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.employmentAndTrainingCounsling = data.data.employmentAndTrainingCounsling;
            $scope.classroomTrainingAssistance = data.data.classroomTrainingAssistance;
            $scope.jobPlacement = data.data.jobPlacement;
            $scope.counseling = data.data.counseling;
            $scope.bf1 = data.data.bf1;
            $scope.bf2 = data.data.bf2;
            $scope.bf3 = data.data.bf3;
            $scope.bf4 = data.data.bf4;
            $scope.copyrighttext = data.data.copyrighttext;
        })
}]);