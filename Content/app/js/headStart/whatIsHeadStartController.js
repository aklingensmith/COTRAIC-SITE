app.controller('WhatIsHeadStartController', ['$scope', 'WhatIsHeadStartService',

    function ($scope, WhatIsHeadStartService) {
        WhatIsHeadStartService.get().then(function (data) {
            $scope.titletext = data.data.titletext;
            $scope.whatisheadstarttext = data.data.whatisheadstarttext;
	    $scope.copyrightdate = data.data.copyrightdate;
	    $scope.copyrighttext = data.data.copyrighttext;
        })
}]);
