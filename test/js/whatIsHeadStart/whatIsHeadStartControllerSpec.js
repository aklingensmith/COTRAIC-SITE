'use strict';

describe('Unit: WhatIsHeadStartController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('WhatIsHeadStartController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, WhatIsHeadStartService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                titletext: 'This is the titletext',
                whatisheadstarttext: 'This is the whatisheadstarttext',
		copyrightdate: 'This is the copyright date',
		copyrighttext: 'This is the copyright text'
		
            };

            httpBackend.expectGET('headStart/whatIsHeadStart.json').respond(200, response);
            controller = $controller('WhatIsHeadStartController', {
                $scope: scope,
                WhatIsHeadStartService: WhatIsHeadStartService
            });

            httpBackend.flush();

        }));

        it('sets the default title of What Is Head Start', function () {
            expect(scope.titletext).toEqual(response.titletext);
        });
        it('sets the main text for What Is Head Start', function () {
            expect(scope.whatisheadstarttext).toEqual(response.whatisheadstarttext);
        });
	it('sets the copyright date for What Is Head Start', function () {
            expect(scope.copyrightdate).toEqual(response.copyrightdate);
        });
	it('sets the copyright text for What Is Head Start', function () {
            expect(scope.copyrighttext).toEqual(response.copyrighttext);
        });
    });
});
