function girlAge(age){

    function isBaalik(){
        return age>18;
    }
    return isBaalik;
}

x = girlAge(19);

if(x()){
    console.log("Is baalik");
}
else{
    console.log("Is NaBaalik");
}

y = girlAge(15);
if(y()){
    console.log("Is baalik");
}
else{
    console.log("Is NaBaalik");
}