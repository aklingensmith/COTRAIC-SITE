'use strict';

describe('Unit: WIAProgramsController', function () {
    // Load the module with MainController
    beforeEach(module('cotriacWebApp'));

    describe('WIAProgramsController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, WIAProgramsService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('wiaPrograms/wiaPrograms.json').respond(200, response);
            controller = $controller('WIAProgramsController', {
                $scope: scope,
                WIAProgramsService: WIAProgramsService
            });

            httpBackend.flush();

        }));

        it('sets the default title of WIAPrograms', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});