function wakeDog(dogName, dogBreed) {
    let new_string = `Wake ${dogName} the ${dogBreed}`;
    return new_string
}

function leashDog(dogName, dogBreed) {
    let new_string = `Leash ${dogName} the ${dogBreed}`;
    return new_string 
}

function walkToPark(dogName, dogBreed) {
    let new_string = `Walk to the park with ${dogName} the ${dogBreed}`;
    return new_string 
}

function throwFrisbee(dogName, dogBreed) {
    let new_string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return new_string 
}

function walkHome(dogName, dogBreed) {
    let new_string = `Walk home with ${dogName} the ${dogBreed}`;
    return new_string 
}

function unleashDog(dogName, dogBreed) {
    let new_string = `Unleash ${dogName} the ${dogBreed}`;
    return new_string 
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const new_array = []
    for(let i = 0; i < routine.length; i++) {
        new_array.push(routine[i](dogName, dogBreed));
    }
    return new_array;
}