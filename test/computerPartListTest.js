const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const ComputerPartList = require('../src/collections/ComputerPartList');
const ComputerPart = require('../src/domain/ComputerPart');

describe('ComputerPartList', function () {

    it('ComputerPartList should be instantiated', function () {
        let computerPartList = new ComputerPartList();
        assert.instanceOf(computerPartList, ComputerPartList);
    });

    it('add should validate computerPart argument', function () {
        let computerPartList = new ComputerPartList();
        let computerPart = {};
        expect(() => computerPartList.add(computerPart, 2500)).to.throw(
            'computerPart is not a valid ComputerPart');
    });

    it('add should validate price argument', function () {
        let computerPartList = new ComputerPartList();
        let computerPart = new ComputerPart();
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
        let computerPart = new ComputerPart();
        computerPartList.add(computerPart, 2500);
        let expected = 1;
        let actual = computerPartList.count();
        assert.equal(actual, expected);
    });

    it('getOptimalUnderPrice returns index 0 when first element is the optimal',
        function () {
            let computerPartList = new ComputerPartList();
            let computerPart = new ComputerPart();

            let isGreaterStub =  sinon.stub(computerPart, 'isGreater');
            isGreaterStub.onCall(0).returns(true);
            isGreaterStub.returns(false);

            computerPartList.add(computerPart, 2500);
            computerPartList.add(computerPart, 2500);

            let actual = computerPartList.getOptimalUnderPrice(3000);
            let expected = 0;
            assert.equal(actual, expected);

            isGreaterStub.restore();
        });

    it('getOptimalUnderPrice returns index 1 when second element is the optimal',
        function () {
            let computerPartList = new ComputerPartList();
            let computerPart = new ComputerPart();

            let isGreaterStub =  sinon.stub(computerPart, 'isGreater');
            isGreaterStub.onCall(0).returns(false);
            isGreaterStub.onCall(1).returns(true);
            isGreaterStub.returns(false);

            computerPartList.add(computerPart, 2500);
            computerPartList.add(computerPart, 2500);
            computerPartList.add(computerPart, 2500);

            let actual = computerPartList.getOptimalUnderPrice(3000);
            let expected = 1;
            assert.equal(actual, expected);

            isGreaterStub.restore();
        });

    it('getOptimalUnderPrice returns null if collection is empty',
        function () {
            let computerPartList = new ComputerPartList();

            let actual = computerPartList.getOptimalUnderPrice(3000);
            let expected = null;

            assert.equal(actual, expected);
        });

    it('getOptimalUnderPrice returns null if all element is overpriced',
        function () {
            let computerPartList = new ComputerPartList();
            let computerPart = new ComputerPart();

            let isGreaterStub =  sinon.stub(computerPart, 'isGreater');
            isGreaterStub.onCall(0).returns(true);
            isGreaterStub.returns(false);

            computerPartList.add(computerPart, 2500);
            computerPartList.add(computerPart, 2500);

            let actual = computerPartList.getOptimalUnderPrice(3000);
            let expected = null;
            assert.equal(actual, expected);

            isGreaterStub.restore();
        });
});
