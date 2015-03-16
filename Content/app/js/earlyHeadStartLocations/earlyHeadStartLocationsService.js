app.factory('EarlyHeadStartLocationsService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('earlyHeadStartLocations/earlyHeadStartLocations.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);