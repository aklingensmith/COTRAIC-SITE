'use strict';

describe('Unit: PreKController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, PreKService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('preK/preK.json').respond(200, response);
            controller = $controller('PreKController', {
                $scope: scope,
                PreKService: PreKService
            });

            httpBackend.flush();

        }));

        it('sets the default title of Pre-K', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});