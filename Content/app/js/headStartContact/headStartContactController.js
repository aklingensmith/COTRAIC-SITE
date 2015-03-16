app.controller('HeadStartContactController', ['$scope', 'HeadStartContactService',

    function ($scope, HeadStartContactService) {
        
        HeadStartContactService.get().then(function(data){
            
        $scope.title = data.data.title;
        $scope.knoxville = data.data.knoxville;
        $scope.knoxvilleCenter = data.data.knoxvilleCenter;
        $scope.knoxvilleAddress = data.data.knoxvilleAddress;
        $scope.knoxvilleZip = data.data.knoxvilleZip;
        $scope.knoxvillePhone = data.data.knoxvillePhone;
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
        })

}]);