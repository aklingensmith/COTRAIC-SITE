app.controller('HeadStartAmIEligibleController', ['$scope', 'HeadStartAmIEligibleService',

    function ($scope, HeadStartAmIEligibleService) {
       HeadStartAmIEligibleService.get().then(function (data){
           
           $scope.title = data.data.title;
           $scope.guidelines = data.data.guidelines;
           $scope.content = data.data.content;
           $scope.size = data.data.size;
           $scope.percent = data.data.percent;
           $scope.size1 = data.data.size1;
           $scope.percent1 = data.data.percent1;
           $scope.size2 = data.data.size2;
           $scope.percent2 = data.data.percent2;
           $scope.size3 = data.data.size3;
           $scope.percent3 = data.data.percent3;
           $scope.size4 = data.data.size4;
           $scope.percent4 = data.data.percent4;
           $scope.size5 = data.data.size5;
           $scope.percent5 = data.data.percent5;
           $scope.size6 = data.data.size6;
           $scope.percent6 = data.data.percent6;
           $scope.size7 = data.data.size7;
           $scope.percent7 = data.data.percent7;
           $scope.size8 = data.data.size8;
           $scope.percent8 = data.data.percent8;
           $scope.size9 = data.data.size9;
           $scope.percent9 = data.data.percent9;
           $scope.copyrighttext = data.data.copyrighttext;
       })
}]);