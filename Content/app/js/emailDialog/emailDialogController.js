app.directive('emailDialog', function () {
    return {
        restrict: 'E',
	replace: true,
        templateUrl: 'emailDialog/emailDialog.html',
        scope: {
            showEmailDialog: '=',
            contactName: '=',
            headStartEmail: '=',
            earlyHeadStartEmail: '=',
            prekEmail: '=',
            westernPaEmail: '=',
            easternPaEmail: '=',
            westVirginiaEmail: '=',
            westernMarylandEmail: '=',
            eastpointEmail: '=',
            kentuckyEmail: '=',
            niaEmail: '=',
        },
	controller: 'EmailDialogController',
    }
});

app.controller('EmailDialogController', ['$scope',
    function ($scope) {
    $scope.toggle = function(){
    $scope.contactName;
    $scope.headStartEmail;
    $scope.contactEmail;
    $scope.earlyHeadStartEmail;
    $scope.prekEmail;
    $scope.westernPaEmail;
    $scope.easternPaEmail;
    $scope.westVirginiaEmail;
    $scope.westernMarylandEmail;
    $scope.eastpointEmail;
    $scope.kentuckyEmail;
    $scope.niaEmail;
            $scope.showEmailDialog = !$scope.showEmailDialog;
        };
    }
]);

