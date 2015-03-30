app.controller('AboutUsContactController', ['$scope', 'AboutUsContactService',

    function ($scope, AboutUsContactService) {
        AboutUsContactService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.oname = data.data.oname;
	    $scope.onameshort = data.data.onameshort;
            $scope.addressLine = data.data.addressLine;
            $scope.cityLine = data.data.cityLine;
            $scope.phoneLine = data.data.phoneLine;
            $scope.faxLine = data.data.faxLine;
            $scope.contactName = data.data.contactName;
            $scope.contactEmail = data.data.contactEmail;
            $scope.formInfo = data.data.formInfo;
            $scope.formTitle = data.data.formTitle;
        })
        $scope.modalShown = false;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
        };

        $scope.openEmail = function () {
            $scope.showEmailDialog = true;
		$scope.test = { cname: $scope.contactName, email: $scope.contactEmail};
        };
    }
]);

app.directive('modalDialog', function () {
    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function (scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function () {
                scope.show = false;
            };
        },
        template: "<div class='ng-modal' ng-show='show'>\n  <div class='ng-modal-dialog' ng-style='dialogStyle'>\n    <span class='ng-modal-title' ng-show='dialogTitle && dialogTitle.length' ng-bind='dialogTitle'></span>\n    <div class='ng-modal-close' ng-click='hideModal()'>\n      <div ng-bind-html='closeButtonHtml'></div>\n    </div>\n    <div class='ng-modal-dialog-content' ng-transclude></div>\n  </div>\n</div>"
    };
});
