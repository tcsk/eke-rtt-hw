class ComputerPart {

    isGreater() {
        throw 'Not implemented';
    }

    isEqual() {
        throw 'Not implemented';
    }

    validate(config) {
        if (typeof config.manufacturer !== 'string' || config.manufacturer.length < 1) {
            return false;
        }
        return !(typeof config.model !== 'string' || config.model.length < 1);
    }
}

module.exports = ComputerPart;
