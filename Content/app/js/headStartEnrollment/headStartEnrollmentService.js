app.factory('HeadStartEnrollmentService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('headStartEnrollment/headStartEnrollment.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);