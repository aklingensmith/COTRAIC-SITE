'use strict';

describe('Unit: AssistanceProgramsEldersServicesController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('AssistanceProgramsEldersServicesController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, AssistanceProgramsEldersServicesService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                information: 'This is text about information and referral',
                outReach: 'This is text about reaching elders in need',
                socialization: 'This is text about socialization and activities',
                counseling: 'This is text about counseling',
                emergency: 'Emergency text',
                copyrighttext: 'This is the copyright'
            };
            
            httpBackend.expectGET('Content/app/js/assistanceProgramsEldersServices/assistanceProgramsEldersServices.json').respond(200, response);
            controller = $controller('AssistanceProgramsEldersServicesController', {
                $scope: scope,
                AssistanceProgramsEldersServicesService: AssistanceProgramsEldersServicesService
            });

            httpBackend.flush();
        }));

        it('sets the default title of Assistance Programs Elders Services', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the text for the information and referral', function () {
            expect(scope.information).toEqual(response.information);
        });
        it('sets the text for the out reach information', function () {
            expect(scope.outReach).toEqual(response.outReach);
        });
        it('sets the text for the socialization and recreation', function () {
            expect(scope.socialization).toEqual(response.socialization);
        });
        it('sets the text for the counseling', function () {
            expect(scope.counseling).toEqual(response.counseling);
        });
        it('sets the text for the emergency food bank', function () {
            expect(scope.emergency).toEqual(response.emergency);
        });
        it('displays copyright information', function () {
            expect(scope.copyrighttext).toEqual(response.copyrighttext);
        });

    });
});