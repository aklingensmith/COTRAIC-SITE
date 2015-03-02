app.factory('PreKAmIEligibleService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('preKAmIEligible/preKAmIEligible.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);