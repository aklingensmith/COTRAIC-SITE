'use strict';

describe('Unit: AboutUsController', function () {
    // Load the module with MainController
    beforeEach(module('cotriacWebApp'));

    describe('AboutUsController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('AboutUsController', {
                $scope: scope
            });
        }));

        it('sets the default title of About Us', function () {
            expect(scope.title).toEqual('About Us');
        });
        it('sets the text for screen',function(){
            expect(scope.text).toEqual('Some text about cotriac');
        });
    });
});