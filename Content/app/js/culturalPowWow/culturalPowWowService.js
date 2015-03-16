app.factory('CulturalPowWowService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('culturalPowWow/culturalPowWow.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);