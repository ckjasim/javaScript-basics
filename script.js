// ternery operators

// let num=7;
// let result

// result=num%2==1?"odd":"even"
// console.log(result)


// function

// let vayas="muppath vayas";

// function anamika(a,b){
        
//         console.log(b)
//         console.log(a)
//         console.log(vayas)

// }    
// anamika("pottathi",10)
// let amp="anamika"


/* arrow fn normal

arr=(a)=>{
    return a
}
console.log(arr("mudyalchil")) */

/* arrow fn single line

arrow=amp => amp+" anamika"

console.log (arrow("kuttippa")) */

// alert("Theepori shabeeb")

// OBJECT
// let anam={
//     a1 : "Genius" ,
//     a2 : "pottathi"
    

// }
// let object ={
//     key : "value" ,
//     anamika : anam
    

// }
// // alert(object.anamika)
// console.log(object)


// let abc={
//     gy:fd={
//        name:"sd",
//        age:33 
//     },
//     ab:fd={
//         name:"d",
//         age:33 
//      }
// }
// console.log(abc)


// Array

// let array = [[],"anamika","pottathi",{ad:1,bc:2}]
// console.log(array)


// ARRAY INDEXOF LASTINDEX SEARCH INCLUDES

// let anamika = "pottathi mandathi m"
// console.log(anamika.indexOf("m"))
// console.log(anamika.lastIndexOf("m"))

// console.log(anamika.indexOf('pottathi'))
// console.log(anamika.indexOf("genius"));

// console.log(anamika.search("mandathi"))
// console.log(anamika.search("genius"));

// console.log(anamika.includes("mandathi"));
// console.log(anamika.includes("genius"));

// SLICE

// let anamika = "adipoli kutti"
// console.log(anamika.slice(3,12))
// console.log(anamika.slice(3))
// console.log(anamika.slice(-3))

// NUMBER METHODS  

// TO STRING

// let a=10;
// console.log(typeof (a))
// console.log(typeof a.toString())

// PARSEINT

// let b="10"
// console.log(typeof b)
// console.log(typeof parseInt(a))

// PUSH

//  let array = ["messi","ronaldo","salah"]
// console.log(array[0])
// console.log(array)

// array.push("neymar","jude")
// console.log(array)

// console.log(array.indexOf("jude"))

// POP

// array.pop("jude")
// console.log(array)

// array.pop()
// console.log(array)

// array.pop(-1,)
// console.log(array)

// array.pop("1")
// console.log(array)

// array.pop()
// console.log(array)

// console.log(array.push())
// console.log(array.pop())

// SHIFT

// let array = ["messi","ronaldo","salah"]
// console.log(array.length)

// UNSHIFT

// array.unshift("Neymar","jude")
// console.log(array)

// array.shift()
// console.log(array)

// console.log(array.shift())
//  console.log(array.shift())
// console.log(array.unshift())

// SPLICE

// let array = ["messi","cristiano","jude","salah"]
// console.log(array)

// array.splice(2,1,"Neymar","zidan")
// console.log(array)

// array.splice(2,0)
// console.log(array)

// array.splice(2)
// console.log(array)

// array.splice(1,"Neymar","zidan")
// console.log(array)

// let array = ["messi","cristiano","jude","salah"]
// console.log(array)
// // console.log(array.slice(0,1))
// let newArray = array.slice(0,1)
// console.log(newArray)

// SHALLOW COPY

// let a={
//     x:1,
//     y:2
// }
// let b=a;
// b.x=5;
// console.log(b);
// console.log(a);

// DEEP COPY

// let c=5;
// let d=c;
// d=10
// console.log(c);
// console.log(d);

// SORT

// let array = ["a","b","c","ad"]

// array.reverse()
// console.log(array)

// array.sort()
// console.log(array)

// array.reverse()
// console.log(array)

// let myObject = {
//     name : "messi",
//     no : "10"
// }

// console.log(myObject)

// myObject.name="ronaldo"
// console.log(myObject)

// delete myObject.no
// console.log(myObject)


// let thatha = 10
// while(thatha<=10){
//     console.log(thatha);
//     thatha++;
// }

// do{
//     console.log(thatha)
//     thatha++
// }while(thatha===10)


// ADVANCED JS

// PASS BY VALUE IMMUTABLE

// let goat="messi"

// let cristiano=goat

// console.log(cristiano)

// cristiano="idol"
// console.log(cristiano)

