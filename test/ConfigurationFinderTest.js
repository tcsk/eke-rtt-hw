const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const ConfigurationFinder = require('../src/util/ConfigurationFinder');
const ComputerPart = class ComputerPart {};
const computerPart = new ComputerPart();

describe('ConfigurationFinder', function () {

    it('ConfigurationFinder should be instantiated', function () {
        let mock = sinon.mock(computerPart);
        let configurationFinder = new ConfigurationFinder(mock, mock, mock);
        assert.instanceOf(configurationFinder, ConfigurationFinder);
    });

    it('constructor should validate all arguments', function () {
        let mock = sinon.mock(computerPart);
        expect(() => new ConfigurationFinder(mock, mock, '')).to.throw(
            'One of the arguments is not a valid Object');
    });

    it('constructor should accept exactly 3 arguments', function () {
        let mock = sinon.mock(computerPart);
        expect(() => new ConfigurationFinder(mock, mock)).to.throw(
            'You need to pass exactly 3 arguments to constructor');
    });

});
