'use strict';

describe('Unit: AboutUsController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('AboutUsController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, AboutUsService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('aboutUs/aboutUs.json').respond(200, response);
            controller = $controller('AboutUsController', {
                $scope: scope,
                AboutUsService: AboutUsService
            });

            httpBackend.flush();

        }));

        it('sets the default title of About Us', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});