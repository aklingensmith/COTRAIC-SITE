app.factory('EldersEligibilityService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('Content/app/js/eldersEligibility/eldersEligibility.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);