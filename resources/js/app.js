import FirebaseConfig from "./firebase/FirebaseConfig";
import * as firebase from "firebase";
import FirebaseRemoteConfigInit from "./firebase/FirebaseRemoteConfigInit";

require('./bootstrap');

firebase.initializeApp(FirebaseConfig.get());

if(document.getElementById('write-page')) {
    import('./write/Write').then(module => {
        const Write = module.default;
        // const write = new Write();
        if (blog === undefined) {
            new Write()
        } else {
            new Write(blog)
        }
    })
} else if(document.getElementById('blogs-page')) {
    import('./blogs/blogs')
} else if (document.getElementById('index-page')) {
    import('./ui/visitors/indexpage/IndexPage').then((module) => {
        const IndexPage = module.default;
        new IndexPage()
    })
}

if (document.querySelector('.about-author #about-renee')) {
    import('./ui/visitors/sidebar/SideBar')
        .then(module => {
            const SideBar = module.default;
            new SideBar(FirebaseRemoteConfigInit.initAndGet(firebase))
        })
}

if (document.querySelector('.like-blog')) {
    import('./ui/visitors/like/LikeView').then(module => {
        module.setupLikeAnchors();
        module.colorFillLikedIconForLikedBlogs();
    })
}
