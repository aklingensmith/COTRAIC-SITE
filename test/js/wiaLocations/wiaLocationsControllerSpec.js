'use strict';

describe('Unit: WIALocationsController', function () {
    // Load the module with MainController
    beforeEach(module('cotriacWebApp'));

    describe('WIALocationsController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, WIALocationsService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('wiaLocations/wiaLocations.json').respond(200, response);
            controller = $controller('WIALocationsController', {
                $scope: scope,
                WIALocationsService: WIALocationsService
            });

            httpBackend.flush();

        }));

        it('sets the default title of WIALocations', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});