app.factory('EarlyHeadStartService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('EarlyHeadStart/earlyHeadStart.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);