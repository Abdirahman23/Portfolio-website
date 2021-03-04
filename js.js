let nav = document.querySelector(".nav")
let menu = document.querySelector(".open")
let close = document.querySelector(".close")

console.log(close)

function show(){
    nav.classList.add("show")
}

menu.addEventListener("click" , show)
close.addEventListener("click" , hide)


function hide(){
    nav.classList.remove("show")
}

let x= 20


// see more button

let see = document.querySelector(".see-more")
let items = document.querySelectorAll(".item-8,.item-7,.item-6,.item-5,.item-4")
console.log(items)

function port(){
    items.forEach(item=> item.classList.toggle("see"))
}


see.addEventListener("click", port)