// console.log(goat)


// PASS BY REFERENCE MUTABLE

// let globalPlayer ={
//     name:"messi",
//     power : 100
// }

// let cristiano=globalPlayer
// console.log(cristiano);

// cristiano.power=99
// console.log(globalPlayer);


// SPREAD OPERATORS

// let globalPlayer ={
//     name:"messi",
//     power : 100
// }

// // let cristiano={...globalPlayer}
// let cristiano=Object.assign({},globalPlayer)

// console.log(cristiano);

// cristiano.power=99
// console.log(cristiano);

// console.log(globalPlayer);


// CONCAT AND PUSH  USING SPREAD

// const globalPlayer =["messi","cristiano","salah","jasim"]
// const kandamPlayer=["annan","chiku","abdu"]

//     //CONCAT

//     // const player=globalPlayer.concat(kandamPlayer)

//     const player=[...globalPlayer,...kandamPlayer,"shabeeb"]
    
//     console.log(player);
   


// DESTRUCTION

//ARRAY

// let kandamPlayer = ["shabeeb","shamil","anshif"]

// let [first,second,third]=kandamPlayer

// console.log(third)
// console.log(first)
// console.log(second)

//OBJECT

// let kandamPlayer ={
//     name:"shabeeb",
//     no:9,
//     position : "bench",
// }

// let {no,position,name}=kandamPlayer

// console.log(position);
// console.log(no);
// console.log(name);


//REST

    // let kandamPlayer ={
    //     name:"shabeeb",
    //     no:9,
    //     position : "bench",
    // }
    
    // let {name,...rest}=kandamPlayer
    
    // console.log(name);
    // console.log(rest);


// FOR EACH

// let kandamPlayer=["abdu","annan","chiku"]

// kandamPlayer.forEach(function(value,index,array){
//     console.log(value)
// })


// let kandamPlayer=[
//     {
//         name :"abdu",
//         Number: 10,
//         position:"bench"
//     },
//     {
//         name :"annan",
//         Number: 8,
//         position:"gk"
//     },
//     {
//         name :"chiku",
//         Number: 9,
//         position:"cf"
//     },
//     {
//         name :"hakki",
//         Number: 9,
//         position:"cb"
//     }
// ]

// kandamPlayer.forEach(function(value,index,array){
//     console.log(value)
// })

// kandamPlayer.forEach((value,index,array )=> console.log(value.name))


// MAP

// let mapArray = []
// for (let i=0;i<kandamPlayer.length;i++){
//     mapArray.push(kandamPlayer[i].name)
// }
// console.log(mapArray);

// let mapArray=kandamPlayer.map((value,index,array)=>(value.name))
// console.log(mapArray);

//FILTER 

// let filterArray =kandamPlayer.filter((value,index,array)=>{
//     if(value.Number===9){
//         return true
//     }
// })

// let filterArray =kandamPlayer.filter((value,index,array)=>(value.Number===10 && value.position==="bench"))
// console.log(filterArray);

//REDUCE



// let numberArray = [10,34,54,65,65,32,45,65,78]

// // let total=0

// // for(let i=0;i<numberArray.length;i++){
// //     total+=numberArray[i]
// // }

// // console.log(total)


// let totalArray = numberArray.reduce((total,value,index,array)=>total+value,0)
// console.log(totalArray)



//FIND

// let kandamPlayer=[
//         {
//             name :"abdu",
//             Number: 10,
//             position:"bench"
//         },
//         {
//             name :"annan",
//             Number: 8,
//             position:"gk"
//         },
//         {
//             name :"chiku",
//             Number: 9,
//             position:"cf"
//         },
//         {
//             name :"hakki",
//             Number: 9,
//             position:"cb"
//         }
//     ]

//     let findObj=kandamPlayer.find((value)=>value.Number===8).name

//     console.log(findObj);

//SORT

// let numberArray = [10,34,54,65,5,32,45,65,78]

// numberArray.sort()
// console.log(numberArray)

// numberArray.sort((a,b)=>a-b)
// console.log(numberArray)

// numberArray.sort((a,b)=>b-a)
// console.log(numberArray)

// ES10 SYNTAX 

//FLAT

// let numberArray = [10,34,[54,65],[5,32,[12,[23,34,[45,54,34,[45,76,2]]]],78]]

// // console.log(numberArray.flat())

// console.log(numberArray.flat(Infinity));

// console.log(numberArray.flat(Infinity).indexOf(78));


// CHAINING

// let kandamPlayer={
//                 name :"abdu",
//                 Number: 10,
//                 position:"bench",
//                 quality:{
//                     color:"white"
//                 }
//                 }

// if(kandamPlayer && kandamPlayer.quality &&kandamPlayer.quality.color){
//     console.log(kandamPlayer.quality.color);
// }                

// if(kandamPlayer?.quality?.color){
//     console.log(kandamPlayer.quality.color);
// }




//CHAINING IN HIGHER ORDER

// let numberArray = [10,34,54,65,5,32,45,65,12,32,56,89,78]

// const chainArray=numberArray.map((value)=>value)
//                           .filter((value)=>value>20)
//                             .sort((a,b)=>a-b)
//                             .reduce((total,value)=>total+value,0);

// console.log(chainArray);


// let myArray = [[],{ab:1,bd:3}]

// let result= myArray.flat(Infinity)
// .reduce((total,value)=>total+value.ab+value.bd,0)
// console.log(result);



//ASYNCHRONOUS

// setTimeout(()=>{
//     console.log("njn")
// },0)

// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")
// console.log("1")


//CALL BACK


// function anamika(){
//     setTimeout(()=>{
//         return "genius"
//     },3000)
// }

// console.log("1");
// console.log(anamika())
// console.log("2");
// console.log("3");


// function anamika(callback){
//     setTimeout(()=>{
//         callback("genius");
//     },3000)
// }

// console.log("1");

// anamika((value)=>{
//     console.log(value)
// })

// console.log("2");
// console.log("3");


// function shabeeb(callback){
//     setTimeout(()=>{
//         callback("kidlan")
//     },3000)
// }

// shabeeb((value)=>{
//     console.log(value)
// })


//PROMISE


// const promise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("success")
//     }, 3000);
// }) 

// promise.then((response)=>{
//     console.log(response)
// })

// const promise=new Promise((resolve,reject)=>{
//     reject("failed")
// })

// promise.catch((error)=>{
//     console.log(error)
// })

// function player1(){
//     return new pro
// }


// let promise1=new Promise((resolve,reject)=>{
//     resolve(["success","jasim"])
// })
// let promise2=new Promise((resolve,reject)=>{
//     reject(["failed","anamika"])
// })

// // let allPromise=Promise.any([promise1,promise2])
// // let allPromise=Promise.all([promise1,promise2])
// // let allPromise=Promise.allSettled([promise1,promise2])
// //  let allPromise=Promise.race([promise1,promise2])


// allPromise=allPromise.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


// let promise =new Promise((resolve,reject)=>{
//     resolve("success")
// })
// let promise1 =new Promise((resolve,reject)=>{
//     resolve("success")
// })
// let allPromise=promise.any([])



//IMMUTABLE

// let name = "jasim"
// name[0]="h"
// console.log(name);


//SHALLOW COPY

//SPREAD

// let ennam =[2,3,4,5,6]

// let number = [...ennam]

// number[0]=1
// console.log(number);

//OBJECT ASSIGN

// let ennam ={a:1,b:2}
// let number ={b:4,d:5}

// let newObj=Object.assign(ennam,number);

// console.log(ennam);

//OBJECT CREATE 

// let ennam ={a:1,b:2}

// let asd= Object.create(ennam);

// asd.b=46;
// console.log(asd);
// console.log(ennam)


// DEEP COPY

// let array=[1,2,{ac:2,sd:4}]

// let newArray=array
// newArray[2].ac=10;
// console.log(array)
// console.log(newArray)

// // let deepArray = JSON.parse(JSON.stringify(array))
// // deepArray[2].ac=10;
// // console.log(array)
// // console.log(deepArray)

// let deepArray=structuredClone(array)
// deepArray[2].ac=10;
// console.log(array)
// console.log(deepArray)

// LITERAL 

// let num1=4
// let num2=3
// let result=5
// console.log(`The sum of numbers ${num1} and ${num2} is ${result}`)


// THIS

// let player = {
//     name : "jasim",
//     number : 24,

//     // position : function(){
//     //     console.log(player.name);
//     // }

//     position(){
//         // console.log(player.name);
//         console.log(this.name);
//     }
// }

// let match = player
// player =null

// match.position()


//CALL

// let object1 ={
//     method :function(){
//         console.log(this.nam +" "+ this.position)
//     }
// }

