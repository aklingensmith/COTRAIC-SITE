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
                title: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('earlyHeadStart/earlyHeadStart.json').respond(200, response);
            controller = $controller('EarlyHeadStartController', {
                $scope: scope,
                EarlyHeadStartService: EarlyHeadStartService
            });

            httpBackend.flush();

        }));

        it('sets the default title of EarlyHeadStart', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});