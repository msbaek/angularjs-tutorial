'use strict';

describe('simple form', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/basic-form.html');
    });


    it('should shoud debug', function () {
        expect(binding('user')).toMatch(/John Smith/);
    });

    it('should add contact', function () {
        using('.example').element('a:contains(add)').click();
        using('.example div:last').input('contact.value').enter('you@example.org');
        expect(binding('user')).toMatch(/\(234\) 555\-1212/);
        expect(binding('user')).toMatch(/you@example.org/);
    })

    it('should validate zip', function () {
        expect(using('.example').
            element(':input[ng\\:model="user.address.zip"]').
            prop('className')).not().toMatch(/ng-invalid/);
        using('.example').input('user.address.zip').enter('abc');
        expect(using('.example').
            element(':input[ng\\:model="user.address.zip"]').
            prop('className')).toMatch(/ng-invalid/);
    })

    it('should validate state', function () {
        expect(using('.example').element(':input[ng\\:model="user.address.state"]').
            prop('className'))
            .not().toMatch(/ng-invalid/);
        using('.example').input('user.address.state').enter('XXX');
        expect(using('.example').element(':input[ng\\:model="user.address.state"]')
            .prop('className')).toMatch(/ng-invalid/);
    });
});
