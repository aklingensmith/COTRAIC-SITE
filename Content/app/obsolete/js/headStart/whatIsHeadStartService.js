app.factory('WhatIsHeadStartService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('headStart/whatIsHeadStart.json').success(function (data) {
            return data;
        });
        
        return promise;
    };
    
    return {
        get: getDataFromJson
    }
    
}]);
