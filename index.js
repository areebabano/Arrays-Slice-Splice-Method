"use strict";
// Arrays slice Method 
// let Fruits: string[] = ["Mango","Orange","Grapes","Cheery","Banana"]
// console.log(Fruits); // print original array
// console.log(Fruits.slice(0 , 3))
// console.log(Fruits);
// Arrays splice Method 
let programming = ["JS", "TS", "Next.js", "Python", "HTML"];
console.log(programming);
// console.log(programming.splice(1,1,"React")); // TS
programming.splice(1, 1, "React");
console.log(programming);
programming.splice(1, 0, "CSS", "TS");
console.log(programming);
