// a++;
// console.log(a);

function fun(){
    let a = 1;
    function newfun(){
        a++;
        console.log(a);
    }

    return newfun;
}

f = fun();
f();


