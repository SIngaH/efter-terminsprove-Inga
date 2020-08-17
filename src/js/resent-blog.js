document.addEventListener("DOMContentLoaded", ()=>{
    let recentBlog = document.querySelector(".recent-blog-insert");

    fetch("http://localhost:4000/blog-posts", {
        "method": "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then (function(response){
        return response.json();
    })
    .then (function(result){
        result.forEach(blog => {
            let contentSmaller = blog.content.slice(0, 200);
            recentBlog.innerHTML+=`
                <div>
                    <img src="./assets/images/content-img/blog_full1.jpg" alt=""/>
                    <h3>` + blog.title + `</h3>
                    <p class="pink">` + blog.author + `</p>
                    <p>` + contentSmaller + "..." + `</p>
                </div>
            `;
        });
    });
});