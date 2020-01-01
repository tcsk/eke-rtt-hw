const ComputerPart = require('./ComputerPart');

class Memory extends ComputerPart {

    manufacturer;
    model;
    size;
    speed;

    constructor(config) {
        super();
        this.validate(config);
        this.manufacturer = config.manufacturer;
        this.model = config.model;
        this.size = config.size;
        this.speed = config.speed;
    }

    getManufacturer() {
        return this.manufacturer;
    }

    getModel() {
        return this.model;
    }

    getSize() {
        return this.size;
    }

    getSpeed() {
        return this.speed;
    }

    isGreater(memory) {
        return this.getSize() > memory.getSize() ||
            (this.getSize() === memory.getSize() && this.getSpeed() > memory.getSpeed());
    }

    isEqual(memory) {
        return this.getSpeed() === memory.getSpeed() &&
            this.getSize() === memory.getSize();
    }

    validate(config) {
        let valid = super.validate(config);
        if (typeof config.size !== 'number' || config.size < 1) {
            valid = false;
        }
        if (typeof config.speed !== 'number' || config.speed < 1) {
            valid = false;
        }
        if (!valid) {
            throw('Invalid Memory configuration');
        }
    }
}

module.exports = Memory;
