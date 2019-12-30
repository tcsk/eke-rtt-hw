const assert = require('chai').assert;
const expect = require('chai').expect;
const Motherboard = require('../src/domain/motherboard');

const config = {
    'manufacturer': 'Gigabyte',
    'model': 'S6-320-P',
    'services': 15
};

describe('Motherboard', function () {

    it('Constructor should accept config object', function () {
        let motherboard = new Motherboard(config);
        assert.instanceOf(motherboard, Motherboard);
    });

    it('Constructor should throw exception when invalid config object is passed', function(){
        let config = {
            'invalid': 'value'
        };
        expect(() => new Motherboard(config)).to.throw('Invalid Motherboard configuration');
    });

    it('getManufacturer should return correct value', function () {
        let motherboard = new Motherboard(config);
        assert.equal(motherboard.getManufacturer(), config.manufacturer);
    });

    it('manufacturer should be undefined', function () {
        let motherboard = new Motherboard(config);
        assert.isUndefined(motherboard.manufacturer);
    });

    it('getModel should return correct value', function () {
        let motherboard = new Motherboard(config);
        assert.equal(motherboard.getModel(), config.model);
    });

    it('model should be undefined', function () {
        let motherboard = new Motherboard(config);
        assert.isUndefined(motherboard.model);
    });

    it('getSize should return correct value', function () {
        let motherboard = new Motherboard(config);
        assert.equal(motherboard.getServices(), config.services);
    });

    it('size should be undefined', function () {
        let motherboard = new Motherboard(config);
        assert.isUndefined(motherboard.services);
    });
});
