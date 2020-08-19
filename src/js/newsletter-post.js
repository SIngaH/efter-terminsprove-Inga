let form = document.querySelector("#form");
let email = document.querySelector("#newsletter-email");
let errorMessage = document.querySelector("#error-message");
form.addEventListener("submit", (e)=>{
    e.preventDefault();    
/*--------------------------Email--------------------------------- */
    const se = /\S+@\S+\.\S+/;    
    if(email.value === "" || email.value == null){
        errorMessage.style.display="block";
        errorMessage.innerHTML = "You need to give us an email address";
        email.focus();
        return false;
    }
    if(se.test(email.value) == false){ 
        errorMessage.style.display="block";
        errorMessage.innerHTML = "You need to give us a valid email address";
        email.focus();		
        return false;
    }
    post(email.value);
    errorMessage.style.display="block";
    errorMessage.innerHTML= "Your email has been sent!";
    setTimeout(() => {
        errorMessage.style.display="none"; 
    }, 5000);
})


function post(theEmail){
    let data = {email:theEmail};
    console.log(data);
    fetch("http://localhost:4000/newsletters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}