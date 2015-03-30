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

	$scope.test = { cname: 'atest', email: 'btest'};
	$scope.close = function(){

            $scope.showEmailDialog = false;
        };
    }
]);
