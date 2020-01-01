const ComputerPartList = require('./ComputerPartList');
const Processor = require('../domain/Processor');

class ProcessorList extends ComputerPartList {
    validate(processor, price) {
        if (!(processor instanceof Processor)) {
            throw ('processor is not a valid Processor');
        }
        super.validate(processor, price);
    }
}

module.exports = ProcessorList;
