'use strict';

describe('Unit: EarlyHeadStartEligibilityController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('EarlyHeadStartEligibilityController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('EarlyHeadStartEligibilityController', {
                $scope: scope
            });
        }));

        it('sets the default title of About Us', function () {
            expect(scope.titletext).toEqual('Early HeadStart Eligibility');
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual('There will be a chart here that shows eligibility');
        });
    });
});