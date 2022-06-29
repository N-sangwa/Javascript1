// 1
for ( var c = 1; c<=100; c++ )
if (c % 3 ===0 && c%5===0){
    console.log("FizzBuzz");
}
else if(c%5 === 0){
    console.log("Buzz");
}

else if(c%3 === 0 ){
    console.log("Fizz");
}

// 2
var sum = 0;
for (var a = 0; a < 1000; a++)
{
    if (a % 3 === 0 || a % 5 === 0)
    {
       sum += a;
    }
}
console.log(sum);

// 3

for( var s = 0; s<=20; s++)
if (s%2 ===0){
    alert(s + " is even");
}
else if(s%2!= 0){
    alert(s + " is odd");
}

// 4


let num = [-2, 4,-5, 6,0]

var largest = num[0];

for (var number = 0; number< num.length; number++){

    if(num[number]>largest){

        largest = num[number];
    }
   
}
console.log(largest)


// 5

function largestNumber(a,b){
    if (a>b){
        console.log(a + " is the largest");
    }
    else if (a<b){
        console.log( b + " is the largest");
    }
}
largestNumber(10,40);

// 6

for (var x = 2000; x<= 2022; x++ ){
    if(x %4===0 || x % 400 ===0 ){
console.log(x + " is a leap a year");
    }  
}
