let form = document.querySelector(".form");
let errorElement = document.querySelector(".error-message");
let name = document.querySelector(".form__name");
let tableNumber = document.querySelector(".form__table-number");
let date = document.querySelector(".form__date");
let email = document.querySelector(".form__email");
let numberOfGuests = document.querySelector(".form__number-of-guests");
let phoneNumber = document.querySelector(".form__phone_number");
let border = "solid 1px red";
let borderGone = "solid 1px var(--white)";

/* check if empty - prevent default */
form.addEventListener("submit", (e) =>{
    e.preventDefault();    

/*--------------------------Name--------------------------------- */
    if(name.value === "" || name.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "A name is required";
        name.focus();
        name.style.border = border;
        return false;
    }else{
        name.style.border = borderGone;
    }
/*--------------------------Table Number--------------------------------- */
    if(tableNumber.value === "" || tableNumber.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "A table number is required";
        tableNumber.focus();
        tableNumber.style.border = border;
        return false
    }else{
        tableNumber.style.border = borderGone;
    }
    if(isNaN(tableNumber.value) || tableNumber.value < 1 || tableNumber.value > 15){
        errorElement.style.display="block";
        errorElement.innerHTML = "There are 15 tables";
        tableNumber.focus();
        tableNumber.style.border = border;
        return false;
    }else{
        tableNumber.style.border = borderGone;
    }
/*--------------------------Date--------------------------------- */
    if(date.value == "" || date.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "A date is required";
        date.focus();
        date.style.border = border;
        return false;
    }else{
        date.style.border = borderGone;

    }

/*--------------------------Email--------------------------------- */
    const se = /\S+@\S+\.\S+/;    
    if(email.value === "" || email.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "An email is required";
        email.focus();
        email.style.border = border;
        return false;
    }else{
        email.style.border = borderGone;
    }
    if(se.test(email.value) == false){ 
        errorElement.style.display="block";
        errorElement.innerHTML = "Input a valid email address";
        email.focus();	
        email.style.border = border;
        return false;
    }else{
        email.style.border = borderGone;
    }
/*--------------------------Number of guests--------------------------------- */
    if(numberOfGuests.value === "" || numberOfGuests.value == null || numberOfGuests == 0){
        errorElement.style.display="block";
        errorElement.innerHTML = "The number of guests is required";
        numberOfGuests.focus();
        numberOfGuests.style.border = border;
        return false
    }else{
        numberOfGuests.style.border = borderGone;
    }
    if(isNaN(numberOfGuests.value)){
        errorElement.style.display="block";
        errorElement.innerHTML = "The amount of guests should be written in numbers";
        numberOfGuests.focus();
        numberOfGuests.style.border = border;
        return false;
    }else{
        numberOfGuests.style.border = borderGone;
    }
    /* checking if all the guests can fit around the table */
    let tableSize1 = ["1", "2", "4", "6", "7", "9", "11", "12", "14"];
    let tableSize2 = ["3", "8", "13"];
    let tableSize3 = ["5", "10", "15"];

    if(tableSize1.includes(tableNumber.value) && numberOfGuests.value > 4){
        errorElement.style.display="block";
        errorElement.innerHTML = "This table has 4 seats";
        numberOfGuests.focus();
        numberOfGuests.style.border = border;
        return false;
    }else{
        numberOfGuests.style.border = borderGone;
    }
    if(tableSize2.includes(tableNumber.value) && numberOfGuests.value > 6){
        errorElement.style.display="block";
        errorElement.innerHTML = "This table has 6 seats";
        numberOfGuests.focus();
        numberOfGuests.style.border = border;
        return false;
    }else{
        numberOfGuests.style.border = borderGone;
    }
    if(tableSize3.includes(tableNumber.value) && numberOfGuests.value > 8){
        errorElement.style.display="block";
        errorElement.innerHTML = "This table has 8 seats";
        numberOfGuests.focus();
        numberOfGuests.style.border = border;
        return false;
    }else{
        numberOfGuests.style.border = borderGone;
    }

/*--------------------------Phone number--------------------------------- */
    if(phoneNumber.value === "" || phoneNumber.value == null){
        errorElement.style.display="block";
        errorElement.innerHTML = "An phone number is required";
        phoneNumber.focus();
        phoneNumber.style.border = border;
        return false
    }else{
        phoneNumber.style.border = borderGone;
    }
    if(isNaN(phoneNumber.value) || phoneNumber.value.length != 8){
        errorElement.style.display="block";
        errorElement.innerHTML = "Input a valid phone number";
        phoneNumber.focus();
        phoneNumber.style.border = border;
        return false;
    }else{
        phoneNumber.style.border = borderGone;
    }
    errorElement.style.display="block";

    getting(name.value, tableNumber.value, date.value, email.value, numberOfGuests.value, phoneNumber.value);
})

function getting(name, table, date, email, guests, phone){
    fetch("http://localhost:4000/reservations", {
        "method": "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then (function(response){
        return response.json();
    })
    .then (function(result){
        console.log(result)
        if(result == "" || result == null){
            posting(name, table, date, email, guests, phone);
        }else{
            let dateArray = [];
            let tableArray = [];
            for (let index = 0; index < result.length; index++) {
                let dates = result[index].date.includes(date);
                dateArray.push(dates);
                let theTable = result[index].table.includes(table);
                tableArray.push(theTable)
            }
            if(!dateArray.includes(true) || !tableArray.includes(true)){
                errorElement.innerHTML= "Your reservation has been sent!";
                posting(name, table, date, email, guests, phone);
            }else{
                errorElement.innerHTML = "The date and table you have requested is already reserved!"
            }            
        }
    });
}

// post to api
function posting(theName, theTable, theDate, theEmail, theGuests, thePhone){
    console.log("posing")
    let data = {name:theName, table:theTable, date:theDate, email:theEmail, guests:theGuests, phone:thePhone};
    fetch("http://localhost:4000/reservations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        emptyInputs();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function emptyInputs(){
    setTimeout(() => {
        errorElement.style.display="none";
        name.value = "";
        tableNumber.value = "";
        date.value = "";
        email.value = "";
        numberOfGuests.value = "";
        phoneNumber.value = "";
    }, 5000);
}
