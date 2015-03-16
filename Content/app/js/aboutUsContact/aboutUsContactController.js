app.controller('AboutUsContactController', ['$scope', 'AboutUsContactService',

    function ($scope, AboutUsContactService) {
        AboutUsContactService.get().then(function (data) {
        $scope.title = data.data.title;
        $scope.oname = data.data.oname;
        $scope.addressLine = data.data.addressLine;
        $scope.cityLine = data.data.cityLine;
        $scope.phoneLine = data.data.phoneLine;
        $scope.faxLine = data.data.faxLine;
	$scope.contactName1 = data.data.contactName1;
	$scope.contactName2 = data.data.contactName2;
	$scope.contactName3 = data.data.contactName3;
	$scope.formInfo = data.data.formInfo;
	$scope.formTitle = data.data.formTitle;
        })
}]);
