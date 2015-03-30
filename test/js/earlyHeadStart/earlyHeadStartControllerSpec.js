'use strict';

describe('Unit: EarlyHeadStartController', function () {
    // Load the module with MainController
    beforeEach(module('cotriacWebApp'));

    describe('EarlyHeadStartController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, EarlyHeadStartService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                titletext: 'This is the title',
                titletext2: 'This is a subheader',
                titletext3: 'This is a subheader',
                titletext4: 'This is a subheader',
                titletext5: 'This is a subheader',
                earlyheadstarttext: 'This is the text',
                earlyheadstarttext2: 'This is the text',
                earlyheadstarttext3: 'This is the text',
                earlyheadstarttext4: 'This is the text',
            };

            httpBackend.expectGET('EarlyHeadStart/earlyHeadStart.json').respond(200, response);
            controller = $controller('EarlyHeadStartController', {
                $scope: scope,
                EarlyHeadStartService: EarlyHeadStartService
            });

            httpBackend.flush();

        }));

        it('sets the default title of EarlyHeadStart', function () {
            expect(scope.titletext).toEqual(response.titletext);
        });
        it('sets the subheader title', function () {
            expect(scope.titletext2).toEqual(response.titletext2);
        });
        it('sets the subheader title', function () {
            expect(scope.titletext3).toEqual(response.titletext3);
        });
        it('sets the subheader title', function () {
            expect(scope.titletext4).toEqual(response.titletext4);
        });
        it('sets the subheader title', function () {
            expect(scope.titletext5).toEqual(response.titletext5);
        });
        it('sets the text content', function () {
            expect(scope.earlyheadstarttext).toEqual(response.earlyheadstarttext);
        });
        it('sets the text content', function () {
            expect(scope.earlyheadstarttext2).toEqual(response.earlyheadstarttext2);
        });
        it('sets the text content', function () {
            expect(scope.earlyheadstarttext3).toEqual(response.earlyheadstarttext3);
        });
        it('sets the text content', function () {
            expect(scope.earlyheadstarttext4).toEqual(response.earlyheadstarttext4);
        });
    });
});