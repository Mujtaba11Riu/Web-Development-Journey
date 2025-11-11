let a = [2, 4, 8, 16, 32 ]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log (element)
// }

// a.forEach(e=> {
//     console.log(value, index, arr)


// // });
// let obj = {
//     a:1,
//     b:2,
//     c:3,
// }

// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
//     const element = obj[key];
//     console.log(element)
    
// }

for (const iterator of a) {
    console.log(iterator)
}