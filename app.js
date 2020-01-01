const Motherboard = require('./src/domain/Motherboard');
const Processor = require('./src/domain/Processor');
const Memory = require('./src/domain/Memory');
const MotherboardList = require('./src/collection/MotherboardList');
const ProcessorList = require('./src/collection/ProcessorList');
const MemoryList = require('./src/collection/MemoryList');
const ConfigurationFinder = require('./src/util/ConfigurationFinder');

let motherboard1 = new Motherboard({
    'manufacturer': 'Gigabyte',
    'model': 'S4-320-P',
    'services': 12
});
let motherboard2 = new Motherboard({
    'manufacturer': 'Gigabyte',
    'model': 'S5-320-P',
    'services': 14
});
let motherboard3 = new Motherboard({
    'manufacturer': 'Gigabyte',
    'model': 'S6-320-P',
    'services': 16
});
let motherboardList = new MotherboardList();
motherboardList.add(motherboard1, 3000);
motherboardList.add(motherboard2, 3000);
motherboardList.add(motherboard3, 3000);

let processor1 = new Processor({
    'manufacturer': 'Intel',
    'model': 'I3',
    'cores': 2,
    'speed': 2.85
});
let processor2 = new Processor({
    'manufacturer': 'Intel',
    'model': 'I9',
    'cores': 6,
    'speed': 3.85
});
let processor3 = new Processor({
    'manufacturer': 'Intel',
    'model': 'I5',
    'cores': 4,
    'speed': 3.85
});
let processorList = new ProcessorList();
processorList.add(processor1, 3000);
processorList.add(processor2, 3000);
processorList.add(processor3, 3000);

let memory1 = new Memory({
    'manufacturer': 'Kingston',
    'model': 'Z693',
    'size': 4096,
    'speed': 2200
});
let memory2 = new Memory({
    'manufacturer': 'Kingston',
    'model': 'Z693',
    'size': 8096,
    'speed': 2300
});
let memory3 = new Memory({
    'manufacturer': 'Kingston',
    'model': 'Z693',
    'size': 4096,
    'speed': 2200
});
let memoryList = new MemoryList();
memoryList.add(memory1, 3000);
memoryList.add(memory2, 3000);
memoryList.add(memory3, 3000);

let configurationFinder = new ConfigurationFinder(motherboardList, processorList, memoryList);
let result = configurationFinder.getOptimalConfigurationUnderPrices(5000,5000,5000);

console.log(memoryList.count());

console.log('Optimal motherboard:', motherboardList.list[result.motherboard]);
console.log('Optimal processor:', processorList.list[result.processor]);
console.log('Optimal memory:', memoryList.list[result.memory]);


