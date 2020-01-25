import FirebaseConfig from "./firebase/FirebaseConfig";
import * as firebase from "firebase";
import FirebaseRemoteConfigInit from "./firebase/FirebaseRemoteConfigInit";
// import IndexPage from "./ui/visitors/IndexPage";

require('./bootstrap');

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
    console.log('This is amazing grace');
    firebase.initializeApp(FirebaseConfig.get());
    const remoteConfig = FirebaseRemoteConfigInit.initAndGet(firebase);
    import('./ui/visitors/indexpage/IndexPage').then((module) => {
        const IndexPage = module.default;
        new IndexPage(remoteConfig)
    })
}
