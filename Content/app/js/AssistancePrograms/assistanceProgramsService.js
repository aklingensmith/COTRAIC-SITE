app.factory('AssistanceProgramsService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('assistancePrograms/assistancePrograms.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);