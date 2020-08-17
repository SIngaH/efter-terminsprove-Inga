document.addEventListener("DOMContentLoaded", ()=>{
/* Api hentning af events */
    let boxes = document.querySelectorAll(".pink-box");
    let eventsText = document.querySelectorAll(".events-text");

    fetch("http://localhost:4000/events", {
        "method": "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then (function(response){
          return response.json();
      })
      .then (function(result){
          result.forEach(event => {
            let date = new Date(event.eventDate);
            let day = (new Date(event.eventDate)).getDate();
            let month = (new Date(event.eventDate)).getMonth();
            if(month === 0){
                month = "Jan"
            }
            let hours = (new Date(event.eventDate)).getHours();
            let min = (new Date(event.eventDate)).getMinutes();
            let location = event.location;

            let description = event.eventDescription.slice(0, 100) + "...";
            let name = event.eventName;

            inputData(location, month, day, hours, min, description, name);          
          });
      });

      function inputData(location, month, day, hours, min, description, name){
        boxes.forEach(box => {
            box.innerHTML = `
                <p class="events-date">` + day + " " + month + `</p>
                <p class="events-time">` + hours + ":" + min + min + `</p>
                <p class="events-location">` + location + `</p>
            `;
        });
        eventsText.forEach(text=>{
            text.innerHTML = `
                <h3>` + name + `</h3>
                <p>` + description + `</p>
            `;
        });
      }

/* billede gallleri delen */

    let box1 = document.querySelector("#events-of-the-month .box1"); 
    let imgs12 =  document.querySelector(".events-img1-2"); 

    let box2 = document.querySelector("#events-of-the-month .box2");
    let imgs34 =  document.querySelector(".events-img3-4"); 

    let box3 = document.querySelector(".box3");
    let imgs56 =  document.querySelector("#events-of-the-month .events-img5-6"); 
    
    box1.addEventListener("click", ()=>{
        imgs12.classList.remove("hide");
        imgs34.classList.add("hide");
        imgs56.classList.add("hide");
        box1.classList.add("pink");
        box2.classList.remove("pink");
        box3.classList.remove("pink");
    });

    box2.addEventListener("click", ()=>{
        imgs12.classList.add("hide");
        imgs34.classList.remove("hide");
        imgs56.classList.add("hide");
        box1.classList.remove("pink");
        box2.classList.add("pink");
        box3.classList.remove("pink");
    });

    box3.addEventListener("click", ()=>{
        imgs12.classList.add("hide");
        imgs34.classList.add("hide");
        imgs56.classList.remove("hide");
        box1.classList.remove("pink");
        box2.classList.remove("pink");
        box3.classList.add("pink");
    }); 
});