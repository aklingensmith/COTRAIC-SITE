app.factory('AssistanceProgramsEldersServicesService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('assistanceProgramsEldersServices/assistanceProgramsEldersServices.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);