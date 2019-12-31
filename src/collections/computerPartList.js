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

    getOptimalUnderPrice(price) {
        let optimal = 0;
        let self = this;

        this.#list.forEach(function (i, e) {
            if(e.price <= price &&  e.part.isGreater(self.#list[optimal].part)) {
                optimal = i;
            }
        });

        return optimal;
    }

    validate(price) {
        if(typeof price !== 'number' || price < 1) {
            throw ('Price is not a valid number');
        }
    }
}

module.exports = ComputerPartList;
