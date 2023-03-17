////////////////////////////////////////////////////////////////////////////////////////

let x = 100;
function helloWorld(){
    console.log(x); // Error you cannot use x before initialization

    let x = 10;

    if(x>5){
        console.log("Inside Function",x);  // 10
    }
    else{
        console.log("We are inside else");
    }

}

helloWorld(); 

console.log(x); // 100

////////////////////////////////////////////////////////////////////////////////////////

// let x = 100;
// function helloWorld(){
//     let x = 10;

//     if(x>5){
//         console.log("Inside Function",x); 
//     }
//     else{
//         console.log("We are inside else");
//     }

// }

// helloWorld(); 

// console.log(x); 

////////////////////////////////////////////////////////////////////////////////////////


// function helloWorld(){
//     x = 10;

//     if(x>5){
//         console.log(x);
//     }
//     else{
//         console.log("We are inside else");
//     }

// }

// helloWorld(); // 10


////////////////////////////////////////////////////////////////////////////////////////

// function helloWorld(){
//     let x = 10;

//     if(x>5){
//         console.log(x);
//     }
//     else{
//         console.log("We are inside else");
//     }

// }

// helloWorld();

////////////////////////////////////////////////////////////////////////////////////////