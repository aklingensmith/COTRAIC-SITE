'use strict';

describe('Unit: EarlyHeadStartEligibilityController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('EarlyHeadStartEligibilityController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, EarlyHeadStartEligibilityService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                titletext: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('earlyHeadStartEligibility/earlyHeadStartEligibility.json').respond(200, response);
            controller = $controller('EarlyHeadStartEligibilityController', {
                $scope: scope,
                EarlyHeadStartEligibilityService: EarlyHeadStartEligibilityService
            });

            httpBackend.flush();

        }));

        it('sets the default title of Early HeadStart Eligibility', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});