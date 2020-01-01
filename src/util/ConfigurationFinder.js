class ConfigurationFinder {

    constructor(motherboard, processor, memory) {
        this.validate(...arguments);
    }

    validate(...args) {
        if (args.length !== 3) {
            throw('You need to pass exactly 3 arguments to constructor');
        }
        args.forEach(function (e) {
            if (typeof e !== 'object') {
                throw('One of the arguments is not a valid Object');
            }
        });
    }
}

module.exports = ConfigurationFinder;
