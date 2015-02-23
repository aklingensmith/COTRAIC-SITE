'use strict';

describe('Unit: CulturalPowWowController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('CulturalPowWowController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('CulturalPowWowController', {
                $scope: scope
            });
        }));

        it('sets the default title of Cultural Pow Wow', function () {
            expect(scope.title).toEqual('Pow Wow');
        });
        it('displays the contents of Pow Wow', function () {
            expect(scope.content).toEqual('Dancing, Singing, Drumming, Arts, Crafts, Museum, Native Foods As a user, I should be able to read the flyer and determine what day and time the Pow Wow is: September 27th, 28th, 2014 12:00PM - 7:00PM(Rain or Shine)');
        });

        it('displays copyright information', function () {
            expect(scope.copyrighttext).toEqual('2014 COTRAIC, Inc.');
        });

    });
});