let obj = {
    a: "Hello",
    b: 10,
    c: true,
    " ": "Space",
    "": "Empty String"
};

// console.log(obj);

// console.log(obj.a);
// console.log(obj['a']);
// console.log(obj[' ']);
// console.log(obj['']);

for (let i in obj) { // Keys par iterate krne mei help krega
    // console.log(i);
    console.log(obj[i]);
}

let arr = [1, 2, 3, "Hello World", true];
arr[10] = "Adding at 10th Index";

console.log(arr);

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

