app.factory('WIAProgramsService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('wiaPrograms/wiaPrograms.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);