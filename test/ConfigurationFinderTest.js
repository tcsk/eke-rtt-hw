const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const ConfigurationFinder = require('../src/util/ConfigurationFinder');
const ComputerPartList = class ComputerPartList {
};
const computerPartList = new ComputerPartList();

describe('ConfigurationFinder', function () {

    it('ConfigurationFinder should be instantiated', function () {
        let mock = sinon.mock(computerPartList);
        let configurationFinder = new ConfigurationFinder(mock, mock, mock);
        assert.instanceOf(configurationFinder, ConfigurationFinder);
        mock.restore();
    });

    it('constructor should validate all arguments', function () {
        let mock = sinon.mock(computerPartList);
        expect(() => new ConfigurationFinder(mock, mock, '')).to.throw(
            'One of the arguments is not a valid Object');
        mock.restore();
    });

    it('constructor should accept exactly 3 arguments', function () {
        let mock = sinon.mock(computerPartList);
        expect(() => new ConfigurationFinder(mock, mock)).to.throw(
            'You need to pass exactly 3 arguments to constructor');
        mock.restore();
    });

    it('getOptimalConfigurationUnderPrices returns correct values', function () {

        let computerPartList = {
            getOptimalUnderPrice: function () {
            }
        };

        let getOptimalUnderPriceStub = sinon.stub(computerPartList, 'getOptimalUnderPrice');
        getOptimalUnderPriceStub.onCall(0).returns(0);
        getOptimalUnderPriceStub.onCall(1).returns(2);
        getOptimalUnderPriceStub.onCall(2).returns(1);

        let configurationFinder = new ConfigurationFinder(computerPartList, computerPartList, computerPartList);
        let actual = configurationFinder.getOptimalConfigurationUnderPrices(1000, 2000, 3000);

        assert.equal(actual.motherboard, 0);
        assert.equal(actual.processor, 2);
        assert.equal(actual.memory, 1);

        getOptimalUnderPriceStub.restore();
    });
});
