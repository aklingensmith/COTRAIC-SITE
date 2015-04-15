'use strict';

describe('Unit: CulturalPowWowController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('CulturalPowWowController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, CulturalPowWowService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                "title": "This is the title",
                "content": "This is the content",
                "copyrighttext": "2014 COTRAIC, Inc."
            }
            httpBackend.expectGET('app/js/culturalPowWow/culturalPowWow.json').respond(200, response);
            controller = $controller('CulturalPowWowController', {
                $scope: scope, 
                CulturalPowWowService: CulturalPowWowService
            });

            httpBackend.flush();
        }));

        it('sets the default title of Cultural Pow Wow', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('displays the contents of Pow Wow', function () {
            expect(scope.content).toEqual(response.content);
        });

        it('displays copyright information', function () {
            expect(scope.copyrighttext).toEqual(response.copyrighttext);
        });

    });
});