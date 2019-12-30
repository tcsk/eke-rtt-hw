const assert = require('chai').assert;
const expect = require('chai').expect;
const Processor = require('../src/domain/processor');

const config = {
    'manufacturer': 'Intel',
    'model': 'I7',
    'cores': 4,
    'speed': 2.85
};

describe('Processor', function () {

    it('Constructor should accept config object', function () {
        let processor = new Processor(config);
        assert.instanceOf(processor, Processor);
    });

    it('Constructor should throw exception when invalid config object is passed', function(){
        let config = {
            'invalid': 'value'
        };
        expect(() => new Processor(config)).to.throw('Invalid Processor configuration');
    });

    it('getManufacturer should return correct value', function () {
        let processor = new Processor(config);
        assert.equal(processor.getManufacturer(), config.manufacturer);
    });

    it('manufacturer should be undefined', function () {
        let processor = new Processor(config);
        assert.isUndefined(processor.manufacturer);
    });

    it('getModel should return correct value', function () {
        let processor = new Processor(config);
        assert.equal(processor.getModel(), config.model);
    });

    it('model should be undefined', function () {
        let processor = new Processor(config);
        assert.isUndefined(processor.model);
    });

    it('getCores should return correct value', function () {
        let processor = new Processor(config);
        assert.equal(processor.getCores(), config.cores);
    });

    it('cores should be undefined', function () {
        let processor = new Processor(config);
        assert.isUndefined(processor.cores);
    });

    it('getSpeed should return correct value', function () {
        let processor = new Processor(config);
        assert.equal(processor.getSpeed(), config.speed);
    });

    it('speed should be undefined', function () {
        let processor = new Processor(config);
        assert.isUndefined(processor.speed);
    });
});
