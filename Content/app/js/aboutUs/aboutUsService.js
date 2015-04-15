app.factory('AboutUsService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('app/js/aboutUs/aboutUs.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);