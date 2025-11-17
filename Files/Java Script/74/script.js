let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
// alert ("I am clicked")

// }
// )


button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b> Hmm Changed By Clicked </b> HAHAHHAHAH"

}
)


button.addEventListener("contexmenu", ()=>{
    alert("Hacked By  Click ")

}
)




button.addEventListener("keydown", ()=>{
    console.log("Hacked By  Click ")

}
)