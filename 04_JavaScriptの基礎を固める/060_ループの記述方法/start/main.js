// const arry = [1,2,3,4,5]


// function forEach(ary,callback){
//   for(let i = 0; ary.length; i++){
//     callback(ary[i]);
//   }
// }


// function log(val){
//   console.log(val);
// }

// function double(val){
//   val = val * 2;
//   log(val);
// }


// forEach(arry,function(val){
//   val = val * 2;
//   log(val);
// });


const arry = [1,2,3,4,5];

arry.forEach(val => console.log(val))

















































// function hello(callback){
//   console.log("hello " + callback());
// }

// function getName(){
//   return "kota";
// }

// hello(function(){
//   return "code";
// })

// hello(() => "code");



// hello(() => "code");



// function doSomething(a, b, callback){
//   const result = callback(a,b);
//   console.log(result);
// }

// function multiply(a,b){
//   return a*b
// }
// function plus(a,b){
//   return a+b
// }

// doSomething(3,5,multiply);
// doSomething(34,33,plus)





































// // const hello = function(name = "tom"){
// //   console.log("hello " + name);
// // }

// // const arry = [1,2,3,4,5]

// // arry.forEach(function(value){
// //   console.log(value);
// // })

// // arry.forEach(value => console.log(value));

// // const hello = (name) => console.log("hello " + name)

// // hello("kota");



// // const todos = [
// //   {
// //     id:1,
// //     title: "go to school",
// //     completed: true
// //   },
// //   {
// //     id:2,
// //     title: "go to musium",
// //     completed: true
// //   },
// //   {
// //     id:3,
// //     title: "go to shopping",
// //     completed: false
// //   }
// // ]

// // for(let i  in todos){
// //   let todo = todos[i];
// //   if(todo.completed === true){
// //     console.log(i, todo.title)
// //   }
  
// // }