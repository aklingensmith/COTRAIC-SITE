app.controller('HistoryAndPurposeController', ['$scope',

    function ($scope) {
        this.init = function () {
        };
        $scope.titletext = "Our History and Purpose";
		$scope.historyandpurposetext = "The Council of Three Rivers American Indian Center was initially conceived in 1969 when members of two Native American families in Pittsburgh sought to overcome the feeling of \"floating\" in the mainstream. They felt the need to maintain a sense of Indian-ness, recapture roots and become more conscious of their rights as Native Americans. In February 1972 after several years of planning the Council was incorporated as a non-profit organization under the laws of Commonwealth of Pennsylvania and Internal Revenue Service regulations. The Council was to operate from offices in the Homewood section of Pittsburgh until July ,1976 when it moved to its present headquarters in Dorseyville, Indiana Township.";
		$scope.copyrightdate = "2014";
		$scope.copyrighttext = "&copy; " + $scope.copyrightdate + " COTRAIC, Inc.";
}]);
