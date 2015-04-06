'use strict';

describe('Unit: EarlyHeadStartContactController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('EarlyHeadStartContactController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, EarlyHeadstartContactService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                email: 'this is the email',
                phone: 'this is the phone',
            };

            httpBackend.expectGET('earlyHeadstartContact/earlyHeadstartContact.json').respond(200, response);
            controller = $controller('EarlyHeadStartContactController', {
                $scope: scope,
                EarlyHeadstartContactService: EarlyHeadstartContactService
            });

            httpBackend.flush();

        }));

        it('sets the default title of Early HeadStart Contact', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the email text',function(){
            expect(scope.email).toEqual(response.email);
        });
        it('sets the phone number',function(){
            expect(scope.phone).toEqual(response.phone);
        });
    });
});