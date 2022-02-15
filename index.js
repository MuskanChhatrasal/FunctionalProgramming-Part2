// Q1. Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

// Ans1: 
  // const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
  // const isEven = num => num%2===0? num+1:num;
  // console.log(arr.map(isEven));

// ------------------------------------------------

// Q2. Get the names in an array for only those who have a cycle.

// const family = [
//   {
//     name    : 'Tanay',
//     haveCycle : true
//   },
//   {
//     name     : 'Akanksha',
//     haveCycle : false
//   },
//   {
//     name     : 'Tanvi',
//     haveCycle : true
//   },
// 	{
//     name     : 'Kanak',
//     haveCycle : false
//   }
// ];

// Method1
// const isCycleTrue = obj => obj.haveCycle===true;
// const haveCycleTrue = family.filter(isCycleTrue);
// const haveCycleNames = obj => obj.name;
// console.log(haveCycleTrue.map(haveCycleNames));

// Method2
// const currObj={};
// const reducer = (ifCycle,currObj) => currObj.haveCycle===true?[...ifCycle,currObj.name]:[...ifCycle];
// console.log(family.reduce(reducer,[]));
