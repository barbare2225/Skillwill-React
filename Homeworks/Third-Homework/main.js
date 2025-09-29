// 1 //
function calculator (...n){
    const [a, b, ...others] = n
    let n1 = a + b
    let n2 = 1
    for (const num of others){
        n2 *= num
    }
    return [n1, n2]
}
// const result = calculator(2, 3, 2, 4)
// console.log(`result ${result}`)


// 2 //
const user = {
    banks: [
        {},
        {},
        {
            address: {
                city: 'tbilisi'
            }
        }
    ]
}
function object(user){
    const { banks: [, , {address: {city} = {}} = {}] = [] } = {} = user
    return city
}
//console.log(object(user))


// 3 //
const obj = {
    name: 'Barbare',
    lastname: 'Gelashvili',
    address: {
        street: 'dsafda',
        city: 'Tbilisi'
    },
    friends: ['dsdf','fds','Wav','fd']
}
function func(obj){
    const obj2 = {
        ...obj,
        address: {...obj.address},
        friends: [...obj.friends]
    }
    return obj2
}
// const result = func(obj)
// obj.friends[0]='dssa'
// console.log(obj.friends[0])
// console.log(result.friends[0])
