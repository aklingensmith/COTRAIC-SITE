'use strict';

describe('Unit: PreKContactController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKContactController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('PreKContactController', {
                $scope: scope
            });
        }));
          
                                                
        it('sets title for preKContact', function () {
            expect(scope.title).toEqual('Contact Pre-K');
        });
        
        it('sets name of institution for preKContact', function () {
            expect(scope.preK).toEqual('Pre-K, Brookline Area');
        });
                
        it('sets name on address for preKContact', function () {
            expect(scope.name).toEqual('Our Lady of Loreto School');
        }); 
                        
        it('sets address for preKContact', function () {
            expect(scope.addressLine).toEqual('1901 Pioneer Ave.');
        });
                                
        it('sets address for preKContact', function () {
            expect(scope.cityLine).toEqual('Pittsburgh, PA 15226');
        });
                                        
        it('sets address for preKContact', function () {
            expect(scope.faxLine).toEqual('Fax: (412) 531-3295');
        });
    });
});