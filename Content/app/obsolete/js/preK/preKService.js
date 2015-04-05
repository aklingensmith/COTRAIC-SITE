app.factory('PreKService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('preK/preK.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);