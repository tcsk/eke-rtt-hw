class Memory {

    #manufacturer;
    #model;
    #size;
    #speed;

    constructor(config) {
        this.validate(config);
        this.#manufacturer = config.manufacturer;
        this.#model = config.model;
        this.#size = config.size;
        this.#speed = config.speed;
    }

    getManufacturer() {
        return this.#manufacturer;
    }

    getModel() {
        return this.#model;
    }

    getSize() {
        return this.#size;
    }

    getSpeed() {
        return this.#speed;
    }

    validate(config) {
        let valid = true;
        if (typeof config.manufacturer !== 'string' || config.manufacturer.length < 1) {
            valid = false;
        }
        if (typeof config.model !== 'string' || config.manufacturer.model < 1) {
            valid = false;
        }
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
