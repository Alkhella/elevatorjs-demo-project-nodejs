
// set server host
elevator.server_host = 'http://localhost:3000/';

// set meta content
elevator.meta_content_url = '/meta-content';


elevator.http_routes([
    {
        method: "GET",
        meta_loader: true,
        content_url: "/components/index",
        component: "#root",
        // preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: ""
    },
    {
        method: "GET",
        meta_loader: true,
        content_url: "/components/about",
        component: "#root",
        // preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "about"
    },
    {
        method: "GET",
        meta_loader: true,
        content_url: "/components/privacy",
        component: "#root",
        // preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "privacy"
    },
    {
        method: "GET",
        meta_loader: true,
        content_url: "/components/contact",
        component: "#root",
        // preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "contact"
    },
]);


elevator.page_headers_content([
    {
        method: "GET",
        content_url: "/components/header",
        component: "#header_load",
        // preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: ""
    },
    {
        method: "GET",
        content_url: "/components/header",
        component: "#header_load",
        // preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "about"
    },
    {
        method: "GET",
        content_url: "/components/header",
        component: "#header_load",
        // preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "privacy"
    },
    {
        method: "GET",
        content_url: "/components/header",
        component: "#header_load",
        // preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "contact"
    },
])

// rendering
elevator.__render();