app.controller('WIAServicesController', ['$scope', 'WIAServicesService',

    function ($scope, WIAServicesService) {
        WIAServicesService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.employmentAndTrainingCounsling = data.data.employmentAndTrainingCounsling;
            $scope.classroomTrainingAssistance = data.data.classroomTrainingAssistance;
            $scope.jobPlacement = data.data.jobPlacement;
            $scope.counseling = data.data.counseling;
            $scope.copyrighttext = data.data.copyrighttext;

        })
                }]);