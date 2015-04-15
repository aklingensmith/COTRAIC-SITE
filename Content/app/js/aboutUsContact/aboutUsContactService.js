app.factory('AboutUsContactService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('app/js/aboutUsContact/aboutUsContact.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);