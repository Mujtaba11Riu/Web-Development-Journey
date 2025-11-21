console.log("Mujtaba is Hacker ")

console.log("Mujtaba is Mental Pro Max ")


setTimeout(() => {
   console.log("I am inside settimeout") 
}, 2000);


setTimeout(() => {
   console.log("I am inside Billionaire") 
}, 4000);


console.log("The End")






const fn = () => {
  console.log( " Nothing ")
}

const callback = (arg, fn ) => {
    console.log(arg)
    fn()
}


const loadScript = (src, callback ) => {
  document.createElement("script");
  screen.src=src;
  screen.onload = callback("Zaidi" , fn)
    document.head.appened(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )