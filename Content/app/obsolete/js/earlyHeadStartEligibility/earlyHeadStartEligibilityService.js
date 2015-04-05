app.factory('EarlyHeadStartEligibilityService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('earlyHeadStartEligibility/earlyHeadStartEligibility.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);