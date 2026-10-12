//ARITHEMATIC OPERATORS 
console.log(9+2);
console.log(7-2);
console.log(20*2);
console.log(24/2);
console.log(2%2);
console.log(3**2);

console.log(2>1);
if(2>1 && 3>2){
    console.log("HELLO")
}

//ASSIGNMENT OPERATORS
let a=5;

a=5;
console.log(a)

a+=3;
console.log(a);

a-=2;
console.log(a);

a*=4;
console.log(a);

a/=3;
console.log(a);

a%=3;
console.log(a);

a**=3;
console.log(a);


//COMPARISION OPERATOR

let x = 10;
let y = 5;

console.log(x == y);   
console.log(x === y);
console.log(x != y);   
console.log(x !== y);  
console.log(x > y);   
console.log(x < y);    
console.log(x >= y);   
console.log(x <= y);   


//LOGICAL OPERATORS

let u = 10;
let v = 5;

console.log(u > 5 && v < 10); 
console.log(u < 5 || v < 10); 
console.log(!(u> 5));        


//Task:calculate booking amount of movie tickets;
//if ticket quantity is >3 then apply a discount of 50 rupees
//1. age should be >18


const ticketprice=400;
const quantity=4;
const age=21;
const amount= quantity*ticketprice;

if(age>18){
    if(quantity>3){
        amount-=50;

    }
    console.log(amount);    
} else{
        console.log("booking not allowed as age is less than 18");

    }
