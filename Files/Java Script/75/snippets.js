// alert('Mujtaba Zaidi');


console.log('This is Promise')


// console.log('Mujtaba')
  
let prom1 = new Promise ((resolve, reject) => {

    let a = Math.random();

    if (a<0.5){
    
        reject("No random number was not supporting you")
    
    }
 

    else {
         setTimeout(() => {
        console.log("Yes I am in ")
        resolve("Mujtaba ")
    }, 3000);
    }

   

})






  
let prom2 = new Promise ((resolve, reject) => {

    let a = Math.random();

    if (a<0.5){
    
        reject("No random number was not supporting you 2")
    
    }
 

    else {
         setTimeout(() => {
        console.log("Yes I am in 2 ")
        resolve("Mujtaba 2 ")
    }, 1000);
    }

   

})



let p3 = Promise.race([prom1, prom2])     // all, allSelected,  race, 
p3.then((a) => {
    console.log(a)
}).catch(err=>{
    console.log(err)
})