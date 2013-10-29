'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('angularjs cookbook', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/hello-world.html');
    });


    it('hello-world: should change the binding when user enters text', function () {
        expect(binding('name')).toEqual('World');
        input('name').enter('angular');
        expect(binding('name')).toEqual('angular');
    });

});