// let object2={
//     nam:"jasim",
//     position:"center back"
// }

// object1.method.call(object2)





// WITHOUT OBJECT   -   DIRECT FUNCTION


// method =function(){
//         console.log(this.nam +" "+ this.position)
//     }

// let object2={
//     nam:"jasim",
//     position:"center back"
// }

// method.call(object2)


//WITH ARGUMENT

// let object1 ={
//     method :function(age,place){
//         return this.nam +" "+ this.position+" "+age+" "+place
//     }
// }

// let object2={
//     nam:"jasim",
//     position:"center back"
// }

// console.log(object1.method.call(object2,"23","Mongam"))

// let arr=[1,2,3];
// let result=Math.max.apply(arr)
// console.log(result)


//APPLY

// let object1 ={
//     method :function(age,place){
//         return this.nam +" "+ this.position+" "+age+" "+place
//     }
// }

// let object2={
//     nam:"jasim",
//     position:"center back"
// }

// let apply = object1.method.apply(object2,["23","Mongam"])

// console.log(apply)
//BIND

// let object1 ={
//     nam:"anamika",
//     position:"center forward",
    
//     method :function(age,place){
//         return this.nam +" "+ this.position+" "+age+" "+place
//     }
// }

// let object2={
//     nam:"jasim",
//     position:"center back"
// }

// let bind = object1.method.bind(object2,["23","Mongam"])
// console.log(bind())


//--------EVENT DELEGATION-----------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Event Delegation Example</title>
//   <style>
//     ul {
//       list-style: none;
//       padding: 0;
//       cursor: pointer;
//     }

//     li {
//       display: inline-block;
//       padding: 10px;
//       margin: 5px;
//       background-color: #eee;
//     }
//   </style>
// </head>
// <body>

//   <h2>Click the List Items</h2>
  
//   <ul id="parentList">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//     <li>Item 4</li>
//     <li>Item 5</li>
//   </ul>

//   <script>
//     // Event delegation using the parentList as the common ancestor
//     document.getElementById('parentList').addEventListener('click', function(event) {
//       if (event.target.tagName === 'LI') {
//         alert('You clicked on: ' + event.target.innerText);
//       }
//     });
//   </script>

// </body>
// </html>


//--------SET--------

// let newSet=new Set();
// newSet.add("1")
// newSet.add(1)
// newSet.add("hello")
// newSet.add(true)

// newSet.add("hello")

// newSet.add("1")


// console.log(newSet);


//---------- ARRAY map-------------

// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);

// let mapArray=kandamPlayer.map((value,index,array)=>(value.name))
// console.log(mapArray);


//-----------Map-------

// let myMap = new Map();
// myMap.set('name', 'John');
// myMap.set('age', 25);

// myMap.forEach((value, key) => {
//   console.log(key, value);
// });


//---------WEAKSET--------

// // Creating a WeakSet
// let myWeakSet = new WeakSet();

// // Creating some objects
// let obj1 = { name: 'John' };
// let obj2 = { name: 'Jane' };
// let obj3 = { name: 'anamika' };

// // Adding objects to the WeakSet
// myWeakSet.add(obj1);
// myWeakSet.add(obj2);
// myWeakSet.add(obj1);
// console.log(myWeakSet);



//---------WEAKMAP------

// Create a WeakMap
// let carWeakMap = new WeakMap();

// // Create some objects to be used as keys
// let car1 = { brand: 'Toyota', model: 'Camry' };
// let car2 = { brand: 'Honda', model: 'Civic' };

// // Associate data with the objects using the WeakMap
// carWeakMap.set(car1, 'This is information about Toyota Camry');
// carWeakMap.set(car2, 'This is information about Honda Civic');

// // Retrieve data using the keys
// console.log(carWeakMap.get(car1)); // Output: This is information about Toyota Camry
// console.log(carWeakMap.get(car2)); // Output: This is information about Honda Civic

// // WeakMap doesn't prevent garbage collection
// car1 = null; // Remove the reference to car1

// // Since car1 is no longer referenced, its entry in the WeakMap can be garbage collected
// console.log(carWeakMap.get(car1)); // Output: undefined
// console.log(carWeakMap)



//----------CURRYING--------


// function abc(l,w,h){
//     return l*w*h
// }
// console.log(abc(4,5,6))

// function abc(height){
//     return function(width){
//         return function(lenght){
//             return height*width+lenght;
//         }
//     }
// }
// console.log(abc(4)(5)(6));



