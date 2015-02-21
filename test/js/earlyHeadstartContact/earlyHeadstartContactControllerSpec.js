'use strict';

describe('Unit: EarlyHeadStartContactController', function () {
    
    beforeEach(module('cotriacWebApp'));

    describe('AboutUsController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('EarlyHeadStartContactController', {
                $scope: scope
            });
        }));

        it('sets the default title of Early HeadStart Contact', function () {
            expect(scope.title).toEqual('Contact Early HeadStart');
        });
        it('sets the email text',function(){
            expect(scope.email).toEqual('lruth@cotraic.org');
        });
        it('sets the phone number',function(){
            expect(scope.phone).toEqual('(412) 488-2750');
        });
    });
});