const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const ComputerPartList = require('../src/collections/ComputerPartList');
const ComputerPart = require('../src/domain/computerPart');

describe('ComputerPartList', function () {

    it('ComputerPartList should bi instantiated', function () {
        let computerPartList = new ComputerPartList();
        assert.instanceOf(computerPartList, ComputerPartList);
    });

    it('add should validate price argument', function () {
        let computerPartList = new ComputerPartList();
        let computerPart = sinon.mock(ComputerPart);
        expect(() => computerPartList.add(computerPart, 'abc')).to.throw(
            'Price is not a valid number');
    });

    it('count returns 0 after instantiating', function () {
        let computerPartList = new ComputerPartList();
        let expected = 0;
        let actual = computerPartList.count();
        assert.equal(actual, expected);
    });

    it('count returns 1 after add', function () {
        let computerPartList = new ComputerPartList();
        let computerPart = sinon.mock(ComputerPart);
        computerPartList.add(computerPart, 2500);
        let expected = 1;
        let actual = computerPartList.count();
        assert.equal(actual, expected);
    });
});
