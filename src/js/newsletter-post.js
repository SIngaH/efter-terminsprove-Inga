
document.querySelector("#button").addEventListener("click", ()=>{
    let email = document.querySelector("#newsletter-email").value;
    console.log(email);
    post(email);

})
function post(theEmail){
    fetch("http://localhost:4000/newsletters", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify({
            email:theEmail
        })
    })
    .catch(error => console.error(error))
}