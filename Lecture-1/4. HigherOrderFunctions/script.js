////////////////////////////////////////////////////////////////////////////////////////
function playMovies(m){
    // console.log(m);
    // console.log(m.toString());
    // m(); // m will always be a function
    let screenTime = 1000;


    if(screenTime<1500){
        m();
    }
    else{
        console.log("Come to watch tomorrow");
    }
}

function dhol(){
    console.log("Playing Dhol movie");
}

let newMovie = playMovies(dhol);



////////////////////////////////////////////////////////////////////////////////////////

// function movies(){

//     function dhol(){
//         console.log("Playing Dhol movie");
//     }

//     return dhol;
// }

// let newMovie = movies();

// console.log(newMovie);
// console.log(newMovie.toString());
// newMovie();

////////////////////////////////////////////////////////////////////////////////////////
