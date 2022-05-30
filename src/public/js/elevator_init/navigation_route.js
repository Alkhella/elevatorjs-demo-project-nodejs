
var nav_link = document.querySelectorAll(".nav-link");

nav_link.forEach(element=>{
    element.addEventListener("click", (route)=>{
        route.preventDefault();
        let http_url = element.getAttribute("href");
        let component = "";
        switch (http_url) {
            case "/":
                component = "/components/index"
                break;
            case "/about":
                component = "/components/about"
                break;
            case "/privacy":
                component = "/components/privacy"
                break;
            case "/contact":
                component = "/components/contact"
                break;
            default:
                break;
        }
        elevator.route({
            method: "GET",
            meta_loader: true,
            content_url: component,
            component: "#root",
            // preloader: 'loading...',
            error_handler: 'error',
            http_url_change: true,
            http_url: http_url
         });
    })
})