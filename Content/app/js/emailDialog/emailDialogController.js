app.directive('emailDialog', function () {
    return {
        restrict: 'E',
        controller: 'EmailDialogController',
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
    };
});

app.controller('EmailDialogController', ['$scope',
    function ($scope) {
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
        
        $scope.close = function(){
            $scope.showEmailDialog = false;
        };
    }
]);
