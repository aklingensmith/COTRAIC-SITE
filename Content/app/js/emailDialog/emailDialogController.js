app.directive('emailDialog', function () {
    return {
        restrict: 'E',
	replace: true,
	
        templateUrl: 'Content/app/js/emailDialog/emailDialog.html',
        scope: {
            showEmailDialog: '=',
            contactName: '=',

        },
	link: function(scope, element, attrs) {
	      scope.dialogStyle = {};
	      if (attrs.width)
		scope.dialogStyle.width = attrs.width;
	      if (attrs.height)
		scope.dialogStyle.height = attrs.height;
		
	    },
	controller: 'EmailDialogController',
    }
});

app.controller('EmailDialogController', ['$scope',
    function ($scope) {
    $scope.toggle = function(){
    $scope.contactName;
            $scope.showEmailDialog = !$scope.showEmailDialog;
	$scope.location = undefined;
        };
    }
]);

