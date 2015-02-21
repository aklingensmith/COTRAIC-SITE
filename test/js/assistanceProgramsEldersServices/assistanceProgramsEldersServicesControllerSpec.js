'use strict';

describe('Unit: assistanceProgramsEldersServicesController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('assistanceProgramsEldersServicesController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('assistanceProgramsEldersServicesController', {
                $scope: scope
            });
        }));

        it('sets the default title of Assistance Programs Elders Services', function () {
            expect(scope.title).toEqual('Elders Services');
        });
        it('sets the text for the information and referral', function () {
            expect(scope.information).toEqual('Information and referral: Direct provision of information and referrals for the elderly concerning community services.');
        });
        it('sets the text for the out reach information', function () {
            expect(scope.outReach).toEqual('Out Reach: Contact lonely and hard to reach elderly that would benefit from the program and or other community services.');
        });
        it('sets the text for the socialization and recreation', function () {
            expect(scope.socialization).toEqual('Socialization and Recreation: Includes activities which foster the health and social well-being of the elderly through direct interaction and the satisfying use of leisure time.');
        });
        it('sets the text for the counseling', function () {
            expect(scope.counseling).toEqual('Counseling: Assisting the elderly with problems in finance, life skills, consumerism, etc.');
        });
        it('sets the text for the emergency food bank', function () {
            expect(scope.emergency).toEqual('Emergency Food Bank: A service given for those faced with a crisis situation.');
        });
        it('displays copyright information', function () {
            expect(scope.copyrighttext).toEqual('&copy; 2014 COTRAIC, Inc.');
        });

    });
});