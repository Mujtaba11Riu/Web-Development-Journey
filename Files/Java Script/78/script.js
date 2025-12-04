

let a = prompt("Enter First Number ")

let b = prompt("Enter Second Number ")

// let sum = a + b

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This Is Not Allowed")
}

let sum = parseInt(a) + parseInt(b)

//lets try 


function main() {

    let x = 1;

    try {

        // console.log("The Sum is ", sum)
        console.log("The Sum is ", sum * x)
        return true

    } catch (error) {
        console.log("Error aa gaia bhai ")
        return false
    }

    finally {
        console.log("Files are being closed and db connection is being closed ")
    }

}
//ok

let c = main ()