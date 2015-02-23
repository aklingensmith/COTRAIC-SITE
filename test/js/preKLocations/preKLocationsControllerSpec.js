'use strict';

describe('Unit: PreKLocationsController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKLocationsController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('PreKLocationsController', {
                $scope: scope
            });
        }));
                                         
        it('sets the title for preKLocations', function () {
            expect(scope.title).toEqual('Pre-K Locations');
        });
                                                 
        it('sets name on address for preKContact', function () {
            expect(scope.name).toEqual('Our Lady of Loreto School');
        });
                                                         
        it('sets address for preKContact', function () {
            expect(scope.addressLine).toEqual('1901 Pioneer Ave.');
        });
                                                                  
        it('sets city on address for preKContact', function () {
            expect(scope.cityLine).toEqual('Pittsburgh, PA 15226');
        });
        
    });
});