'use strict';

describe('Unit: EarlyHeadStartLocationsController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('EarlyHeadStartLocationsController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, EarlyHeadStartLocationsService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                name: 'This is the name',
                addressLine: 'this is the address',
                cityLine: 'this is the city',
                phone: 'this is the phone number',
                fax: 'this is the fax number'
            };

            httpBackend.expectGET('earlyHeadStartLocations/earlyHeadStartLocations.json').respond(200, response);
            controller = $controller('EarlyHeadStartLocationsController', {
                $scope: scope,
                EarlyHeadStartLocationsService: EarlyHeadStartLocationsService
            });

            httpBackend.flush();

        }));

        it('sets the title for earlyHeadStartLocations', function () {
            expect(scope.title).toEqual(response.title);
        });

        it('sets name on address for earlyHeadStartLocations', function () {
            expect(scope.name).toEqual(response.name);
        });

        it('sets address for earlyHeadStartLocations', function () {
            expect(scope.addressLine).toEqual(response.addressLine);
        });

        it('sets city on address for earlyHeadStartLocations', function () {
            expect(scope.cityLine).toEqual(response.cityLine);
        });
         it('sets phone number for earlyHeadStartLocations', function () {
            expect(scope.phone).toEqual(response.phone);
        });
        it('sets fax number for earlyHeadStartLocations', function () {
            expect(scope.fax).toEqual(response.fax);
        });

    });
});