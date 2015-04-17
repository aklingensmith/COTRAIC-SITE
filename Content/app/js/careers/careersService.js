app.factory('CareersService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('content/app/js/careers/careers.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);