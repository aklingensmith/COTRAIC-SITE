app.factory('PreKServicesService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('Content/app/js/preKServices/preKServices.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);