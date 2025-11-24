

//  async function getData() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)

//         }, 3500)
//     })

// }

async function getData() {

    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') //https://jsonplaceholder.typicode.com/
    


     let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })


    let data = await x.json()

    return data
}




async function main () {

console.log(" Loading Modules")
 
console.log("Do Something Else")

console.log(" Load Data  ")

let data = await  getData()

  console.log(data);
console.log(" Data  ")


console.log(" Process Data  ")


console.log(" Task 2 ")

}

main()

// data.then((v) => {

//     console.log(" Data  ")


//     console.log(" Process Data  ")


//     console.log(" Task 2 ")

// })

 
// settle means resolve or reject 

// resolve means promise has settled successfully 

// reject means promise has not successfully