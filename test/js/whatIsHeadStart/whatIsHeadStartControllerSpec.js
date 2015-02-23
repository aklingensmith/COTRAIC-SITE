'use strict';

describe('Unit: WhatIsHeadStartController', function () {
    
    beforeEach(module('cotriacWebApp'));

    describe('WhatIsHeadStartController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('WhatIsHeadStartController', {
                $scope: scope
            });
        }));

        it('sets the default title of What Is Head Start', function () {
            expect(scope.titletext).toEqual('Head Start');
        });
        it('sets the text for screen',function(){
            expect(scope.whatisheadstarttext).toEqual('We offer FREE SERVICES TO PRESCHOOL CHILDREN and their families regardless of race, creed, color or national origin. We are Currently recruiting 3, 4, and 5 year old children for fall classes. Transportation is available in most areas. We offer inclusive setting for children with disabilities and we are accredited by, NAEYC, National Academy of Early Childhood program. For more information call (412) 488-2750 or email to address below. Please include in the email your name, address, phone number and the childs name and date of birth');
        });
	it('displays copyright information',function(){
            expect(scope.copyrighttext).toEqual('&copy; 2014 COTRAIC, Inc.');
        });
    });
});
