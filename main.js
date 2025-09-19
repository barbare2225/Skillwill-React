// 1
function calculate(a,b){
    if(typeof a!=="number"){
        return "შეცდომა მატრიცაში"
    }
    if(typeof  b!=="number"){
        return "შეცდომა მატრიცაში"
    }
    return a+b 
}

// 2
function temperature_from_f_to_c(temperature){
    if(typeof temperature!=="number") return false
    return (temperature-32)/1.8000
}

// 3
function calculate2(a,b,operation){
    if(typeof a !== "number") {
        return false
    } if(typeof b !== "number"){
        return false
    } if(operation == "+") {
        return a+b
    } if(operation == "-") {
        return a-b
    } if(operation == "*") {
        return a*b
    } if(operation == "/") {
        return a/b
    }
    return false
}
