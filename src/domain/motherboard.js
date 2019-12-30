class Motherboard {

    #manufacturer;
    #model;
    #services;

    constructor(config) {
        this.validate(config);
        this.#manufacturer = config.manufacturer;
        this.#model = config.model;
        this.#services = config.services;
    }

    getManufacturer() {
        return this.#manufacturer;
    }

    getModel() {
        return this.#model;
    }

    getServices() {
        return this.#services;
    }

    isGreater(motherboard) {
        return this.getServices() > motherboard.getServices();
    }

    isEqual(motherboard) {
        return this.getServices() === motherboard.getServices();
    }

    validate(config) {
        let valid = true;
        if (typeof config.manufacturer !== 'string' || config.manufacturer.length < 1) {
            valid = false;
        }
        if (typeof config.model !== 'string' || config.model.length < 1) {
            valid = false;
        }
        if (typeof config.services !== 'number' || config.services < 1) {
            valid = false;
        }
        if (!valid) {
            throw('Invalid Motherboard configuration');
        }
    }
}

module.exports = Motherboard;
