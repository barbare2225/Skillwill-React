// 1 //
const user1 = [
    {name: 'Temo', age: 25}, 
    {name: 'Lasha', age: 21}, 
    {name: 'Ana', age: 28}
]
function copyUser1(users) {
    let min = 0
    for ( let i = 1; i < 3; i++) {
        if (users[i].age < users[min].age) {
            min = i
        }
    }
    return users[min].name
} 
// console.log(copyUser1(user1))




// 2 //
function randNumber() {
    return parseInt(Math.random() * 6) + 1
}
let a = 0
let b = 0
let trya = 0;
let tryb = 0
while (a !== 3) {
    a = randNumber()
    trya++
}
while (b !== 3) {
    b = randNumber()
    tryb++
}
let winner = ''
if(trya > tryb) {
    winner = "b"
} else if (trya < tryb) {
    winner = "a"
} else {
    winner = "both"
}
// console.log("winner is - " + winner)



// 3 //
const user3 = {
    name: 'Barbare',
    lastName: 'Gelashvili'
}

function copyUser3(user) {
    const newUser = {};
    Object.entries(user).forEach(entry => newUser[entry[0]] = entry[1])
    return newUser
}
// const result = copyUser(user)
// console.log(result)
// user.id = 10
// console.log(user)
// console.log(result)

