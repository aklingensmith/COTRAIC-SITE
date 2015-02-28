app.factory('EarlyHeadStartEnrollmentService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('earlyHeadStartEnrollment/earlyHeadStartEnrollment.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);