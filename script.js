// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Navbar content
    var navbarBrandText = "Solar TCR";
    var navLinks = [
        { text: "Home", href: "#" },
        { text: "Listings", href: "#" },
        { text: "Connect Wallet", href: "#" },
        { text: "Why Us", href: "#" },
        { text: "Join Us", href: "#", className: "btn btn-primary text-white tombol" }
    ];

    // Jumbotron content
    var jumbotronTitle = "Allowing individuals and organizations to<span> invest</span> <br>in clean<span> energy</span> initiatives";
    var jumbotronBtnText = "View Projects";

    // Info panel content
    var infoPanelItems = [
        { imgUrl: "img/employee.png", title: "24 Hours", description: "Empowering you around the clock, every hour, every day!" },
        { imgUrl: "img/hires.png", title: "Wallet", description: "Connect your wallet and unlock endless possibilities!" },
        { imgUrl: "img/security.png", title: "Security", description: "Security is our top priority!" }
    ];

    // Workingspace content
    var workingspaceImgUrl = "img/workingspace.png";
    var workingspaceTitle = "Empowering<span> Clean</span> Energy <span>Innovation</span>";
    var workingspaceDescription = "At Solar TCR, we're on a mission to revolutionize the renewable energy landscape. Our platform connects visionary developers with forward-thinking investors, enabling them to spearhead clean energy initiatives that power a sustainable future.";
    var workingspaceBtnText = "Gallery";

    // Testimonial content
    var testimonialQuote = "From solar farms to innovative technology solutions, our curated registry showcases cutting-edge projects poised to make a lasting impact";
    var testimonialAuthorName = "Anele Twala";
    var testimonialAuthorRole = "Blockchain Developer";

    // Testimonial images
    var testimonialImgUrls = ["img/img1.png", "img/img2.jpeg", "img/img3.png"];
    var testimonialMainImgUrl = "img/img2.jpeg";

    // Navbar
    var navbar = document.querySelector(".navbar");
    var navbarContent = document.createElement("div");
    navbarContent.className = "container";
    navbar.appendChild(navbarContent);

    var navbarBrand = document.createElement("a");
    navbarBrand.className = "navbar-brand";
    navbarBrand.href = "#";
    navbarBrand.innerHTML = navbarBrandText;
    navbarContent.appendChild(navbarBrand);

    var navbarToggleBtn = document.createElement("button");
    navbarToggleBtn.className = "navbar-toggler";
    navbarToggleBtn.type = "button";
    navbarToggleBtn.setAttribute("data-toggle", "collapse");
    navbarToggleBtn.setAttribute("data-target", "#navbarNavAltMarkup");
    navbarToggleBtn.setAttribute("aria-controls", "navbarNavAltMarkup");
    navbarToggleBtn.setAttribute("aria-expanded", "false");
    navbarToggleBtn.setAttribute("aria-label", "Toggle navigation");
    navbarToggleBtn.innerHTML = '<span class="navbar-toggler-icon"></span>';
    navbarContent.appendChild(navbarToggleBtn);

    var navbarCollapse = document.createElement("div");
    navbarCollapse.className = "collapse navbar-collapse";
    navbarCollapse.id = "navbarNavAltMarkup";
    navbarContent.appendChild(navbarCollapse);

    var navbarNav = document.createElement("div");
    navbarNav.className = "navbar-nav ml-auto";
    navbarCollapse.appendChild(navbarNav);

    navLinks.forEach(function(navLink) {
        var link = document.createElement("a");
        link.className = "nav-item nav-link";
        link.href = navLink.href;
        link.textContent = navLink.text;
        navbarNav.appendChild(link);
    });

    // Jumbotron
    var jumbotron = document.querySelector(".jumbotron");
    var jumbotronContainer = jumbotron.querySelector(".container");
    var jumbotronTitleEl = document.createElement("h1");
    jumbotronTitleEl.className = "display-4";
    jumbotronTitleEl.innerHTML = jumbotronTitle;
    jumbotronContainer.insertBefore(jumbotronTitleEl, jumbotronContainer.firstChild);

    var jumbotronBtn = jumbotronContainer.querySelector("a.btn");
    jumbotronBtn.textContent = jumbotronBtnText;

    // Info panel
    var infoPanel = document.querySelector(".info-panel");
    var infoPanelRows = infoPanel.querySelectorAll(".row");
    infoPanelItems.forEach(function(item, index) {
        var col = infoPanelRows[Math.floor(index / 3)].appendChild(document.createElement("div"));
        col.className = "col-sm";
        col.innerHTML = '<img src="' + item.imgUrl + '" alt="' + item.title + '" class="img-fluid float-left">' +
            '<h4>' + item.title + '</h4>' +
            '<p>' + item.description + '</p>';
    });

    // Workingspace
    var workingspace = document.querySelector(".workingspace");
    var workingspaceImgs = workingspace.querySelectorAll("img");
    workingspaceImgs[0].src = workingspaceImgUrl;
    workingspaceImgs[1].src = testimonialMainImgUrl;

    var workingspaceTitleEl = workingspace.querySelector("h2");
    workingspaceTitleEl.innerHTML = workingspaceTitle;

    var workingspaceDescriptionEl = workingspace.querySelector("p");
    workingspaceDescriptionEl.innerHTML = workingspaceDescription;

    var workingspaceBtn = workingspace.querySelector("a.btn");
    workingspaceBtn.textContent = workingspaceBtnText;

    // Testimonial
    var testimonial = document.querySelector(".testimonial");
    var testimonialQuoteEl = testimonial.querySelector("p");
    testimonialQuoteEl.textContent = testimonialQuote;

    var testimonialAuthorNameEl = testimonial.querySelector("h5");
    testimonialAuthorNameEl.textContent = testimonialAuthorName;

    var testimonialAuthorRoleEl = testimonial.querySelector("p");
    testimonialAuthorRoleEl.textContent = testimonialAuthorRole;

    var testimonialImgs = testimonial.querySelectorAll("img");
    testimonialImgs.forEach(function(img, index) {
        img.src = testimonialImgUrls[index];
    });
});
