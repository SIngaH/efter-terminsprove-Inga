let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let video = document.querySelector(".video");
let noVideo = document.querySelector(".no-video");
let index = 0;

prev.addEventListener("click", ()=>{
    if(noVideo.classList.contains("hide")){
        index = 1;
    }else{
        index = 0;
    }
    change(index);
})

next.addEventListener("click", ()=>{
    if(noVideo.classList.contains("hide")){
        index = 1;
    }else{
        index = 0;
    }
    change(index);
})

function change(index){
    if(index === 0){
        noVideo.classList.add("hide");
        video.classList.remove("hide");
    }else{
        video.classList.add("hide");
        noVideo.classList.remove("hide");
    }
}