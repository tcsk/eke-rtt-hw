const assert = require('chai').assert;
const expect = require('chai').expect;
const MemoryList = require('../src/collection/MemoryList');
const ComputerPartList = require('../src/collection/ComputerPartList');
const Memory = require('../src/domain/Memory');

describe('MemoryList', function () {

    it('MemoryList should be instantiated', function () {
        let memoryList = new MemoryList();
        assert.instanceOf(memoryList, MemoryList);
    });

    it('MemoryList should be an instance of ComputerPartList', function () {
        let memoryList = new MemoryList();
        assert.instanceOf(memoryList, ComputerPartList);
    });

    it('add should validate processor argument', function () {
        let memoryList = new MemoryList();
        let memory = {};
        expect(() => memoryList.add(memory, 2500)).to.throw(
            'memory is not a valid Memory');
    });

    it('add should validate processor price', function () {
        let memoryList = new MemoryList();
        let memory = new Memory({
            'manufacturer': 'Kingston',
            'model': 'Z693',
            'size': 4096,
            'speed': 2300
        });
        expect(() => memoryList.add(memory, 'abc')).to.throw(
            'Price is not a valid number');
    });
});
