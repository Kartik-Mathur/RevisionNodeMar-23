// Scopes
hello();

function hello(){
    console.log(x); // undefined

    if(false){
        var x;
        x = 10;
        console.log(x); // 10
    }

    console.log(x); // 10
}

// hello();



// function hello(){
//     var x;

//     console.log("Inside Hello");
// }

// hello();

// console.log(x);
