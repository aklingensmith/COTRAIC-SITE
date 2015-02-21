'use strict';

describe('Unit: PreKEnrollmentController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKEnrollmentController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('PreKEnrollmentController', {
                $scope: scope
            });
        }));

        it('sets the default title of About Us', function () {
            expect(scope.titletext).toEqual('Pre-K Enrollment');
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual('Could not find information regarding the enrollment into PreK');
        });
    });
});