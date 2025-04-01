document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    
    const blogContainer = document.querySelector(".blog-posts");
    const loadMoreBtn = document.getElementById("load-more");

    loadMoreBtn.addEventListener("click", () => {
        const post = document.createElement("div");
        post.classList.add("blog-post");
        post.innerHTML = `
            <h3>New Blog Post</h3>
            <p>This is a new post loaded dynamically.</p>
        `;
        blogContainer.appendChild(post);
    });

    
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("form-message").textContent = "Message Sent Successfully!";
    });
});