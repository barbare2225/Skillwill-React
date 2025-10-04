
// 1 //
function f1(string, valueToReplace, valueToReplaceWith){
    let index = string.indexOf(valueToReplace)
    let newString = string
    .substr(0, index) + valueToReplaceWith + string.substr(index + valueToReplace.length)
    return newString
}
// console.log(f1("i love khinkali", "i","I, We"))



// 2 //
function f2(string){
    const words = string.split(' ')
    const capitalizedWords = words
    .map(word => word.charAt(0).toUpperCase()+word.slice(1))
    return capitalizedWords.join(' ')
}
// console.log(f2("dsjfnasdf wshbf dskhfbsda wewekfjbsd"))




// 3 //
const users = [
    {name: 'Lasha', age: 30},
    {name: 'Saba', age: 20}
]
function f3(arr){
    return arr.slice().sort((a, b) => a.age - b.age)
}
// console.log(f3(users))
