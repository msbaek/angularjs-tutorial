'use strict';

describe('deep linking', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/deep-linking/index.html');
    });


    it('should navigate to URL', function () {
        element('a:contains(Welcome)').click();
        expect(element('[ng-view]').text()).toMatch(/Hello anonymous/);
    });

});
