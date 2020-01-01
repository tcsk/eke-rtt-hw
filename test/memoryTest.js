const assert = require('chai').assert;
const expect = require('chai').expect;
const Memory = require('../src/domain/Memory');
const ComputerPart = require('../src/domain/ComputerPart');

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

    it('Memory is instance of ComputerPart', function () {
        let memory = new Memory(config);
        assert.instanceOf(memory, ComputerPart);
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

    it('getModel should return correct value', function () {
        let memory = new Memory(config);
        assert.equal(memory.getModel(), config.model);
    });

    it('getSize should return correct value', function () {
        let memory = new Memory(config);
        assert.equal(memory.getSize(), config.size);
    });

    it('getSpeed should return correct value', function () {
        let memory = new Memory(config);
        assert.equal(memory.getSpeed(), config.speed);
    });

    it('isGreater works as expected', function () {
        let memory = new Memory(config);

        let smallerSizeConfig = {
            'manufacturer': 'Kingston',
            'model': 'Z693',
            'size': 1024,
            'speed': 2300
        };
        let smallerSizeMemory = new Memory(smallerSizeConfig);
        assert.isTrue(memory.isGreater(smallerSizeMemory));

        let smallerSpeedConfig = {
            'manufacturer': 'Kingston',
            'model': 'Z693',
            'size': 4096,
            'speed': 2200
        };
        let smallerSpeedMemory = new Memory(smallerSpeedConfig);
        assert.isTrue(memory.isGreater(smallerSpeedMemory));

        let biggerSizeConfig = {
            'manufacturer': 'Kingston',
            'model': 'Z693',
            'size': 5096,
            'speed': 2200
        };
        let biggerSizeMemory = new Memory(biggerSizeConfig);
        assert.isFalse(memory.isGreater(biggerSizeMemory));

        let biggerSpeedConfig = {
            'manufacturer': 'Kingston',
            'model': 'Z693',
            'size': 4096,
            'speed': 2301
        };
        let biggerSpeedMemory = new Memory(biggerSpeedConfig);
        assert.isFalse(memory.isGreater(biggerSpeedMemory));
    });

    it('isEqual works as expected', function () {
        let memory1 = new Memory(config);
        let memory2 = new Memory(config);

        assert.isTrue(memory1.isEqual(memory2));
    });
});
