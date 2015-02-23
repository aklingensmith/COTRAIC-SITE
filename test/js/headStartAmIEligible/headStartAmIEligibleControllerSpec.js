'use strict';

describe('Unit: HeadStartAmIEligibleController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('HeadStartAmIEligibleController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('HeadStartAmIEligibleController', {
                $scope: scope
            });
        }));

        it('sets the default title of HeadStart Am I Eligible', function () {
            expect(scope.title).toEqual('Am I Eligible?');
        });
        it('sets the default title of the second heading', function () {
            expect(scope.guidelines).toEqual('2014 Poverty Guidelines');
        });
        it('Displays the content of the page', function () {
            expect(scope.content).toEqual('Every year, the federal government establishes poverty guidelines to determine who is financially eligible for particular programs. The chart below tells you what the yearly income cutoffs are for 2014-2015 at 100%. The following figures are the 2014 HHS poverty guidelines which have been published in the Federal Register on January 22, 2014. (Additional information will be posted if the guidelines are changed.)');
        });
        it('sets the title of the first column in the table', function () {
            expect(scope.size).toEqual('Household size');
        });
        it('sets the title of the second column in the table', function () {
            expect(scope.percent).toEqual('100% Poverty');
        });
        it('sets a value of one to household size', function () {
            expect(scope.size1).toEqual('1');
        });
        it('sets a value of two to household size', function () {
            expect(scope.size2).toEqual('2');
        });
        it('sets a value of three to household size', function () {
            expect(scope.size3).toEqual('3');
        });
        it('sets a value of four to household size', function () {
            expect(scope.size4).toEqual('4');
        });
        it('sets a value of five to household size', function () {
            expect(scope.size5).toEqual('5');
        });
        it('sets a value of six to household size', function () {
            expect(scope.size6).toEqual('6');
        });
        it('sets a value of seven to household size', function () {
            expect(scope.size7).toEqual('7');
        });
        it('sets a value of eight to household size', function () {
            expect(scope.size8).toEqual('8');
        });
        it('sets the last row for anything greater', function () {
            expect(scope.size9).toEqual('For each additional person add');
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent1).toEqual('$11,670');
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent2).toEqual('$15,730');
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent3).toEqual('$19,790');
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent4).toEqual('$23,850');
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent5).toEqual('$27,910');
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent6).toEqual('$31,970');
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent7).toEqual('$36,030');
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent8).toEqual('$40,000');
        });
        it('gives a dollar amount for each addition person', function () {
            expect(scope.percent9).toEqual('$4,060');
        });
        it('displays copyright information', function () {
            expect(scope.copyrighttext).toEqual('2014 COTRAIC, Inc.');
        });

    });
});