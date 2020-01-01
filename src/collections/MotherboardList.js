const ComputerPartList = require('./ComputerPartList');
const Motherboard = require('../domain/Motherboard');

class MotherboardList extends ComputerPartList {
    validate(motherboard, price) {
        if (!(motherboard instanceof Motherboard)) {
            throw ('motherboard is not a valid Motherboard');
        }
        super.validate(motherboard, price);
    }
}

module.exports = MotherboardList;
