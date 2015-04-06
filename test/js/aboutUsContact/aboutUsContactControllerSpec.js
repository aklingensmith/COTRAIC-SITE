'use strict';

describe('Unit: AboutUsContactController', function() {

    beforeEach(module('cotriacWebApp'));

    describe('AboutUsContactController', function() {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function($rootScope, $controller, AboutUsContactService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                title: 'This is the title',
                oname: 'This is the office name',
                addressLine: 'this is the address',
                cityLine: 'this is the city',
                phoneLine: 'this is the phone',
                faxLine: 'this is the fax',
                contactName: 'Russ Sims, TITLE',
                contactEmail: 'email for contact',
                formInfo: 'This is the messageinfo',
                formTitle: 'This is the form title'
            };

            httpBackend.expectGET('aboutUsContact/aboutUsContact.json').respond(200, response);
            controller = $controller('AboutUsContactController', {
                $scope: scope,
                AboutUsContactService: AboutUsContactService
            });

            httpBackend.flush();

        }));

        it('sets the default title of aboutUsContact', function() {
            expect(scope.title).toEqual(response.title);
        });

        it('sets the name on the address for Cotraic administrative offices', function() {
            expect(scope.oname).toEqual(response.oname);
        });

        it('sets the address for Cotraic administrative offices', function() {
            expect(scope.addressLine).toEqual(response.addressLine);
        });

        it('sets the city in the address for Cotraic administrative offices', function() {
            expect(scope.cityLine).toEqual(response.cityLine);
        });

        it('sets the phone number in the address for Cotraic administrative offices', function() {
            expect(scope.phoneLine).toEqual(response.phoneLine);
        });

        it('sets the fax number in the address for Cotraic administrative offices', function() {
            expect(scope.faxLine).toEqual(response.faxLine);
        });

        it('sets the contact name in contact form Cotraic administrative offices', function() {
            expect(scope.contactName).toEqual(response.contactName);
        });

        it('sets the email in contact form Cotraic administrative offices', function() {
            expect(scope.contactEmail).toEqual(response.contactEmail);
        });

        it('sets the message to display above the contact form Cotraic administrative offices', function() {
            expect(scope.formInfo).toEqual(response.formInfo);
        });
        it('sets the message to display above the contact form Cotraic administrative offices', function() {
            expect(scope.formTitle).toEqual(response.formTitle);
        });

    });
});
