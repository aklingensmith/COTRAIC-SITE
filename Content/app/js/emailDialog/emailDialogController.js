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

	
	$scope.close = function(){

            $scope.showEmailDialog = false;
        };
    }
]);

/*
app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: '...' // See below
  };
});
*/
