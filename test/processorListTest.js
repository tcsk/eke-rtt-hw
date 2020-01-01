const assert = require('chai').assert;
const expect = require('chai').expect;
const ProcessorList = require('../src/collection/ProcessorList');
const ComputerPartList = require('../src/collection/ComputerPartList');
const Processor = require('../src/domain/Processor');

describe('ProcessorList', function () {

    it('ProcessorList should be instantiated', function () {
        let processorList = new ProcessorList();
        assert.instanceOf(processorList, ProcessorList);
    });

    it('ProcessorList should be an instance of ComputerPartList', function () {
        let processorList = new ProcessorList();
        assert.instanceOf(processorList, ComputerPartList);
    });

    it('add should validate processor argument', function () {
        let processorList = new ProcessorList();
        let processor = {};
        expect(() => processorList.add(processor, 2500)).to.throw(
            'processor is not a valid Processor');
    });

    it('add should validate processor price', function () {
        let processorList = new ProcessorList();
        let processor = new Processor({
            'manufacturer': 'Intel',
            'model': 'I7',
            'cores': 4,
            'speed': 2.85
        });
        expect(() => processorList.add(processor, 'abc')).to.throw(
            'Price is not a valid number');
    });
});
