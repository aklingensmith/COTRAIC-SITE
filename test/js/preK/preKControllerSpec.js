'use strict';

describe('Unit: PreKController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('PreKController', {
                $scope: scope
            });
        }));

        it('sets the default title of Pre-K', function () {
            expect(scope.titletext).toEqual('Pre-K');
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual('The Council of Three Rivers American Indian Centers, Inc. Pre-K Counts Program provides high quality pre-kindergarten education for 3 and 4 year olds at no cost to families. It is a two year program for your child.');
        });
    });
});