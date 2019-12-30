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
});
