'use strict';

describe('Unit: EarlyHeadStartEnrollmentController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('EarlyHeadStartEnrollmentController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, EarlyHeadStartEnrollmentService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('earlyHeadStartEnrollment/earlyHeadStartEnrollment.json').respond(200, response);
            controller = $controller('EarlyHeadStartEnrollmentController', {
                $scope: scope,
                EarlyHeadStartEnrollmentService: EarlyHeadStartEnrollmentService
            });

            httpBackend.flush();

        }));

        it('sets the default title of Early HeadStart Enrollment', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});