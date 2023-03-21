function fun(){
    function friends(){
        console.log("We are friends now");
    }

    function hello(){
        friends();
    }
    
    return hello;
}

fun()();

// function outerFun(){
//     let a = 1;
//     function innerFun(){
//         a++;
//         function innerMostFun(){
//             a++;
//             console.log(a);
//         }
//         return innerMostFun;
//     }
//     return innerFun;
// }

// x = outerFun();

// x1 = x();
// x1();
// x1();

// x2 = x();
// x2();
// x2();