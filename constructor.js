console.log(Math.trunc(4.9))
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));
console.log(Math.pow(8,2));
console.log(Math.sqrt(81));
console.log(Math.abs(-4.7));
console.log(Math.round(Math.sin(60 * Math.PI/180)));
const value = Math.sin(60 * Math.PI/180);
console.log(Math.round(value));

const value2 = Math.cos(30 * Math.PI/180);
console.log(Math.floor(value2));
console.log(Math.round(value2));

function getInteger(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(getInteger(5,10));
//CLass and use strict....
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const myCar = new Car('Toyota', 2026);
console.log(myCar);

//এইটা জাভাসচ্রিপ্ট এর অবজেক্ট অরিয়েন্টড প্রোগ্রামিং প্রাকটিস...
class Car{
    constructor (brand){
        this.carname = brand;
    }
    present(){
        return 'I have a ' + this.carname;
    }
}

class modelCar extends Car{
    constructor(brand, mode){
        super(brand);
        this.mode = mode;
    }
    show(){
        return this.present() + `, it's a `+ this.mode;
    }
}

const myNewCar = new modelCar('BMW', 'MKB2356');
console.log(myNewCar.show());
