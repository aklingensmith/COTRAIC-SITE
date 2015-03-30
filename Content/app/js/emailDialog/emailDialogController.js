app.directive('emailDialog', function () {
    return {
        restrict: 'E',
        controller: 'EmailDialogController',
        templateUrl: 'emailDialog/emailDialog.html',
        scope: {
            showEmailDialog: '=',
            contactName: '='
        },
    };
});

app.controller('EmailDialogController', ['$scope',
    function ($scope) {
        $scope.close = function(){
            $scope.showEmailDialog = false;
        };
        //$scope.contactName = {contactName: 'troy.bell@stu.laroche.edu'};
    }
]);