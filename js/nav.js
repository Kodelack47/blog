const navMenu = [
    {
        name: "Home",
        link: "index.html",
        class: "nav-item"
    },
    {
        name: "Login",
        link: "login.html",
        class: "nav-item"
    },

    {
        name: "Posts",
        link: "index.html",
        class: "nav-item"
    },
    {
        name: "Register",
        link: "registration.html",
        class: "nav-item"
    },
    {
        name: "Profile",
        link: "profile.html",
        class: "nav-item"
    },

]





document.addEventListener("DOMContentLoaded", () => {
    const image = document.createElement("img");
    image.src = "banner.jpg";
    image.alt = "Banner Image";
    const banner = document.createElement("div")
    banner.classList.add("banner");
    banner.appendChild(image);
    document.body.prepend(banner);




    const nav = document.createElement("nav")
    nav.classList.add("navbar")
    function navLink(item) {

        const navSublist = document.createElement('li');
        navSublist.classList.add(item.class)
        const link = document.createElement("a");

        link.innerHTML = item.name;

        link.href = item.link

        // navSublist.classList.add(item.class);
        navList.classList.add('navbar-nav');

        navSublist.appendChild(link);

        return navSublist
    }




    const navList = document.createElement("ul")

    navMenu.forEach((item) => {

        navList.appendChild(navLink(item));

    });
    nav.appendChild(navList);
    document.body.appendChild(nav);
    let mainContent = document.querySelector(".main-content")
    document.body.insertBefore(nav, mainContent)


    //    current === "home" ? "active" : ""
    //    current === "mountain" ? "active" : ""
    //    current === "park" ? "active" : ""



    const footer = document.createElement("footer")
    footer.id = "footer"
    const year = document.createElement('span')
    year.id = 'year'

    footer.appendChild(year);

    const copyright = document.createTextNode(' \u00A9 Presented by . All right reserved.')
    footer.appendChild(copyright);

    document.body.appendChild(footer);
    const currentYear = new Date().getFullYear();

    document.getElementById('year').textContent = currentYear


})

// Add an event listener to the window to execute the function when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    // Get all the anchor elements inside the navbar
    const navbarLinks = document.querySelectorAll('.navbar a');
  
    // Add a click event listener to each navbar link
    navbarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        // Remove the 'active' class from all navbar links
        navbarLinks.forEach(link => link.classList.remove('active'));
  
        // Add the 'active' class to the clicked link
        event.target.classList.add('active');
      });
    });
  });