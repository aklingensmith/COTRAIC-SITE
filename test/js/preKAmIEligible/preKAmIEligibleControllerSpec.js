'use strict';

describe('Unit: PreKAmIEligibleController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKAmIEligibleController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, PreKAmIEligibleService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                header: 'this is the header',
                pInfo: 'this is the poverty info',
                val1: 'this is value 1 on table',
                val2: 'this is value 2 on table',
                val3: 'this is value 3 on table',
                val4: 'this is value 4 on table',
                val5: 'this is value 5 on table',
                val6: 'this is value 6 on table',
                val7: 'this is value 7 on table',
                val8: 'this is value 8 on table',
                valA: 'this is the additional value on table',
            };
            
        httpBackend.expectGET('preKAmIEligible/preKAmIEligible.json').respond(200, response);
            controller = $controller('PreKAmIEligibleController', {
                $scope: scope,
                PreKAmIEligibleServiceService: PreKAmIEligibleService
            });

            httpBackend.flush();

        }));
        
        it('sets the title for preKAmIEligible', function () {
            expect(scope.title).toEqual(response.title);
        });
                
        it('sets the header for preKAmIEligible', function () {
            expect(scope.header).toEqual(response.header);
        });
                       
        it('sets poverty info for preKAmIEligible', function () {
            expect(scope.pInfo).toEqual(response.pInfo);
        });
                        
        it('sets dollar value 1 in table for preKAmIEligible', function () {
            expect(scope.val1).toEqual(response.val1);
        });
                                
        it('sets dollar value 2 in table for preKAmIEligible', function () {
            expect(scope.val2).toEqual(response.val2);
        });
                                        
        it('sets dollar value 3 in table for preKAmIEligible', function () {
            expect(scope.val3).toEqual(response.val3);
        });
                                                
        it('sets dollar value 4 in table for preKAmIEligible', function () {
            expect(scope.val4).toEqual(response.val4);
        });
        
                                                
        it('sets dollar value 5 in table for preKAmIEligible', function () {
            expect(scope.val5).toEqual(response.val5);
        });
        
                                                
        it('sets dollar value 6 in table for preKAmIEligible', function () {
            expect(scope.val6).toEqual(response.val6);
        });
        
                                                
        it('sets dollar value 7 in table for preKAmIEligible', function () {
            expect(scope.val7).toEqual(response.val7);
        });
        
                                                
        it('sets dollar value 8 in table for preKAmIEligible', function () {
            expect(scope.val8).toEqual(response.val8);
        });
        
                                                
        it('sets additional dollar value in table for preKAmIEligible', function () {
            expect(scope.valA).toEqual(response.valA);
        });
    });
});