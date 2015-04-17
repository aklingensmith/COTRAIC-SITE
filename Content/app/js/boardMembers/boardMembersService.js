app.factory('BoardMembersService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('content/app/js/boardMembers/boardMembers.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);