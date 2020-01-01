const ComputerPart = require('./computerPart');

class Processor extends ComputerPart {

    manufacturer;
    model;
    cores;
    speed;

    constructor(config) {
        super();
        this.validate(config);
        this.manufacturer = config.manufacturer;
        this.model = config.model;
        this.cores = config.cores;
        this.speed = config.speed;
    }

    getManufacturer() {
        return this.manufacturer;
    }

    getModel() {
        return this.model;
    }

    getCores() {
        return this.cores;
    }

    getSpeed() {
        return this.speed;
    }

    isGreater(processor) {
        return this.getSpeed() > processor.getSpeed() ||
            (this.getSpeed() === processor.getSpeed() && this.getCores() > processor.getCores());
    }

    isEqual(processor) {
        return this.getSpeed() === processor.getSpeed() &&
            this.getCores() === processor.getCores();
    }

    validate(config) {
        let valid = super.validate(config);
        if (typeof config.cores !== 'number' || config.cores < 1) {
            valid = false;
        }
        if (typeof config.speed !== 'number' || config.speed < 1) {
            valid = false;
        }
        if (!valid) {
            throw('Invalid Processor configuration');
        }
    }
}

module.exports = Processor;
