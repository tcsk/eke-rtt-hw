const assert = require('chai').assert;
const expect = require('chai').expect;
const Processor = require('../src/domain/processor');

describe('Processor', function () {

    it('Constructor should accept config object', function () {
        let config = {
            'manufacturer': 'Intel',
            'model': 'I7',
            'cores': 4,
            'speed': 2.85
        };
        let actual = new Processor(config);
        assert.instanceOf(actual, Processor);
    });

    it('Constructor should throw exception when invalid config object is passed', function(){
        let config = {
            'invalid': 'value'
        };
        expect(() => new Processor(config)).to.throw('Invalid Processor configuration');
    });

});
