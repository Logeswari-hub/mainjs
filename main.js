let colours = ["red","pink","yellow"];
console.log(colours);
//add
colours[3]="black"
console.log(colours);
//at
console.log(colours.at(-2));
//queue
colours.push("white");
console.log(colours);
colours.shift();
console.log(colours);
colours.unshift("red");
console.log(colours);
//stack
colours.push("green");
console.log(colours);
colours.pop();
console.log(colours);

//for
let arr = ["Apple", "mango", "orange"];
for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}

//new for using of 
let Name =["tharu", "nivi", "nancy"];
for(let Names of Name){
    console.log(Names);
}

//length
let numbers = [];
numbers[12]="three";
console.log(numbers.length);

//multidimensional array
let num=[[1,2,3] ,[4,5,6] ,[7,8,9]];
console.log(num[1][2] );

//multidimensional array using function
let items = [ 
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9], 
  function() { console.log('hello'); }
];
console.log(items[1][0]);
items[3]();

//string
let array =[1,2,3,4];
console.log(array);
console.log(String(array) === '1,2,3,4');