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
