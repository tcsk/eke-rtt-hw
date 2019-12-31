const ComputerPart = require('../domain/computerPart');

class ComputerPartList {

    #list;

    constructor() {
        this.#list = [];
    }

    add(computerPart, price) {
        this.validate(price);
        let obj = {
            price: price,
            part: computerPart
        };
        this.#list.push(obj);
    }

    count() {
        return this.#list.length;
    }

    validate(price) {
        if(typeof price !== 'number' || price < 1) {
            throw ('Price is not a valid number');
        }
    }
}

module.exports = ComputerPartList;
