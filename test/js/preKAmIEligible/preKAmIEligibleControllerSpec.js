'use strict';

describe('Unit: PreKAmIEligibleController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKAmIEligibleController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('PreKAmIEligibleController', {
                $scope: scope
            });
        }));
        
        it('sets the title for preKAmIEligible', function () {
            expect(scope.title).toEqual('Am I Eligible for Pre-K?');
        });
                
        it('sets the header for preKAmIEligible', function () {
            expect(scope.header).toEqual('2014 Poverty Guidelines');
        });
                       
        it('sets poverty info for preKAmIEligible', function () {
            expect(scope.pInfo).toEqual('Every year, the federal government establishes poverty guidelines to determine who is financially eligible for particular programs. The chart below tells you what the yearly income cutoffs are for 2014-2015 at 100%. The following figures are the 2014 HHS poverty guidelines which have been published in the Federal Register on January 22, 2014. (Additional information will be posted if the guidelines are changed.)');
        });
                        
        it('sets dollar value 1 in table for preKAmIEligible', function () {
            expect(scope.val1).toEqual('$11,670');
        });
                                
        it('sets dollar value 2 in table for preKAmIEligible', function () {
            expect(scope.val2).toEqual('$15,730');
        });
                                        
        it('sets dollar value 3 in table for preKAmIEligible', function () {
            expect(scope.val3).toEqual('$19,790');
        });
                                                
        it('sets dollar value 4 in table for preKAmIEligible', function () {
            expect(scope.val4).toEqual('$23,850');
        });
        
                                                
        it('sets dollar value 5 in table for preKAmIEligible', function () {
            expect(scope.val5).toEqual('$27,910');
        });
        
                                                
        it('sets dollar value 6 in table for preKAmIEligible', function () {
            expect(scope.val6).toEqual('$31,970');
        });
        
                                                
        it('sets dollar value 7 in table for preKAmIEligible', function () {
            expect(scope.val7).toEqual('$36,030');
        });
        
                                                
        it('sets dollar value 8 in table for preKAmIEligible', function () {
            expect(scope.val8).toEqual('$40,090');
        });
        
                                                
        it('sets additional dollar value in table for preKAmIEligible', function () {
            expect(scope.valA).toEqual('$4,060');
        });
    });
});