app.factory('WIAAmIEligibleService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('app/js/wiaAmIEligible/wiaAmIEligible.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);