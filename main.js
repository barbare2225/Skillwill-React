function calculate(a,b){
    if(typeof a!=="number"){
        return "შეცდომა მატრიცაში"
    }
    if(typeof  b!=="number"){
        return "შეცდომა მატრიცაში"
    }
    return a+b
    
}

function temperature_from_f_to_c(temperature){
    if(typeof temperature!=="number") return false
    return (temperature-32)/1.8000
}

function calculate2(a,b,operation){
    if(typeof a !== "number") {
        return false
    } if(typeof b !== "number"){
        return false
    } if(operation != "+") {
        return false
    } if(operation != "-") {
        return false
    } if(operation != "*") {
        return false
    } if(operation != "/") {
        return false
    }if(operation == "+") {
        return a+b
    } if(operation == "-") {
        return a-b
    } if(operation == "*") {
        return a*b
    } if(operation == "/") {
        return a/b
    }

}
let c=4543
let d=true
const answer=temperature_from_f_to_c(c)
console.log(answer)