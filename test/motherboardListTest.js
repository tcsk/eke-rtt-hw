const assert = require('chai').assert;
const expect = require('chai').expect;
const MotherboardList = require('../src/collections/MotherboardList');
const ComputerPartList = require('../src/collections/ComputerPartList');
const Motherboard = require('../src/domain/Motherboard');

describe('MotherboardList', function () {

    it('MotherboardList should be instantiated', function () {
        let motherboardList = new MotherboardList();
        assert.instanceOf(motherboardList, MotherboardList);
    });

    it('MotherboardList should be an instance of ComputerPartList', function () {
        let motherboardList = new MotherboardList();
        assert.instanceOf(motherboardList, ComputerPartList);
    });

    it('add should validate processor argument', function () {
        let motherboardList = new MotherboardList();
        let motherboard = {};
        expect(() => motherboardList.add(motherboard, 2500)).to.throw(
            'motherboard is not a valid Motherboard');
    });

    it('add should validate motherboard price', function () {
        let motherboardList = new MotherboardList();
        let motherboard = new Motherboard({
            'manufacturer': 'Gigabyte',
            'model': 'S6-320-P',
            'services': 16
        });
        expect(() => motherboardList.add(motherboard, 'abc')).to.throw(
            'Price is not a valid number');
    });
});
