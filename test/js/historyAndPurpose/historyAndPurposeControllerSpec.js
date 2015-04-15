'use strict';

describe('Unit: HistoryAndPurposeController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('HistoryAndPurposeController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, HistoryAndPurposeService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                titletext: 'This is the titletext',
                historyandpurposetext: 'This is the HistoryAndPurposetext',
		copyrightdate: 'This is the copyright date',
		copyrighttext: 'This is the copyright text'
		
            };

            httpBackend.expectGET('app/js/historyAndPurpose/historyAndPurpose.json').respond(200, response);
            controller = $controller('HistoryAndPurposeController', {
                $scope: scope,
                HistoryAndPurposeService: HistoryAndPurposeService
            });

            httpBackend.flush();

        }));

        it('sets the default title of History And Purpose', function () {
            expect(scope.titletext).toEqual(response.titletext);
        });
        it('sets the main text for History And Purpose', function () {
            expect(scope.historyandpurposetext).toEqual(response.historyandpurposetext);
        });
	it('sets the copyright date for History And Purpose', function () {
            expect(scope.copyrightdate).toEqual(response.copyrightdate);
        });
	it('sets the copyright text for History And Purpose', function () {
            expect(scope.copyrighttext).toEqual(response.copyrighttext);
        });
    });
});
