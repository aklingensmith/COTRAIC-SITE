'use strict';

describe('Unit: WIAContactController', function () {
    
    beforeEach(module('cotriacWebApp'));

    describe('WIAContactController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('WIAContactController', {
                $scope: scope
            });
        }));

        it('sets the default title of WIA Contact', function () {
            expect(scope.titletext).toEqual('WIA Contact');
        });
        it('sets the text for Western Pennsylvania WIA Center',function(){
            expect(scope.wpawiacenter).toEqual('Western Pennsylvania WIA Center 120 Charles Street, Pittsburgh PA 15238 800-985-8721 rjohn@cotraic.org');
        });
	it('sets the text for Eastern Pennsylvania & Montgomery County WIA Center',function(){
            expect(scope.epawiacenter).toEqual('Eastern Pennsylvania & Montgomery County WIA Center 1855 New Hope Street Norristown, PA 19401 610-292-3034, 800-341-3577 breckard@cotraic.org');
        });
	it('sets the text for West Virginia, Workforce WV Center',function(){
            expect(scope.wwvcenter).toEqual('West Virginia, Workforce WV Center Edith Brabender, WIA Employment & Training Counselor P.O. Box 1349, 1321 Plaza East Charleston, WV 25325 866-660-3400 wiawv@hotmail.com');
        });
	it('sets the text for Fatima Ball WIA Employment & Training Counselor Hagerstown',function(){
            expect(scope.fbwiahagerstown).toEqual('Fatima Ball WIA Employment & Training Counselor Hagerstown 33 W. Washington Street, fourth floor Hagerstown, MD 21740 800-858-8083 fball@cotraic.org');
        });
	it('sets the text for Fatima Ball WIA Employment & Training Counselor Baltimore',function(){
            expect(scope.fbwiabaltimore).toEqual('Fatima Ball WIA Employment & Training Counselor Baltimore 7930 Eastern Boulevard Baltimore, MD 21224 877-268-6680 fball@cotraic.org');
	});
	it('sets the text for Jeanetta Howard, WIA Employment & Training Counselor',function(){
            expect(scope.lexingtonwia).toEqual('Jeanetta Howard, WIA Employment & Training Counselor 1055 Industry Road Lexington, KY 40505 866-294-0298 jhoward@cotraic.org');
	});
	it('sets the text for Annette Jones WIA Employment & Training Counselor',function(){
            expect(scope.louisvillewia).toEqual('Annette Jones WIA Employment & Training Counselor 2900 West Broadway Louisville, KY 40211 800-595-8721 annette.jones@kentuckianaworks.org');
	});
	it('displays copyright information',function(){
            expect(scope.copyrighttext).toEqual('&copy; 2014 COTRAIC, Inc.');
        });
    });
});
