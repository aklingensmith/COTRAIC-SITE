'use strict';

describe('Unit: PreKLocationsController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKLocationsController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, PreKLocationsService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                name: 'This is the name',
                addressLine: 'this is the address',
                cityLine: 'this is the city',
                phone: 'This is the phone number',
                fax: 'This is the fax number'
            };

            httpBackend.expectGET('preKLocations/preKLocations.json').respond(200, response);
            controller = $controller('PreKLocationsController', {
                $scope: scope,
                PreKLocationsService: PreKLocationsService
            });

            httpBackend.flush();

        }));
                                         
        it('sets the title for preKLocations', function () {
            expect(scope.title).toEqual(response.title);
        });
                                                 
        it('sets name on address for preKLocations', function () {
            expect(scope.name).toEqual(response.name);
        });
                                                         
        it('sets address for preKLocations', function () {
            expect(scope.addressLine).toEqual(response.addressLine);
        });
                                                                  
        it('sets city on address for preKLocations', function () {
            expect(scope.cityLine).toEqual(response.cityLine);
        });
         it('sets phone number for preKLocations', function () {
            expect(scope.phone).toEqual(response.phone);
        });
         it('sets fax number for preKLocations', function () {
            expect(scope.fax).toEqual(response.fax);
        });
        
    });
});