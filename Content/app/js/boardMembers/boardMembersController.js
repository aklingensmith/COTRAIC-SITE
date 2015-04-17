app.controller('BoardMembersController', ['$scope', 'BoardMembersService',

    function ($scope, BoardMembersService) {
        BoardMembersService.get().then(function (data) {
            $scope.boardMembers = data.data.boardMembers;
        })
    }]);