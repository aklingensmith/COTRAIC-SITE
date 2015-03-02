app.factory('PreKContactService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('preKContact/preKContact.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);