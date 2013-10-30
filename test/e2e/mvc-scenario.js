'use strict';

describe('advanced form', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/mvc.html');
    });


    it('should play a game', function () {
        expect(binding('nextMove')).toEqual('X');
        piece(1,1);
        expect(binding('nextMove')).toEqual('O');
        piece(3,1);
        expect(binding('nextMove')).toEqual('X');
        piece(1,2);
        piece(3,2);
        piece(1,3);
        expect(element('.winner').text()).toEqual('Player X has won !');
    });

    function piece(row, col) {
        element('.board tr:nth-child('+row+') td:nth-child('+col+')').click();
    }
});
