app.controller('WIALocationsController', ['$scope', 'WIALocationsService',

    function ($scope, WIALocationsService) {
        WIALocationsService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.westPA = data.data.westPA;
            $scope.westPAText = data.data.westPAText;
            $scope.westPACenter = data.data.westPACenter;
            $scope.westPAAddress = data.data.westPAAddress;
            $scope.westPAZip = data.data.westPAZip;
            $scope.westPAPhone = data.data.westPAPhone;
            $scope.eastPA = data.data.eastPA;
            $scope.eastPAText = data.data.eastPAText;
            $scope.eastPAAddress = data.data.eastPAAddress;
            $scope.eastPAZip = data.data.eastPAZip;
            $scope.eastPAPhone = data.data.eastPAPhone;
            $scope.wv = data.data.wv;
            $scope.wvText = data.data.wvText;
            $scope.wvAddress = data.data.wvAddress;
            $scope.wvZip = data.data.wvZip;
            $scope.wvPhone = data.data.wvPhone;
            $scope.maryland = data.data.maryland;
            $scope.marylandText = data.data.marylandText;
            $scope.marylandAddress = data.data.marylandAddress;
            $scope.marylandZip = data.data.marylandZip;
            $scope.marylandPhone = data.data.marylandPhone;
            $scope.eastpoint = data.data.eastpoint;
            $scope.eastpointText = data.data.eastpointText;
            $scope.eastpointAddress = data.data.eastpointAddress;
            $scope.eastpointZip = data.data.eastpointZip;
            $scope.eastpointPhone = data.data.eastpointPhone;
            $scope.kentucky = data.data.kentucky;
            $scope.kentuckyText = data.data.kentuckyText;
            $scope.kentuckyAddress = data.data.kentuckyAddress;
            $scope.kentuckyZip = data.data.kentuckyZip;
            $scope.kentuckyPhone = data.data.kentuckyPhone;
            $scope.nia = data.data.nia;
            $scope.niaText = data.data.niaText;
            $scope.niaAddress = data.data.niaAddress;
            $scope.niaZip = data.data.niaZip;
            $scope.niaPhone = data.data.niaPhone;
            $scope.copyrighttext = data.data.copyrighttext;
        })
         $scope.openEmail = function () {
            $scope.showEmailDialog = true;
        };
}]);