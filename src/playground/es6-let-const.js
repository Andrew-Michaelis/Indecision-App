var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Lektor";
nameLet = "Lussaria";
console.log("nameLet", nameLet);

const nameConst = "Belphagor";
// nameConst = "Mammon";
console.log("nameConst", nameConst);

function getPetName() {
    const petName = "Khepi";
    return petName;
}

const petName = getPetName();
console.log(petName);

//block scoping

var fullName = "Andrew Michaelis";

if(fullName){
    var firstName = fullName.split(" ")[0]; //var works outside the if, let or const will not
    console.log(firstName);
}

console.log(firstName);