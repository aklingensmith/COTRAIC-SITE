app.controller('WIAServicesController', ['$scope', 'WIAServicesService',

    function ($scope, WIAServicesService) {
                WIAServicesService.get().then(function (data) {
                    $scope.title = data.data.title;
                    $scope.employmentAndTrainingCounsling = data.data.information;
                    $scope.classroomTrainingAssistance = data.data.outReach;
                    $scope.jobPlacement = data.data.socialization;
                    $scope.counseling = data.data.counseling;
                    $scope.copyrighttext = data.data.copyrighttext;

                })