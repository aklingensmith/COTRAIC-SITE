'use strict';

describe('Unit: EldersEligibilityController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('EldersEligibilityController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, EldersEligibilityService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('app/js/eldersEligibility/eldersEligibility.json').respond(200, response);
            controller = $controller('EldersEligibilityController', {
                $scope: scope,
                EldersEligibilityService: EldersEligibilityService
            });

            httpBackend.flush();

        }));

        it('sets the default title of Elders Eligibility', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});