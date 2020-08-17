let burger = document.querySelector(".dropdown");
let ul = document.querySelector("nav ul");
burger.addEventListener("click", ()=>{
    if(ul.style.display==="block"){
        ul.style.display="none"
    }else{
        ul.style.display="block"
    }
});