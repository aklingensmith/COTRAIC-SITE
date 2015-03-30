'use strict';

describe('Unit: WIALocationsController', function () {
    // Load the module with MainController
    beforeEach(module('cotriacWebApp'));

    describe('WIALocationsController', function () {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function ($rootScope, $controller, WIALocationsService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                westPA: 'This is the location',
                westPAText: 'This is the counselor',
                westPACenter: 'This is the center',
                westPAAddress: 'This is the address',
                westPAZip: 'This is the zip code',
                westPAPhone: 'This is the phone number',
                eastPA: 'This is the location',
                eastPAText: 'This is the counselor',
                eastPAAddress: 'This is the address',
                eastPAZip: 'This is the zip code',
                eastPAPhone: 'This is the phone number',
                wv: 'This is the location',
                wvText: 'This is the counselor',
                wvAddress: 'This is the address',
                wvZip: 'This is the zip code',
                wvPhone: 'This is the phone number',
                maryland: 'This is the location',
                marylandText: 'This is the counselor',
                marylandAddress: 'This is the address',
                marylandZip: 'This is the zip code',
                marylandPhone: 'This is the phone number',
                eastpoint: 'This is the location',
                eastpointText: 'This is the counselor',
                eastpointAddress: 'This is the address',
                eastpointZip: 'This is the zip code',
                eastpointPhone: 'This is the phone number',
                kentuckyPA: 'This is the location',
                kentuckyText: 'This is the counselor',
                kentuckyAddress: 'This is the address',
                kentuckZip: 'This is the zip code',
                kentuckyPhone: 'This is the phone number',
                nia: 'This is the location',
                niaText: 'This is the counselor',
                niaAddress: 'This is the address',
                niaZip: 'This is the zip code',
                niaPhone: 'This is the phone number',
                copyrighttext: 'This is the copyright',
                westernPaEmail: 'This is an email addres',
                easternPaEmail: 'This is an email addres',
                westVirginiaEmail: 'This is an email addres',
                westernMarylandEmail: 'This is an email addres',
                eastpointEmail: 'This is an email addres',
                kentuckyEmail: 'This is an email addres',
                niaEmail: 'This is an email addres',
            };

            httpBackend.expectGET('wiaLocations/wiaLocations.json').respond(200, response);
            controller = $controller('WIALocationsController', {
                $scope: scope,
                WIALocationsService: WIALocationsService
            });

            httpBackend.flush();

        }));

        it('sets the default title of WIALocations', function () {
            expect(scope.title).toEqual(response.title);
        });
        it('sets the location', function () {
            expect(scope.westPA).toEqual(response.westPA);
        });
         it('sets the counselor', function () {
            expect(scope.westPAText).toEqual(response.westPAText);
        });
         it('sets the center', function () {
            expect(scope.westPACenter).toEqual(response.westPACenter);
        });
         it('sets the address', function () {
            expect(scope.westPAAddress).toEqual(response.westPAAddress);
        });
         it('sets the zip code', function () {
            expect(scope.westPAZip).toEqual(response.westPAZip);
        });
         it('sets the phone number', function () {
            expect(scope.westPAPhone).toEqual(response.westPAPhone);
        });
        it('sets the location', function () {
            expect(scope.eastPA).toEqual(response.westPA);
        });
         it('sets the counselor', function () {
            expect(scope.eastPAText).toEqual(response.eastPAText);
        });
         it('sets the address', function () {
            expect(scope.eastPAAddress).toEqual(response.eastPAAddress);
        });
         it('sets the zip code', function () {
            expect(scope.eastPAZip).toEqual(response.eastPAZip);
        });
         it('sets the phone number', function () {
            expect(scope.eastPAPhone).toEqual(response.eastPAPhone);
        });
         it('sets the location', function () {
            expect(scope.wv).toEqual(response.wv);
        });
         it('sets the counselor', function () {
            expect(scope.wvText).toEqual(response.wvText);
        });
         it('sets the address', function () {
            expect(scope.wvAddress).toEqual(response.wvAddress);
        });
         it('sets the zip code', function () {
            expect(scope.wvZip).toEqual(response.wvZip);
        });
         it('sets the phone number', function () {
            expect(scope.wvPhone).toEqual(response.wvPhone);
        });
         it('sets the location', function () {
            expect(scope.maryland).toEqual(response.maryland);
        });
         it('sets the counselor', function () {
            expect(scope.marylandText).toEqual(response.marylandText);
        });
         it('sets the address', function () {
            expect(scope.marylandAddress).toEqual(response.marylandAddress);
        });
         it('sets the zip code', function () {
            expect(scope.marylandZip).toEqual(response.marylandZip);
        });
         it('sets the phone number', function () {
            expect(scope.marylandPhone).toEqual(response.marylandPhone);
        });
         it('sets the location', function () {
            expect(scope.eastpoint).toEqual(response.eastpoint);
        });
         it('sets the counselor', function () {
            expect(scope.eastpointText).toEqual(response.eastpointText);
        });
         it('sets the address', function () {
            expect(scope.eastpointAddress).toEqual(response.eastpointAddress);
        });
         it('sets the zip code', function () {
            expect(scope.eastpointZip).toEqual(response.eastpointZip);
        });
         it('sets the phone number', function () {
            expect(scope.eastpointPhone).toEqual(response.eastpointPhone);
         });
         it('sets the location', function () {
            expect(scope.kentucky).toEqual(response.kentucky);
        });
         it('sets the counselor', function () {
            expect(scope.kentuckyText).toEqual(response.kentuckyText);
        });
         it('sets the address', function () {
            expect(scope.kentuckyAddress).toEqual(response.kentuckyAddress);
        });
         it('sets the zip code', function () {
            expect(scope.kentuckyZip).toEqual(response.kentuckyZip);
        });
         it('sets the phone number', function () {
            expect(scope.kentuckyPhone).toEqual(response.kentuckyPhone);
         });
         it('sets the location', function () {
            expect(scope.nia).toEqual(response.nia);
        });
         it('sets the counselor', function () {
            expect(scope.niaText).toEqual(response.niaText);
        });
         it('sets the address', function () {
            expect(scope.niaAddress).toEqual(response.niaAddress);
        });
         it('sets the zip code', function () {
            expect(scope.niaZip).toEqual(response.niaZip);
        });
         it('sets the phone number', function () {
            expect(scope.niaPhone).toEqual(response.niaPhone);
         });
          it('displays copyright information', function () {
            expect(scope.copyrighttext).toEqual(response.copyrighttext);
        });
           it('sets the email address', function () {
            expect(scope.westernPaEmail).toEqual(response.westernPaEmail);
        });
           it('sets the email address', function () {
            expect(scope.easternPaEmail).toEqual(response.easternPaEmail);
        });
           it('sets the email address', function () {
            expect(scope.westVirginiaEmail).toEqual(response.westVirginiaEmail);
        });
           it('sets the email address', function () {
            expect(scope.westernMarylandEmail).toEqual(response.westernMarylandEmail);
        });
           it('sets the email address', function () {
            expect(scope.eastpointEmail).toEqual(response.eastpointEmail);
        });
           it('sets the email address', function () {
            expect(scope.kentuckyEmail).toEqual(response.kentuckyEmail);
        });
           it('sets the email address', function () {
            expect(scope.niaEmail).toEqual(response.niaEmail);
        });
        
    });
});