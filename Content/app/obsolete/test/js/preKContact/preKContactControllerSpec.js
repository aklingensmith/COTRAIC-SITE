'use strict';

describe('Unit: PreKContactController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKContactController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, PreKContactService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                name: 'This is the name',
                addressLine: 'this is the address',
                cityLine: 'this is the city',
                phoneLine: 'this is the phone',
                faxLine: 'this is the fax'
            };

            httpBackend.expectGET('preKContact/preKContact.json').respond(200, response);
            controller = $controller('PreKContactController', {
                $scope: scope,
                PreKContactService: PreKContactService
            });

            httpBackend.flush();

        }));
          
                                                
        it('sets title for preKContact', function () {
            expect(scope.title).toEqual(response.title);
        });
        
        it('sets name of institution for preKContact', function () {
            expect(scope.preK).toEqual(response.preK);
        });
                
        it('sets name on address for preKContact', function () {
            expect(scope.name).toEqual(response.name);
        }); 
                        
        it('sets address for preKContact', function () {
            expect(scope.addressLine).toEqual(response.addressLine);
        });
                                
        it('sets address for preKContact', function () {
            expect(scope.cityLine).toEqual(response.cityLine);
        });
                                        
        it('sets address for preKContact', function () {
            expect(scope.faxLine).toEqual(response.faxLine);
        });
    });
});