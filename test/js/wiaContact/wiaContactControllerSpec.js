'use strict';

describe('Unit: WIAContactController', function() {

    beforeEach(module('cotriacWebApp'));

    describe('WIAContactController', function() {
        var scope, controller, httpBackend;
        var response;

        beforeEach(inject(function($rootScope, $controller, WIAContactService, $httpBackend) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            response = {
                titletext: 'WIA Contact',
                wpawiacenter: 'Western Pennsylvania WIA Center 120 Charles Street, Pittsburgh PA 15238 800-985-8721 rjohn@cotraic.org',
                epawiacenter: 'Eastern Pennsylvania & Montgomery County WIA Center 1855 New Hope Street Norristown, PA 19401 610-292-3034, 800-341-3577 breckard@cotraic.org',
                wwvcenter: 'West Virginia, Workforce WV Center Edith Brabender, WIA Employment & Training Counselor P.O. Box 1349, 1321 Plaza East Charleston, WV 25325 866-660-3400 wiawv@hotmail.com',
                fbwiahagerstown: 'Fatima Ball WIA Employment & Training Counselor Hagerstown 33 W. Washington Street, fourth floor Hagerstown, MD 21740 800-858-8083 fball@cotraic.org',
                fbwiabaltimore: 'Fatima Ball WIA Employment & Training Counselor Baltimore 7930 Eastern Boulevard Baltimore, MD 21224 877-268-6680 fball@cotraic.org',
                lexingtonwia: 'Jeanetta Howard, WIA Employment & Training Counselor 1055 Industry Road Lexington, KY 40505 866-294-0298 jhoward@cotraic.org',
                louisvillewia: 'Annette Jones WIA Employment & Training Counselor 2900 West Broadway Louisville, KY 40211 800-595-8721 annette.jones@kentuckianaworks.org',
                copyrightdate: '2014',
                copyrighttext: ' COTRAIC, Inc.'

            };

            httpBackend.expectGET('wiaContact/wiaContact.json').respond(200, response);
            controller = $controller('WIAContactController', {
                $scope: scope,
                WIAContactService: WIAContactService
            });

            httpBackend.flush();

        }));
        it('sets the default title of WIA Contact', function() {
            expect(scope.titletext).toEqual(response.titletext);
        });
        it('sets the text for Western Pennsylvania WIA Center', function() {
            expect(scope.wpawiacenter).toEqual(response.wpawiacenter);
        });
        it('sets the text for Eastern Pennsylvania & Montgomery County WIA Center', function() {
            expect(scope.epawiacenter).toEqual(response.epawiacenter);
        });
        it('sets the text for West Virginia, Workforce WV Center', function() {
            expect(scope.wwvcenter).toEqual(response.wwvcenter);
        });
        it('sets the text for Fatima Ball WIA Employment & Training Counselor Hagerstown', function() {
            expect(scope.fbwiahagerstown).toEqual(response.fbwiahagerstown);
        });
        it('sets the text for Fatima Ball WIA Employment & Training Counselor Baltimore', function() {
            expect(scope.fbwiabaltimore).toEqual(response.fbwiabaltimore);
        });
        it('sets the text for Jeanetta Howard, WIA Employment & Training Counselor', function() {
            expect(scope.lexingtonwia).toEqual(response.lexingtonwia);
        });
        it('sets the text for Annette Jones WIA Employment & Training Counselor', function() {
            expect(scope.louisvillewia).toEqual(response.louisvillewia);
        });
        it('displays copyright date', function() {
            expect(scope.copyrightdate).toEqual(response.copyrightdate);
        });
        it('displays copyright text', function() {
            expect(scope.copyrighttext).toEqual(response.copyrighttext);
        });
    });
});
