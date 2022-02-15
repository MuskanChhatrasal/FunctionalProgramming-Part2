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

// ------------------------------------------------

// Q8. Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

// Ans8: 
// const arr = ["You", "all", "are", "rockstars"];
// const arrayToObject = (obj, currItem, currIndex)=>({...obj,[currIndex]:currItem});
// console.log(arr.reduce(arrayToObject,{}));

// -----------------------------------------------

// Q9. Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’. 

// Ans9.

// const arr = [
// 	{
// 		name: "Apple"
// 	},
// 	{
// 		name: "Mango"
// 	},
// 	{
// 		name: "Potato"
// 	},
// 	{
// 		name: "Guava"
// 	},
// 	{
// 		name: "Capsicum"
// 	}
// ]

// const addType = obj => obj.name.length>5?{...obj,type:'vegetabels'}:{...obj,type:'fruit'}
// console.log(arr.map(addType));

// -----------------------------------------------

// Q10. Given an array of objects.
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.

// Ans10. 
// const inventory = [
//     {name: 'fans', quantity: 3},
//     {name: 'chimneys', quantity: 0},
//     {name: 'bulbs', quantity: 5},
//     {name: 'stove', quantity: 1}    
//   ];
// Ans10. a
// const allItemsQuanLess2 = obj => obj.quantity<2;
//console.log(inventory.filter(allItemsQuanLess2));

// Ans10. b
// const totalQuantity = (sum,obj) => sum+obj.quantity;
// console.log(inventory.reduce(totalQuantity,0))

// Ans10. c Method1: Using filter
// const quantIsZero = obj => obj.quantity===0;
// console.log(inventory.filter(quantIsZero));

// Ans10. c Method2: Using reduce
// const quantIsZero = (obj,currObj) => currObj.quantity===0?obj=currObj:obj;
// console.log(inventory.reduce(quantIsZero,{}));

// ------------------------------------------------

// Q11. Given an array. Write a function to join all elements of the array with a hyphen in between them.

// Ans11:

// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]
// console.log(arr.join('-'));

// ------------------------------------------------

