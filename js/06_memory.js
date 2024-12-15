// Stack(primitive) and Heap(Non-primitive)

let myInstaname= "Soumyadip"


let anothername = myInstaname
anothername = "hakkaNoodles"


console.log(anothername);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "soumyadip@google.com"

console.log(userOne.email);
console.log(userTwo.email);