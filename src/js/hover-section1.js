document.addEventListener("DOMContentLoaded", ()=>{
    let Img1 = document.querySelector(".section1-img1");
    let Img2 = document.querySelector(".section1-img2");
    let Img3 = document.querySelector(".section1-img3");
    let blackBox1 = document.querySelector(".b-box1");
    let blackBox2 = document.querySelector(".b-box2");
    let blackBox3 = document.querySelector(".b-box3");


    Img1.addEventListener("mouseover", ()=>{
        Img1.style.display="none";
        blackBox1.style.display="block";
    });

    Img1.addEventListener("mouseout", ()=>{
        Img1.style.display="block";
        blackBox1.style.display="none";
    });

    Img2.addEventListener("mouseover", ()=>{
        Img2.style.display="none";
        blackBox2.style.display="block";

    });

    Img2.addEventListener("mouseout", ()=>{
        Img2.style.display="block";
        blackBox2.style.display="none";
    });

    Img3.addEventListener("mouseover", ()=>{
        Img3.style.display="none";
        blackBox3.style.display="block";
    });

    Img3.addEventListener("mouseout", ()=>{
        Img3.style.display="block";
        blackBox3.style.display="none";
    });
});