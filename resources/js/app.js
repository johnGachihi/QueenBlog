require('./bootstrap');

if(document.getElementById('write-page')) {
    import('./write').then(res => {
        console.log('ble ble')
    })
} else if(document.getElementById('blogs-page')) {
    import('./blogs/blogs')
}
