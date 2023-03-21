function parivaar(country,pincode){
    console.log(this);
    console.log("Country: ",country,", Pincode Hai: ",pincode);
}


let family1 = {
    name: 'Yadav',
    home:'Delhi'
};

let family2 = {
    name: 'Khetrapal',
    home: 'BANGLORE'
}


let family3 = {
    name: 'GUPTA',
    home: 'PUNE '
}

// call 
// functionName.call(obj);// Function ke andar this will
// point to obj
// parivaar.call(family3,"Bangladesh",110029);

// apply
let data = ["Bangladesh",110029];
// parivaar.apply(family3,data);

// bind
// let newParivaar = parivaar.bind(family1);

// console.log("Let us run the function");
// // newParivaar(...data);
// newParivaar("Bangladesh",110029);

let newParivaar = parivaar.bind(family1,"India",110029);

newParivaar();