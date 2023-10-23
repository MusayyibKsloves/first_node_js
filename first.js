// -----------------------variable-----------------------------

let num=20;
 num =30;

 var num1=40;
 var num1=50;

 const num2=69;
 //num2=50;
console.log(num);
console.log(num1);
console.log(num2);

// --------------------------if-else-------------------------------------

if(num==num1){
    console.log(num);
}
else{
    console.log(num1);
}

// -------------------------- switch case---------------------------------------

let days = 4;
switch(days){
       
       case 1: console.log("Sunday");
       break;
       case 2: console.log("Monday");
       break;
       case 3: console.log("Tuesday");
       break;
       case 4: console.log("Wednesday");
       break;
       case 5: console.log("Thursday");
       break;
       case 6: console.log("Friday");
       break;
       case 7: console.log("Saturday");
       break;
       default:console.log("please enter correct input");
       break;
}

// ---------------------------function-------------------------------------

function m1(){

    console.log("create first function");
}
m1();
 
function m2(n1,n2){
    let sum=n1+n2;
    console.log(sum);
}
m2(30,40);

// ----------------------------string-----------------------------------

let str='first';
let str1="Second";
let str2=`Third`;
console.log(str);
console.log(str1);
console.log(str2);

let len=str.length;
console.log(len);
console.log(str);
str.substring(2,5);
console.log(typeof str);


// --------------------------Array-----------------------------

let arr =new Array("one","Two","Three","Four","five");
arr.pop();
console.log(arr);
arr.push("six");
console.log(arr);
arr.unshift("seven");
console.log(arr);
arr.shift();
console.log(arr);
arr.filter((item)=>{
    console.log(item);
})

let arr1=[1,2,3,4,5,6];
console.log(arr1);
console.log(arr[3]);

let arr2=[1,2,4,5,6,[2,4,6,8,9],10];
console.log(arr2);
let arr3=arr2.flat();
console.log(arr3);



// -------------------------------------Objects-----------------------------------

const user={
    name:"musa",
    mobile:"1234567890",
    email:"abc@gmail.com",
    address:"mzn"
}
console.log(user);
console.log(user.address);