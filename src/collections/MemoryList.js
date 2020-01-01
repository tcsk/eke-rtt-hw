const ComputerPartList = require('./ComputerPartList');
const Memory = require('../domain/Memory');

class MemoryList extends ComputerPartList {
    validate(memory, price) {
        if (!(memory instanceof Memory)) {
            throw ('memory is not a valid Memory');
        }
        super.validate(memory, price);
    }
}

module.exports = MemoryList;
