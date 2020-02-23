import FoldImageElement from "./FoldImageElement";

for (let i = 0; i < 4; i++) {
    //@ts-ignore
    if (foldImages[i] !== undefined)
        //@ts-ignore
        new FoldImageElement(foldImages[i]);
    else
        new FoldImageElement({id: i+1, filename: 'blog-image-placeholder.png'})
}