//--------IIFE------


// function abc (){
//     let a=10
//     console.log(a)
// }

// var result = (function() {
//     var counter = 0;
  
//     return function() {
//       return counter++;
//     };
//   })();
  
//   console.log(result()); // Output: 0
//   console.log(result()); // Output: 1
//   console.log(result()); // Output: 2
  


//--------CALL BACK HELL-----


// function a(callBack){
//     callBack()
// }

// function b(callBack2){
//     callBack2()
// }
// function c(callBack3){
//     callBack3()
// }
// function d(callBack4){
//     callBack4()
// }
// function e(callBack5){
//     callBack5()
// }
// a(function callback(){
//     console.log("jasim")
//     b(function callback2(){
//         console.log("ishaq")
//         c(function callback3(){
//             console.log("shabeeb")
//             d(function callback4(){
//                 console.log("sahala")
//                 e(function callback5(){
//                     console.log("rasha")
//                 })
//             })
//         })
//     })
// })


// -----------CLOSURE---------



// function outer(){
//     let a =10
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }

// let newClosure=outer()

// newClosure()


// function outer(){
//     let a =10
//     function inner(){
//         console.log(a)
//         a++
//     }
//     return inner
// }

// let newClosure=outer()

// newClosure()
// newClosure()
// newClosure()
// newClosure()
// newClosure()


//------PROTOTYPE CHAIN-----


// console.log(person1.name); // Property found on person1
// console.log(person1.toString()); // Found on Object.prototype


//-------REMOVE NTH ELEMENT---------



//  let araay=[1,2,3,4,5]

// function remove(n){
//     araay.splice((n-1),1);
// }

// remove(2)
// console.log(araay)


// function removeNthElement(arr, n) {
//     if (n >= 0 && n < arr.length) {
//         arr.splice(n, 1);
//     } else {
//         console.log("Index out of range");
//     }
// }

// // Example usage:
// let myArray = [1, 2, 3, 4, 5];
// removeNthElement(myArray, 2);
// console.log(myArray);  // Output: [1, 2, 4, 5]


//----------UPPER CASE--------

// let array=["dasfsf","dfsdf","fsdfasdf"]

// let marray=array.map((value)=>value.toUpperCase())
// console.log(marray);



// let myArray = ['apple', 'banana', 'cherry'];

// let newArray = myArray.map(element => element.toUpperCase());

// console.log(newArray);
// // Output: ['APPLE', 'BANANA', 'CHERRY']



//------LONGEST STRING-------

// let array=["fddggd","gdgdgdgdgdgd","gdgdfgdfd"]

// let largest=array.reduce((longest,current)=>{
//     return current.length>longest.length?current:longest
// }," ")

// console.log(largest);


//---------SUM OF X3-------------

// let array=[1,3,4,2,5,9,8,79,12,1,15]

// let sm=array.reduce((sum,current)=>{
//     return current%3===0?sum+current:sum
// },0)

// console.log(sm)


//---------even Array Filter--------

// let array=[2,34,43,45,65,56,76,678,78]

// let even=array.filter((value)=>value%2==0)

// console.log(even);


//-------REmove Duplicate Values------

// let array=[2,2,33,33,44,4,5,5,6]

// let dup=[...new Set(array)]

// console.log(dup);


//------

// let array=[[],{ad:2,sd:4}]

// let value = array.flat().filter((value)=>typeof value==='number')

// let sum=value.reduce((sm,val)=>sm+val,0);

// console.log(sum)



//  let a = [[], {ad: 1, as: 2}];

// // Flatten the array and filter out non-number values
// let flattenedValues = a.flat().filter(value => typeof value === 'number');

// // Sum up the filtered values
// let sum = flattenedValues.reduce((acc, val) => acc + val, 0);

// console.log('Sum of values:', sum);


// //------1 to 100 X3--

// let array=[]
// for(i=1;i<=100;i++){
//     if(i%3===0){
//         array.push(i);
//     }
// }

// console.log(array);



// function abc(num){
//     return num%3===0 && num%5===0
// }

// console.log(abc(15))


// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(" ")se
//     })
// })

// promise.then((response)=>{
//     console.log(response)
// })


// function abc(){

//     (function asd(){
//         let a=110
//         return a
//     })()
    
// }

// let array =[1,2,3,4,5]

// let newarray=array.filter(value=> 
// value%2===0
// })

