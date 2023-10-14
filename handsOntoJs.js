//ways to print in javascript
// javascript console api(application programming interface)
// alert("this is me")
// document.write("document is right")
/*console.log("hello world", 4 + 6, "another dom se pange");
console.warn("this is warning")
console.error("this is an error")*/
/* javascript variables
containers to store values
*/
var number1 = 34;
var Number2 = 35;
// console.log(number1 + Number2)
// datatypes in javascript
var num1 = 646;
var num2 = 454;
// string               
var str1 = "this is str1"
var str2 = "this is str2"
// objects
// key value pairs
var marks = {
    ravi: 45,
    savi: 43,
    tavi: 33
}
// console.log(marks);
// booleans
var a = true
var b = false
// console.log(a + b)
// console.log(a, b)
// console.log(a * b)

// var und=undefined;
var und
// console.log(und)

var n = null;
// console.log(n)

/*at (high level) there are two types of data types
1.Primitve data types:undefined,null,number,string,boolean,symbol
2.Reference data types:arrays and objects */
// var arr = [1, 2, "string", 4, 5, "paapu", "shappu"]
var sund
// console.log(sund)

// operators in javascript****
var x = 67
var y = 443;
// console.log("the value of x+y is",x+y)
//Assignment operator
var c = y;
// c+=2;
// console.log(c)
var a = 34
var b = 34
// console.log(a>b);
// logical operators
/* console.log(true & true)
console.log(true && false)    
console.log(false || true)*/
// console.log(!false)
// console.log(!true)

//javascript functions*******
// DRY=DONOT REPEAT YOURSELF 
function avg(a, b) {

    c = (a + b) / 2;
    return c;
}
c1 = avg(3, 6);
c2 = avg(2, 4);
c3 = avg(6, 6);
// console.log(c1,c2,c3);
//conditonals in javascript***
// var age = 70;
// if (age > 15) {
//     console.log("you are not a kid indeed")
// }//single if statement
// else {
//     console.log("you are a naana munna bacha")
// }//if-else statement
// if (age<18)
// console.log("abhi tum bahe ho");
// else if (age>18)
// console.log("waaah bete tuh toh bada hoggya")    
/*var rasnage=18;
if(rasnage<18){
    console.log("bache bade hojao fir pina ")
}                   
else {
    console.log("piyo jitna marzi or sugar ki bimari bhi")
}*/
// loops in javascript***
// var arr = [1, 2, 3, 4, 5, 6]
// // console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//     // break; //left the loop after fullfilling the condtion
//         continue; //continue after cancelling the iteration
//     }
//     console.log(arr[i])
// }
// arr.forEach(function (element) {
//     console.log(element)
// })
// const z = 0;
// let j = 10;//block level scope, good memory managment ,temp variable into block
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
//do while in javascript"""
// do{
//     console.log(arr[j]);
//     j++
// }
// while(j<arr.length);
let myarr = [1, 3, 5, null, "snapshot", false];         //array methods
// console.log(myarr.length)                            
myarr.pop();                                     //pop element from array
// console.log(myarr.length)
myarr.push("supreme")                            //push an element in an array
myarr.shift()                                    //help in removing the first elementunshift(1) 
const newlen = myarr.unshift(1)
// console.log(newlen);
// console.log(myarr);

// string methods in javascript****
let mylovelystring = "surya is Epic epic ";
// console.log(mylovelystring.length)
// console.log(mylovelystring.indexOf("epic"))
// console.log(mylovelystring.lastIndexOf("epic"))

// console.log(mylovelystring.slice(0,5))
d = mylovelystring.replace("surya", "Suraj");
// d=d.replace("epic","")
// console.log(d,mylovelystring)     

// Dates in javascript**
let mydate = new Date();
// console.log(mydate.getTime())

/* DOM(Document Object Model) MANIPULATION  for html manipulation dynamically changes*/

let elem = document.getElementById('click');
// console.log(elem);
let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);
// elemclass[1].style.background = "yellow";
elemclass[1].classList.add("bg-sec")
elemclass[1].classList.add("bg-pri")
elemclass[1].classList.add("bg-ita")
elemclass[1].classList.add("bg-bold")
elemclass[1].classList.add("text-color")
// console.log(elem.innerHTML)
// console.log(elem.innerText)

// console.log(elemclass[1].innerHTML);
// console.log(elemclass[1].innerText);

/*  to find more elements in DOC   */

// tn=document.getElementsByTagName("div")        //by tag name
// console.log(tn)
// tn=document.getElementsByTagName("button")        //by tag name
// console.log(tn)

tn=document.getElementsByTagName("div")       
// console.log(tn)
createdElement=document.createElement('p');
createdElement.innerText="this is the created p"                /*adding */ 
tn[0].appendChild(createdElement);
// createdElement2=document.createElement('b');                     
// createdElement2.innerText="this is the created b";
// tn[0].replaceChild(createdElement2, createdElement);               /*replacing*/
//removeChild(element); ----> removes an element

// createdElement2=document.createElement('b');
// createdElement2.innerText="this is the created b"
// tn[0].appendChild(createdElement2)

// cn=document.getElementsByClassName("container")
// console.log(cn)
// createdElement3=document.createElement('p');
// createdElement3.innerText="this is the created p in class 2"
// cn[1].appendChild(createdElement3)

/* SELECTING USING QUERY */
select = document.querySelector('.container')
// console.log(select)
select = document.querySelectorAll('.container')
// console.log(select)
/*              EVENTS IN JAVASCRIPT           */
function clicked(){
    // console.log("the button was hellya clicked")   //onclick=""
}

window.onload=function(){
// console.log("document was loadedd")
};

firstcontainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    // console.log("clicked on container")
});

// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse on container")
// });

// firstcontainer.addEventListener('mouseout',function(){
//     console.log("mouse out of container")
// });
// firstcontainer.addEventListener('mouseup',function(){
//     console.log("mouse up when clicked on container")
// });
// firstcontainer.addEventListener('mousedown',function(){
//     console.log("mouse down when clicked on container")
// });

/* Arrow functions */

// function sum(a,b){
//     return a+b;
// }
sum=(a,b)=>{            //Arrow function
    return a+b
}

login = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> set timeout</b>"
    console.log("im your log in ")
}
/* (set time-out) and set interval */ /* use clearTimeout(clr) and clearInterval(clr) to cancel S-T & S-I */
// setTimeout(login,4000);
/*  set interval */
// clr = setInterval(login,2000);

/* JAVASCRIPT LOCAL STORAGE */
// localStorage.setItem('name','sup')
// localStorage.clear('name')
// localStorage.removeItem('name')

/* "JSON"  (JAVASCRIPT OBJECT NOTATION) open standard file format helps in exchanging the data */
/* json only accept single quotes not double  */
// obj = {name : "suraj", lenght:1 , a:{this : 'tha"t' }}
// jsn = JSON.stringify(obj)
// console.log(typeof jsn)
// console.log( jsn)
// parsed=JSON.parse(`{"name":"suraj","lenght":1,"a":{"this":"that"}}`)
// console.log(parsed);

/* TEMPLATE LITERALAS - BACKTICKS */
a = 34;
console.log(`this is my ${a}`)        
