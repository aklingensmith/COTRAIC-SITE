'use strict';

describe('Unit: HeadStartEnrollmentController', function () {
    // Load the module with MainController
    beforeEach(module('cotriacWebApp'));

    describe('HeadStartEnrollmentController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, HeadStartEnrollmentService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('headStartEnrollment/headStartEnrollment.json').respond(200, response);
            controller = $controller('HeadStartEnrollmentController', {
                $scope: scope,
                HeadStartEnrollmenttService: HeadStartEnrollmentService
            });

            httpBackend.flush();

        }));

        it('sets the default title of Head Start Enrollment', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});