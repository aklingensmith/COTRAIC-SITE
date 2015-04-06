app.factory('HeadStartContactService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('headStartContact/headStartContact.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);