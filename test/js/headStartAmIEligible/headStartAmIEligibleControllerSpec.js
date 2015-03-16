'use strict';

describe('Unit: HeadStartAmIEligibleController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('HeadStartAmIEligibleController', function () {
        var scope, controller, httpBackend;
        var response;
        beforeEach(inject(function ($rootScope, $controller, HeadStartAmIEligibleService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                "title": "This is the title",
                "guidelines": "This is the content header",
                "content": "This is the content",
                "size": "This is the header for column 1",
                "percent": "This is the header for column 2",
                "size1": "This is a size placeholder",
                "percent1": "This is a dollar amount placeholder",
                "size2": "This is a size placeholder",
                "percent2": "This is a dollar amount placeholder",
                "size3": "This is a size placeholder",
                "percent3": "This is a dollar amount placeholder",
                "size4": "This is a size placeholder",
                "percent4": "This is a dollar amount placeholder",
                "size5": "This is a size placeholder",
                "percent5": "This is a dollar amount placeholder",
                "size6": "This is a size placeholder",
                "percent6": "This is a dollar amount placeholder",
                "size7": "This is a size placeholder",
                "percent7": "This is a dollar amount placeholder",
                "size8": "This is a size placeholder",
                "percent8": "This is a dollar amount placeholder",
                "size9": "This is a size placeholder",
                "percent9": "This is a dollar amount placeholder",
                "copyrighttext": "2014 COTRAIC, Inc."
            }
            httpBackend.expectGET('headStartAmIEligible/headStartAmIEligible.json').respond(200, response);
            controller = $controller('HeadStartAmIEligibleController', {
                $scope: scope, 
                HeadStartAmIEligibleService: HeadStartAmIEligibleService
            });
            
            httpBackend.flush();

        }));

        it('sets the default title of HeadStart Am I Eligible', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the default title of the second heading', function () {
            expect(scope.guidelines).toEqual(response.guidelines);
        });
        it('Displays the content of the page', function () {
            expect(scope.content).toEqual(response.content);
        });
        it('sets the title of the first column in the table', function () {
            expect(scope.size).toEqual(response.size);
        });
        it('sets the title of the second column in the table', function () {
            expect(scope.percent).toEqual(response.percent);
        });
        it('sets a value of one to household size', function () {
            expect(scope.size1).toEqual(response.size1);
        });
        it('sets a value of two to household size', function () {
            expect(scope.size2).toEqual(response.size2);
        });
        it('sets a value of three to household size', function () {
            expect(scope.size3).toEqual(response.size3);
        });
        it('sets a value of four to household size', function () {
            expect(scope.size4).toEqual(response.size4);
        });
        it('sets a value of five to household size', function () {
            expect(scope.size5).toEqual(response.size5);
        });
        it('sets a value of six to household size', function () {
            expect(scope.size6).toEqual(response.size6);
        });
        it('sets a value of seven to household size', function () {
            expect(scope.size7).toEqual(response.size7);
        });
        it('sets a value of eight to household size', function () {
            expect(scope.size8).toEqual(response.size8);
        });
        it('sets the last row for anything greater', function () {
            expect(scope.size9).toEqual(response.size9);
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent1).toEqual(response.percent1);
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent2).toEqual(response.percent2);
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent3).toEqual(response.percent3);
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent4).toEqual(response.percent4);
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent5).toEqual(response.percent5);
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent6).toEqual(response.percent6);
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent7).toEqual(response.percent7);
        });
        it('gives a dollar amount based on household size', function () {
            expect(scope.percent8).toEqual(response.percent8);
        });
        it('gives a dollar amount for each addition person', function () {
            expect(scope.percent9).toEqual(response.percent9);
        });
        it('displays copyright information', function () {
            expect(scope.copyrighttext).toEqual(response.copyrighttext);
        });

    });
});