app.factory('PreKLocationsService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('preKLocations/preKLocations.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);