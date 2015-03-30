app.factory('EligibilityService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('eligibility/eligibility.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);