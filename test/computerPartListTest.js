const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const ComputerPartList = require('../src/collections/ComputerPartList');

describe('ComputerPartList', function () {

    it('ComputerPartList should bi instantiated', function () {
        let computerPartList = new ComputerPartList();
        assert.instanceOf(computerPartList, ComputerPartList);
    });

    it('add should validate price argument', function () {
        let computerPartList = new ComputerPartList();
        let computerPart = {};
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
        let computerPart = {};
        computerPartList.add(computerPart, 2500);
        let expected = 1;
        let actual = computerPartList.count();
        assert.equal(actual, expected);
    });

    it('getOptimalUnderPrice returns index 0 when first element is the optimal',
        function () {
            let computerPartList = new ComputerPartList();

            let computerPart = {
                isGreater: function () {
                }
            };

            sinon.stub(computerPart, 'isGreater').returns(true);
            computerPartList.add(computerPart, 2500);

            computerPart.isGreater.restore();
            sinon.stub(computerPart, 'isGreater').returns(false);
            computerPartList.add(computerPart, 2500);


            let actual = computerPartList.getOptimalUnderPrice(3000);
            let expected = 0;

            assert.equal(actual, expected);
        });

    it('getOptimalUnderPrice returns index 1 when second element is the optimal',
        function () {
            let computerPartList = new ComputerPartList();

            let computerPart = {
                isGreater: function () {
                }
            };

            sinon.stub(computerPart, 'isGreater').returns(false);
            computerPartList.add(computerPart, 2500);

            computerPart.isGreater.restore();
            sinon.stub(computerPart, 'isGreater').returns(true);
            computerPartList.add(computerPart, 2500);


            let actual = computerPartList.getOptimalUnderPrice(3000);
            let expected = 1;

            assert.equal(actual, expected);
        });
    //@TODO check if list length is null, or all element is overpriced!
});
