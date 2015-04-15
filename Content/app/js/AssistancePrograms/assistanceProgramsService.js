app.factory('AssistanceProgramsService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('app/js/AssistancePrograms/assistancePrograms.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);