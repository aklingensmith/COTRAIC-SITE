app.factory('WIAServicesService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('wiaServices/wiaServices.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);