// methods in java script


// toFixed function -- 

// let a = 10;
// let b = 345.3532424;
// console.log(b.toFixed(2)) // 345.35
// console.log(b.toFixed(3))//345.343
// console.log(b.toPricision(4));
// console.log(b.toString());

// console.log(typeof(b.toFixed(2))) // return string 

// let a = 10;
// let b = 345.3532424;
// let c = b.toFixed(1);
// console.log(typeof c);
// console.log(b.toString());



// simple way of creating a number 
// let a = 20;
// console.log(a);


// // this will create a number in a object format
// let  a = new Number(20);
// console.log(a);

// this method is not good
// why ?????????/

// let a = new Number(20);
// let b = new Number(20);

// console.log(a == b); // this will give False 


// let obj1 = {
//     name : "rohit"
// }

// obj2 = obj1; // this will give true obj2 bhi obj1 ko refer krega 
// // let obj2 = {
// //     name : "rohit"
// // }

// console.log(obj1 == obj2) // false 


// // case 2

// let obj1 = {
//     name : "rohit"
// };
// obj2 = obj1;
// console.log(obj2 == obj1);


// non primitive data type : reference bases pe compare honge
// primitive : copy by value 
// let a = 20;

// let b = a;
// console.log(a = b);