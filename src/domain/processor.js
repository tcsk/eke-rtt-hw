class Processor {

    #manufacturer;
    #model;
    #cores;
    #speed;

    constructor(config) {
        this.validate(config);
        this.#manufacturer = config.manufacturer;
        this.#model = config.model;
        this.#cores = config.cores;
        this.#speed = config.speed;
    }

    getManufacturer() {
        return this.#manufacturer;
    }

    getModel() {
        return this.#model;
    }

    getCores() {
        return this.#cores;
    }

    getSpeed() {
        return this.#speed;
    }

    validate (config) {
        let valid = true;
        if (typeof config.manufacturer !== 'string' || config.manufacturer.length < 1) {
            valid = false;
        }
        if (typeof config.model !== 'string' || config.manufacturer.model < 1) {
            valid = false;
        }
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
