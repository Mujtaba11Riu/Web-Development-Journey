

let a = prompt("Enter First Number ")

let b = prompt("Enter Second Number ")

// let sum = a + b

if(isNaN (a) || isNaN(b)){
    throw SyntaxError("Sorry This Is Not Allowed")
}

let sum = parseInt(a) + parseInt(b)

console.log("The Sum is ", sum)






