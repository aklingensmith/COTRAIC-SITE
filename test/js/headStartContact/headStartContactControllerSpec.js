'use strict';

describe('Unit: HeadStartContactController', function () {

    beforeEach(module('cotriacWebApp'));

    describe('HeadStartContactController', function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('HeadStartContactController', {
                $scope: scope
            });
        }));

        it('sets the default title of Contact HeadStart', function () {
            expect(scope.title).toEqual('HeadStart Contact');
        });
        it('sets the name of the area', function () {
            expect(scope.knoxville).toEqual('HeadStart Central Office Knoxville Area');
        });
        it('sets the name of the center', function () {
            expect(scope.knoxvilleCenter).toEqual('Rochelle Street Center');
        });
        it('sets the address of the Knoxville area', function () {
            expect(scope.knoxvilleAddress).toEqual('201 Rochelle Street');
        });
        it('sets the zip code of the Knoxville area', function () {
            expect(scope.knoxvilleZip).toEqual('Pittsburgh, PA 15234');
        });
        it('sets the Phone number for the Knoxville area', function () {
            expect(scope.knoxvillePhone).toEqual('Telephone: (412)-488-2750 -- Fax (412) 488-7527');
        });
        it('sets the name of the area', function () {
            expect(scope.overbrook).toEqual('HeadStart Overbrook Area');
        });
        it('sets the name of the center', function () {
            expect(scope.overbrookCenter).toEqual('Overbrook Center');
        });
        it('sets the address of the Overbrook area', function () {
            expect(scope.overbrookAddress).toEqual('2413 Sawmill Run Blvd');
        });
        it('sets the zip code of the Overbrook area', function () {
            expect(scope.overbrookZip).toEqual('Pittsburgh, PA 15234');
        });
        it('sets the Phone number for the Overbrook area', function () {
            expect(scope.overbrookPhone).toEqual('Telephone: (412)-882-1481');
        });
        it('sets the name of the area', function () {
            expect(scope.hazelwood).toEqual('HeadStart Hazelwood Area');
        });
        it('sets the name of the center', function () {
            expect(scope.hazelwoodCenter).toEqual('Hazelwood Center');
        });
        it('sets the address of the Hazelwood area', function () {
            expect(scope.hazelwoodAddress).toEqual('4900 Second Avenue');
        });
        it('sets the zip code of the Hazelwood area', function () {
            expect(scope.hazelwoodZip).toEqual('Pittsburgh, PA 15207');
        });
        it('sets the Phone number for the Hazelwood area', function () {
            expect(scope.hazelwoodPhone).toEqual('Telephone: (412)-421-6379');
        });
        it('sets the name of the area', function () {
            expect(scope.dorseyville).toEqual('HeadStart Dorseyville Area');
        });
        it('sets the name of the center', function () {
            expect(scope.dorseyvilleCenter).toEqual('Dorseyville Center');
        });
        it('sets the address of the Dorseyville area', function () {
            expect(scope.dorseyvilleAddress).toEqual('120 Charles Street');
        });
        it('sets the zip code of the Dorseyville area', function () {
            expect(scope.dorseyvilleZip).toEqual('Dorseyville, PA 15238');
        });
        it('sets the Phone number for the Dorseyville area', function () {
            expect(scope.dorseyvillePhone).toEqual('Telephone: (412)-782-4457');
        });
        it('displays copyright information', function () {
            expect(scope.copyrighttext).toEqual('2014 COTRAIC, Inc.');
        });

    });
});