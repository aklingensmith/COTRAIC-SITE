app.factory('ContactService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('Content/app/js/contact/contact.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);