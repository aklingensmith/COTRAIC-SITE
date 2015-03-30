app.directive('emailDialog', function () {
    return {
        restrict: 'E',
	replace: true,
        templateUrl: 'emailDialog/emailDialog.html',
        scope: {
            	showEmailDialog: '=',
		contactName: '='
        },
	controller: 'EmailDialogController',
    }
});

app.controller('EmailDialogController', ['$scope',
    function ($scope) {

	
	$scope.toggle = function(){

            $scope.showEmailDialog = !$scope.showEmailDialog;
        };
    }
]);

