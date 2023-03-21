let obj = {
    a: 10,
    b: function(){
        console.log("this: ",this);
        this.c = "Adding another value";
    }
}

// console.log(this);
obj.b();
console.log(obj);

// function of(){
//     function inf(){
//         function imf(){
//             console.log(this);
//         }
//         return imf;
//     }
//     return inf;
// }

// x = of();
// y = x();
// y();// this == window in this case