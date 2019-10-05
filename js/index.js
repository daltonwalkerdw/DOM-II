// Your code goes here
let all = document.querySelector("body");
let allNav = document.querySelector("header")
let aTags = document.querySelectorAll("nav a");
let backgroundTags = document.querySelectorAll(".text-content")
let lightMode = document.getElementById("light-mode")
let darkMode = document.getElementById("dark-mode")
let allImg = document.querySelectorAll("img")
let welcome = document.querySelector(".intro h2")
let destination = document.querySelector(".content-pick").querySelectorAll(".destination")
lightMode.style.display = "none"

console.log(destination)
darkMode.addEventListener("click", (e)=>{
  event.preventDefault()
  all.classList.add("allColor")
  darkMode.style.display = "none"
  lightMode.style.display = "inherit"
  document.querySelector("h1").style.color = "black"
  event.stopPropagation()
})

lightMode.addEventListener("click", (e)=>{
    all.classList.remove("allColor")
    darkMode.style.display = "inherit"
    lightMode.style.display = "none"
    event.stopPropagation()
    event.preventDefault()
})

let greenText = all.addEventListener("dblclick", (e) => {
    e.target.style.color = "green"
});

window.addEventListener("load", (e)=>{
    alert("Welcome to Funbus!")
})

backgroundTags.forEach((all)=>{
    all.addEventListener("mouseenter", (e)=>{
    
     e.target.style.backgroundColor = "pink"
    
})
})

backgroundTags.forEach((all)=>{
    all.addEventListener("mouseleave", (e)=>{
    
     e.target.style.backgroundColor = "white"
    
})
})

allImg.forEach((all)=>{
    all.addEventListener("click", (e)=>{
    
     e.target.style.display = "none"
    
})
})


window.addEventListener("load", (e)=>{
    document.querySelector(".intro h2").animate(
        [
            { transform: 'rotate(0) translate3D(-10%, -10%, 0)', color: '#000' },
            { color: '#431236', offset: 0.3},
            { transform: 'rotate(180deg) translate3D(-10%, -10%, 0)', color: '#000' },
            { transform: 'rotate(180deg) translate3D(-10%, -10%, 0)', color: '#000' },
            { transform: 'rotate(0) translate3D(-10%, -10%, 0)', color: '#000' }
        ], {
          duration: 3000,
          iterations: Infinity
        }
      );
      event.stopPropagation()
})

destination.forEach((all)=>{
    all.addEventListener("mouseenter", (e)=>{
    
     e.target.style.backgroundColor = "teal"
     event.stopPropagation()
    
})
})
destination.forEach((all)=>{
    all.addEventListener("mouseleave", (e)=>{
    
     e.target.style.backgroundColor = "white"
     event.stopPropagation()
    
})
})