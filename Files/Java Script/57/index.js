console.log("Hello Mujtaba Wellcome To Monday");


let a = 1;

// console.log(a+1);
// console.log(a+4);
// console.log(a+3);
// console.log(a+7);

for (let i=0; i<10; i++){
    console.log(a+i);
}
let  obj = {

    name: "Syed Mujtaba ",
    role: "Programmer",
    company: "Code With Mujtaba"
}

// console.log(obj.name);
// console.log(obj.name);
// console.log(obj.company);

for (const key in obj) {
    
    
    const element = obj[key];
    console.log(key, element);
    
}


for (const c of "Syed Mujtaba") {
    console.log(c);
}

// let i=0;
// while (i<6){

//     console.log(i);
//     i++;
// }


let i=0;
do{
    console.log(i);
    i++;

}while(i<=10);


