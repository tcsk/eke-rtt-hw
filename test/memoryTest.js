const assert = require('chai').assert;
const expect = require('chai').expect;
const Memory = require('../src/domain/memory');

const config = {
    'manufacturer': 'Kingston',
    'model': 'Z693',
    'size': 4096,
    'speed': 2300
};

describe('Memory', function () {

    it('Constructor should accept config object', function () {
        let memory = new Memory(config);
        assert.instanceOf(memory, Memory);
    });

    it('Constructor should throw exception when invalid config object is passed', function(){
        let config = {
            'invalid': 'value'
        };
        expect(() => new Memory(config)).to.throw('Invalid Memory configuration');
    });

    it('getManufacturer should return correct value', function () {
        let memory = new Memory(config);
        assert.equal(memory.getManufacturer(), config.manufacturer);
    });

    it('manufacturer should be undefined', function () {
        let memory = new Memory(config);
        assert.isUndefined(memory.manufacturer);
    });

    it('getModel should return correct value', function () {
        let memory = new Memory(config);
        assert.equal(memory.getModel(), config.model);
    });

    it('model should be undefined', function () {
        let memory = new Memory(config);
        assert.isUndefined(memory.model);
    });

    it('getSize should return correct value', function () {
        let memory = new Memory(config);
        assert.equal(memory.getSize(), config.size);
    });

    it('size should be undefined', function () {
        let memory = new Memory(config);
        assert.isUndefined(memory.size);
    });

    it('getSpeed should return correct value', function () {
        let memory = new Memory(config);
        assert.equal(memory.getSpeed(), config.speed);
    });

    it('speed should be undefined', function () {
        let memory = new Memory(config);
        assert.isUndefined(memory.speed);
    });
});
