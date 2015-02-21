'use strict';

describe('Unit: EarlyHeadStartEnrollmentController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('EarlyHeadStartEnrollmentController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('EarlyHeadStartEnrollmentController', {
                $scope: scope
            });
        }));

        it('sets the default title of About Us', function () {
            expect(scope.titletext).toEqual('Early HeadStart Enrollment');
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual('Early Head Start is a child development program primarily for low income families who meet the Federal poverty guidelines.  The Head Start Program Performance Standards require that at least 10 percent of the total number of enrollment opportunities be made available to children with special needs.  Head Start programs are also allowed to enroll 10 percent of families that are over income.  Once enrolled, children are eligible for EHS until 3 years of age or when they are transitioned into an appropriate preschool setting.');
        });
    });
});