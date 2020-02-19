require('./bootstrap');

if (document.getElementById('write-page')) {
    import('./write/Write').then(module => {
        const Write = module.default;
        // const write = new Write();
        if (blog === undefined) {
            new Write()
        } else {
            new Write(blog)
        }
    })
} else if (document.getElementById('blogs-page')) {
    import('./blogs/blogs')
} else if (document.getElementById('index-page')) {
    import('./ui/visitors/indexpage/IndexPage').then((module) => {
        const IndexPage = module.default;
        new IndexPage()
    })
} else if (document.getElementById('categories-page')) {
    import('./ui/visitors/categoriespage/categoriesPage')
} else if (document.getElementById('contact-page')) {
    import('./ui/visitors/contactpage/contact')
} else if (document.getElementById('instagram-auth-page')) {
    import('./ui/renee/instagram-auth-page/InstagramAuthPage')
}


if (document.querySelector('.like-blog')) {
    import('./ui/visitors/like/LikeView').then(module => {
        module.setupLikeAnchors();
        module.colorFillLikedIconForLikedBlogs();
    })
}

if (document.querySelector('.share-blog')) {
    import('./ui/visitors/share/share').then(module => {
        // module.setupShareAnchors();
        const Share = module.Share;
        new Share().setupShareAnchors();
    })
}

if (document.getElementById('logout')) {
    import('./utils/logout').then(module => {
        document.getElementById('logout').addEventListener('click', ev => {
            module.logout()
        })
    })
}

if (document.getElementById('renee')) {
    import('./ui/renee/edit-aboutme/editAboutMeSideName');
    import('./ui/renee/edit-aboutme/editaboutmeside');
    import('./ui/renee/edit-aboutme/editAboutMeTitle');
    import('./ui/renee/edit-aboutme/AboutMeImage');

    if (document.getElementById('about-me-page')) {
        import('./ui/renee/edit-aboutme/AboutMeArticle');
    }
}

if (document.getElementById('div')) {
    import('./ui/renee/AccessBackend');
}

if (document.getElementById('instagram')) {
    import('./ui/visitors/instagram/InstagramMedia');
}
