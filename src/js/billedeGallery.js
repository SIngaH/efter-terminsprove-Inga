document.addEventListener("DOMContentLoaded", ()=>{ 
    let insertImgs = document.querySelector(".billede-gallery");
    let insertImgs2 = document.querySelector(".billede-gallery2");

    fetch("http://localhost:4000/assets", {
        "method": "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then (function(response){
        return response.json();
    })
    .then (function(result){
        let shorterResult = result.slice(0, 6);
        let shorterResult2 = result.slice(6, 12);

        shorterResult.forEach(img => { 
                insertImgs.innerHTML+=`
                    <img src="` + img.url + `" alt="` + img.name + `"/>
                `;
        });
        shorterResult2.forEach(img => { 
            insertImgs2.innerHTML+=`
            <img src="` + img.url + `" alt="` + img.name + `"/>
        `;
        });
    })
    .catch(error => console.error(error))
});
