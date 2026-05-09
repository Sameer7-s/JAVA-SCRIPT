// math object 

// console.log(Math.abs(-22)); // 22
// console.log(Math.PI);
// console.log(Math.LN10);  // 2.30
// console.log(Math.SQRT2);
// console.log(Math.ceil(6.3)); // ceil make upper value 6.3 to 7
// console.log(Math.floor(6.3));// floor makes value to lower 6.3 to 6
// console.log(Math.log10(20));
// console.log(Math.max(20,10,5,77,8,7,6));

// console.log(Math.random()) // generate the random value 
//  genrated value will be 0 to 1 and 0 is included 


// satte baji ek game banana : (0-9)

// console.log(Math.floor(Math.random()*10));

// for make range 1  to 10  
// console.log(Math.floor(Math.random()*10)+1);

// 0 -- 6 

// console.log(Math.random()*6)
// console.log(Math.floor(Math.random()*6))// 0 to 5 it give so we add +1 so that it will take up to 6 also 
// console.log(Math.floor(Math.random()*6 + 1))


// Math.random()*total_no_of_outcomes
// than calculate the floor value becouse the output of upper case is in pointer and decimal 
// Math.floor(Math.random()*total_no_of_outcomes) 
// shift now if we want to print 1 to 10 so +1
// 2 to 20     ----------------------------- + 2

// so FInal expression will be 

// Math.floor(Math.random()*total_no_of_outcomes) + shift

// formula **********************************
// Math.floor(Math.random(max - min))+min
// ******************************************

// now genrate 15 -- 25

// console.log(Math.floor(Math.random()*11)+15);

// WHERE IT COULD BE USE IN RL WORLD 
// OTP GENRATE : 4 DIGIT : 1000-9999;


console.log(Math.floor(Math.random()*(9999 - 1000+1))+1000);
// but this method is not secure 


// math.random acctually me   