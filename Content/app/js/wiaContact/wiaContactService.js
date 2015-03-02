app.factory('WIAContactService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('wiaContact/wiaContact.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);
