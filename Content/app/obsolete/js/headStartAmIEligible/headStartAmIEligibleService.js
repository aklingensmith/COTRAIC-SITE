app.factory('HeadStartAmIEligibleService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('headStartAmIEligible/headStartAmIEligible.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);