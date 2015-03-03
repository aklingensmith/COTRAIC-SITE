app.factory('WIALocationsService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('wiaLocations/wiaLocations.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);