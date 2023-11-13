// // {
//   var a = 10; //var is function scoped can be used anywhere,wheras let is a block scoped it can be ued only in the block.

//   console.log(a);
// }
// console.log(a);

// class test {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   addition() {
//     console.log("hello world!");
//     console.log(this.num1 + this.num2);
//   }
// }
// let sum = new test(12, 23);
// sum.addition();

// let person = {
//   name: "john",
//   age: 20,
//   college: "the oxford college of enginering",
// };

// console.log(person);
/*v cannot access the varialbes without the refernce
console.log(age);*/
// console.log(person.name);

//v can violate the above rule ,by using deconstructing
// const { name, age, college } = person;
// console.log(name);
// console.log(age);
// console.log(college);

// let arr1 = [1020, 30, 404, 0, -94];
// arr1.map((element) => console.log(element));

// let arr2 = arr1.map((element) => element / 2);
// console.log(arr2);

//filter
let arr3 = [4, 5, 6, 999, 778, 65];
let filtered = arr3.filter((a) => a >= 100);
filtered.map((element) => console.log(element));
