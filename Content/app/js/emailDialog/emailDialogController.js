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
    $scope.close = function(){
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
