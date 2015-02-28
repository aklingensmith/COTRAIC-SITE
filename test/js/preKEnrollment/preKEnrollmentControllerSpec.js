'use strict';

describe('Unit: PreKEnrollmentController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('PreKEnrollmentController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, PreKEnrollmentService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                text: 'This is the text'
            };

            httpBackend.expectGET('preKEnrollment/preKEnrollment.json').respond(200, response);
            controller = $controller('PreKEnrollmentController', {
                $scope: scope,
                PreKEnrollmentService: PreKEnrollmentService
            });

            httpBackend.flush();

        }));

        it('sets the default title of Pre-K Enrollment', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for screen', function () {
            expect(scope.text).toEqual(response.text);
        });
    });
});