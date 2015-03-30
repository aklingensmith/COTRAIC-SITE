app.factory('EarlyEducationService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('earlyEducation/earlyEducation.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);