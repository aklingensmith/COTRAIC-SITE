app.controller('HeadStartAmIEligibleController', ['$scope',

    function ($scope) {
        this.init = function () {

        };
        $scope.title = "Am I Eligible?";
        $scope.guidelines = "2014 Poverty Guidelines";
        $scope.content = "Every year, the federal government establishes poverty guidelines to determine who is financially eligible for particular programs. The chart below tells you what the yearly income cutoffs are for 2014-2015 at 100%. The following figures are the 2014 HHS poverty guidelines which have been published in the Federal Register on January 22, 2014. (Additional information will be posted if the guidelines are changed.)";
        $scope.size = "Household size";
        $scope.percent = "100% Poverty";
        $scope.size1 = "1";
        $scope.percent1 = "$11,670";
        $scope.size2 = "2";
        $scope.percent2 = "$15,730";
        $scope.size3 = "3";
        $scope.percent3 = "$19,790";
        $scope.size4 = "4";
        $scope.percent4 = "$23,850";
        $scope.size5 = "5";
        $scope.percent5 = "$27,910";
        $scope.size6 = "6";
        $scope.percent6 = "$31,970";
        $scope.size7 = "7";
        $scope.percent7 = "$36,030";
        $scope.size8 = "8";
        $scope.percent8 = "$40,000";
        $scope.size9 = "For each additional person add";
        $scope.percent9 = "$4,060";
        $scope.copyrighttext = "2014" + " COTRAIC, Inc.";
}]);