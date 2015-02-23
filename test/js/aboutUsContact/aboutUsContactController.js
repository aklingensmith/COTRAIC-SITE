'use strict';

describe('Unit: AboutUsContactController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('AboutUsContactController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('AboutUsContactController', {
                $scope: scope
            });
        }));

        it('sets the default title of aboutUsContact', function () {
            expect(scope.title).toEqual('Contact Us');
        });
        
        it('sets the name on the address for Cotraic administrative offices', function () {
            expect(scope.name).toEqual('Singing Winds- Administrative Offices');
        });
        
        it('sets the address for Cotraic administrative offices', function () {
            expect(scope.addressLine).toEqual('120 Charles Street');
        });
        
        it('sets the city in the address for Cotraic administrative offices', function () {
            expect(scope.cityLine).toEqual('Pittsburgh, PA 15238');
        });
        
        it('sets the phone number in the address for Cotraic administrative offices', function () {
            expect(scope.phoneLine).toEqual('Telephone: (412)-782-4457');
        });
        
        it('sets the fax number in the address for Cotraic administrative offices', function () {
            expect(scope.faxLine).toEqual('Fax (412)-767-4808');
        });
        
    });
});