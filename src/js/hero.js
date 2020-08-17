document.addEventListener("DOMContentLoaded", ()=>{
    let heroImg = document.querySelector(".hero-img");
    let loader = document.querySelector(".loader");
    let header = document.querySelector("header");
    let index = 0;

    setInterval(callBack, 2000);

    function callBack(){
        if(index === 0){
            header.style.background="url('../../assets/images/bg/header_bg_2.jpg')";
            header.style.backgroundPosition="center";
            loader.classList.add("header-hide");
            heroImg.classList.remove("header-hide");
            index ++;
        }else if(index === 1){
            header.style.background="none";
            loader.classList.remove("header-hide");
            heroImg.classList.add("header-hide");
            index ++;
        }else if(index === 2){
            header.style.background="url('../../assets/images/bg/header_bg_1.jpg')";
            header.style.backgroundPosition="center";
            loader.classList.add("header-hide");
            heroImg.classList.remove("header-hide");
            index ++;
        }else{
            header.style.background="none";
            loader.classList.remove("header-hide");
            heroImg.classList.add("header-hide");
            index = 0;
        }
    }
});