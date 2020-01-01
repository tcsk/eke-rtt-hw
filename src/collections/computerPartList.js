const ComputerPart = require('../domain/ComputerPart');

class ComputerPartList {

    #list;

    constructor() {
        this.#list = [];
    }

    add(computerPart, price) {
        this.validate(computerPart, price);
        let obj = {
            price: price,
            part: computerPart
        };
        this.#list.push(obj);
    }

    count() {
        return this.#list.length;
    }

    getOptimalUnderPrice(price) {
        let optimal = null;

        this.#list.forEach(function (e, i) {
            let index = optimal || 0;
            if(e.price <= price &&  e.part.isGreater(this.#list[index].part)) {
                optimal = i;
            }
        }.bind(this));

        return optimal;
    }

    validate(computerPart, price) {
        if(!(computerPart instanceof ComputerPart)){
            throw ('computerPart is not a valid ComputerPart');
        }
        if(typeof price !== 'number' || price < 1) {
            throw ('Price is not a valid number');
        }
    }
}

module.exports = ComputerPartList;
