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
}
