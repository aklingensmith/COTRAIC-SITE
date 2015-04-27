app.controller('WIAServicesController', ['$scope', 'WIAServicesService',

    function ($scope, WIAServicesService) {
        WIAServicesService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.listTitle = data.data.listTitle;
            $scope.employmentAndTrainingCounseling = data.data.employmentAndTrainingCounseling;
            $scope.classroomTrainingAssistance = data.data.classroomTrainingAssistance;
            $scope.jobPlacement = data.data.jobPlacement;
            $scope.counseling = data.data.counseling;
        })
}]);