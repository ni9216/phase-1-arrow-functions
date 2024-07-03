function foo(){
    return 'bar';
}
const fooExpression = function(){
    return 'bar';
}

const add = (parameter1, parameter2) =>  parameter1 + parameter2;
console.log (add(2, 3))

const twoAdder = x => x + 2;
console.log(twoAdder(3));

const divide = function(){
    return 2000 / 100;
}

const sum = (parameter1, parameter2) =>{
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`)
    return parameter1 + parameter2;
};

const square = (num) => {
    return num * num;
}