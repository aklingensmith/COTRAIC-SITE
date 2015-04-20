app.controller('ContactController', ['$scope', 'ContactService',

    function ($scope, ContactService) {
        ContactService.get().then(function(data){
        $scope.title = data.data.title;
        $scope.knoxville = data.data.knoxville;
        $scope.knoxvilleCenter = data.data.knoxvilleCenter;
        $scope.knoxvilleAddress = data.data.knoxvilleAddress;
        $scope.knoxvilleZip = data.data.knoxvilleZip;
        $scope.knoxvillePhone = data.data.knoxvillePhone;
        $scope.knoxvilleFax = data.data.knoxvilleFax;    
        $scope.overbrook = data.data.overbrook;
        $scope.overbrookCenter = data.data.overbrookCenter;
        $scope.overbrookAddress = data.data.overbrookAddress;
        $scope.overbrookZip = data.data.overbrookZip;
        $scope.overbrookPhone = data.data.overbrookPhone;
        $scope.hazelwood = data.data.hazelwood;
        $scope.hazelwoodCenter = data.data.hazelwoodCenter;
        $scope.hazelwoodAddress = data.data.hazelwoodAddress;
        $scope.hazelwoodZip = data.data.hazelwoodZip;
        $scope.hazelwoodPhone = data.data.hazelwoodPhone;
        $scope.dorseyville = data.data.dorseyville;
        $scope.dorseyvilleCenter = data.data.dorseyvilleCenter;
        $scope.dorseyvilleAddress = data.data.dorseyvilleAddress;
        $scope.dorseyvilleZip = data.data.dorseyvilleZip;
        $scope.dorseyvillePhone = data.data.dorseyvillePhone;
        $scope.copyrighttext = data.data.copyrighttext;
        $scope.headStartEmail = data.data.headStartEmail;
        $scope.earlyName = data.data.earlyName;
        $scope.earlyAddressLine = data.data.earlyAddressLine;
        $scope.earlyCityLine = data.data.earlyCityLine;
        $scope.earlyPhone = data.data.earlyPhone;
        $scope.earlyFax = data.data.earlyFax;
        $scope.earlyHeadStartEmail = data.data.earlyHeadStartEmail;
        $scope.preKName = data.data.preKName;
        $scope.preKAddressLine = data.data.preKAddressLine;
        $scope.preKCityLine = data.data.preKCityLine;
        $scope.preKPhone = data.data.preKPhone;
        $scope.preKFax = data.data.preKFax;
        $scope.preKEmail = data.data.preKEmail;
	$scope.displayPopup = data.data.displayPopup;
        })
        $scope.openEmail = function (locationparam) {
            $scope.showEmailDialog = true;
	    $scope.location = locationparam;
	    $scope.knoxvilleContactInfo = { cname: $scope.knoxvilleCenter, email: $scope.headStartEmail};
	    $scope.overbrookContactInfo = { cname: $scope.overbrookCenter, email: $scope.headStartEmail};
	    $scope.hazelwoodContactInfo = { cname: $scope.hazelwoodCenter, email: $scope.headStartEmail};
	    $scope.dorseyvilleContactInfo = { cname: $scope.dorseyvilleCenter, email: $scope.headStartEmail};
	    $scope.earlyContactInfo = { cname: $scope.earlyName, email: $scope.earlyHeadStartEmail};
	    $scope.preKContactInfo = { cname: $scope.preKName, email: $scope.preKEmail};
        };

}]);
