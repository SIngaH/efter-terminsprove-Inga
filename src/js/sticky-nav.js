document.addEventListener("DOMContentLoaded", ()=>{
    window.onscroll = function() {myFunction()};

    let navbar = document.querySelector("#nav");
    let sticky = navbar.offsetTop;
    // element.offsetTop is the number of pixels from the top of the closest relatively positioned parent element.

    let contactSiteMove = document.querySelector("#contact-us");
    let bookSiteMove = document.querySelector("#tables");

    function myFunction() {
        /* the first line is about when it becomes sticky (when you have scrolled to the top of the sticky element) */
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            if(window.location.href.includes("contact")){
                contactSiteMove.style.paddingTop ="10%"
            }else if(window.location.href.includes("book")){
                bookSiteMove.style.paddingTop ="7.5%"
            }
        } else {
            navbar.classList.remove("sticky");
        }
    }
});