app.factory('HeadStartServicesService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('headStartServices/headStartServices.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);