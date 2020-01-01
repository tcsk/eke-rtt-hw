class ConfigurationFinder {

    motherboardList;
    processorList;
    memoryList;

    constructor(motherboardList, processorList, memoryList) {
        this.validate(...arguments);
        this.motherboardList = motherboardList;
        this.processorList = processorList;
        this.memoryList = memoryList;
    }

    getOptimalConfigurationUnderPrices(motherboardPrice, processorPrice, memoryPrice) {
        let motherboard = this.motherboardList.getOptimalUnderPrice(motherboardPrice);
        let processor = this.processorList.getOptimalUnderPrice(processorPrice);
        let memory = this.memoryList.getOptimalUnderPrice(memoryPrice);

        return {
            motherboard: motherboard,
            processor: processor,
            memory: memory
        }
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
