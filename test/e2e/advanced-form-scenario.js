'use strict';

describe('advanced form', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/advanced-form.html');
    });


    it('should enable save button', function () {
        expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
        input('form.name').enter('');
        expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
        input('form.name').enter('change');
        expect(element(':button:contains(Save)').attr('disabled')).toBeFalsy();
        element(':button:contains(Save)').click();
        expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
    });

    it('should enable cancel button', function () {
        expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
        input('form.name').enter('change');
        expect(element(':button:contains(Cancel)').attr('disabled')).toBeFalsy();
        element(':button:contains(Cancel)').click();
        expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
        expect(element(':input[ng\\:model="form.name"]').val()).toEqual('John Smith');
    });
});
