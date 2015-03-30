app.directive('emailDialog', function () {
    return {
        restrict: 'E',
        controller: 'EmailDialogController',
        templateUrl: 'emailDialog/emailDialog.html',
        scope: {
            showEmailDialog: '='
        },
    };
});

app.controller('EmailDialogController', ['$scope',
    function ($scope) {
	$scope.contactName;
	$scope.contactEmail;
        $scope.close = function(){
            $scope.showEmailDialog = false;
        };
    }
]);
