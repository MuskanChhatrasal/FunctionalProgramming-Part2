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

// ------------------------------------------------

// Q3. Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.

// Ans3: 
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// const numLessThan8AndEven = num => num<8 && num%2==0;
// console.log(arr.filter(numLessThan8AndEven));

// ------------------------------------------------

// Q4. Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

// Ans4: 
// const arr = ['eat', 'sleep', 'repeat', 'code'];
// const wordMoreThan5 = word => word.length>5;
// console.log(arr.filter(wordMoreThan5));

// ------------------------------------------------

// Q5. Given an array. Write a function to get the sum of all elements which are greater than 50.

// Ans5: 
// const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];
// const sumOfAllGreaterThan50 = (sum,num)=>num>50?sum+num:sum;
//console.log(arr.reduce(sumOfAllGreaterThan50,0));

// ------------------------------------------------

// Q6. Given an array. Write a function to find the product of all elements which are even.

// Ans6: 
// const arr = [1, 2, 3, 7, 5, 6, 8, 9];
// const productOfAllEven = (prod,num)=>num%2===0?prod*num:prod;
// console.log(arr.reduce(productOfAllEven));

// ------------------------------------------------

// Q7. Given an array of objects. Write a function to find the sum of ages of each person.

// Ans7: 
// const arr = [
// 	{
// 		name: "Jay",
// 		age: 60
// 	},
// 	{
// 		name: "Gloria",
// 		age: 36
// 	},
// 	{
// 		name: "Manny",
// 		age: 16
// 	},
// 	{
// 		name: "Joe",
// 		age: 9
// 	}
// ]

// const sumOfAllAges = (sum,obj) => sum+obj.age;
// console.log(arr.reduce(sumOfAllAges,0));