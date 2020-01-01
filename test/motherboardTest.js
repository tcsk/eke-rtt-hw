const assert = require('chai').assert;
const expect = require('chai').expect;
const Motherboard = require('../src/domain/Motherboard');
const ComputerPart = require('../src/domain/ComputerPart');

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

    it('Motherboard is instance of ComputerPart', function () {
        let motherboard = new Motherboard(config);
        assert.instanceOf(motherboard, ComputerPart);
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

    it('getModel should return correct value', function () {
        let motherboard = new Motherboard(config);
        assert.equal(motherboard.getModel(), config.model);
    });

    it('getSize should return correct value', function () {
        let motherboard = new Motherboard(config);
        assert.equal(motherboard.getServices(), config.services);
    });

    it('isGreater works as expected', function () {
        let motherboard = new Motherboard(config);

        let smallerConfig = {
            'manufacturer': 'Gigabyte',
            'model': 'S6-320-P',
            'services': 14
        };
        let smallerMotherboard = new Motherboard(smallerConfig);
        assert.isTrue(motherboard.isGreater(smallerMotherboard));

        assert.isFalse(motherboard.isGreater(motherboard));

        let biggerConfig = {
            'manufacturer': 'Gigabyte',
            'model': 'S6-320-P',
            'services': 16
        };
        let biggerMotherboard = new Motherboard(biggerConfig);
        assert.isFalse(motherboard.isGreater(biggerMotherboard));
    });

    it('isEqual works as expected', function () {
        let motherboard1 = new Motherboard(config);
        let motherboard2 = new Motherboard(config);

        assert.isTrue(motherboard1.isEqual(motherboard2));
    });

});
