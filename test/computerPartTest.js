const expect = require('chai').expect;
const ComputerPart = require('../src/domain/ComputerPart');
const computerPart = new ComputerPart();

describe('ComputerPart', function () {
    it('isGreater should throw exception', function () {
        expect(() => computerPart.isGreater()).to.throw('Not implemented');
    });
    it('isEqual should throw exception', function () {
        expect(() => computerPart.isEqual()).to.throw('Not implemented');
    });
});
