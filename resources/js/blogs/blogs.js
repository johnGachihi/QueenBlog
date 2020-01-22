const appUrl = document.querySelector('meta[name="base-url"]').getAttribute('content');

const draftBlogsTabHeader = document.getElementById('draft-blogs-tab-header');
const publishedBlogsTabHeader = document.getElementById('published-blogs-tab-header');

let currentTab;

draftBlogsTabHeader.addEventListener('click', e => {
    if (currentTab !== "drafts") {
        publishedBlogsTabHeader.classList.remove('active');
        draftBlogsTabHeader.classList.add('active');
        currentTab = 'drafts';
        showDraftBlogs();
    }
});

publishedBlogsTabHeader.addEventListener('click', e => {
    if (currentTab !== "published") {
        draftBlogsTabHeader.classList.remove('active');
        publishedBlogsTabHeader.classList.add('active');
        currentTab = 'published';
        showPublishedBlogs();
    }
});

const blogsContainer = document.getElementById('blogs-container');

function showDraftBlogs() {
    emptyBlogsContainer();

    if (draftBlogs.length < 1) {
        blogsContainer.innerText = "No draft blogs."
    }

    for (let blog of draftBlogs) {
        blogsContainer.appendChild(blogHtml(blog));
    }
}

function showPublishedBlogs() {
    emptyBlogsContainer();

    if (publishedBlogs.length < 1) {
        blogsContainer.innerText = "No published blogs."
    }

    for (let blog of publishedBlogs) {
        blogsContainer.appendChild(blogHtml(blog))
    }
}


function emptyBlogsContainer() {
    blogsContainer.innerText = ''
}

function blogHtml(blog) {
    const div = document.createElement('div');
    const blogContentToDisplay = getBlogContentToDisplay(blog['content']);
    const blogImageToShow = getBlogImageToShow(blog['main_image_filename']);
    div.innerHTML = `
        <a href="${appUrl}/only/juli/blog/${blog.id}" style="text-decoration: none; color: inherit">
            <div class="d-flex blog-entry">
                <div>
                    <img class="blog-entry-img" src="${blogImageToShow}" width="100px"/>
                </div>
                <div class="flex-grow-1 d-flex flex-column ml-4">
                    <span class="h3 blog-entry-title" style="display: block; text-overflow: ellipsis; word-wrap: break-word; overflow: hidden; max-height: 60px; line-height: 30px;">${getBlogTitleToShow(blog['title'])}</span>
                    <span style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">${blogContentToDisplay}</span>
                </div>
            </div>
        </a>

    `.trim();

    return div.firstChild
}

function getBlogContentToDisplay(blogContent) {
    const div = document.createElement('div');
    div.innerHTML = blogContent.trim();
    const firstParagraphEl = getFirstParagraphElement(div.childNodes);
    if(firstParagraphEl !== undefined) {
        return getFittingBlogContentSize(firstParagraphEl.innerText);
    } else {
        return 'No content';
    }
}

function getFirstParagraphElement(elements = NodeList) {
    const nodeListArray = Array.from(elements);
    let firstParagraphEl;
    for (let node of nodeListArray) {
        if (node instanceof HTMLParagraphElement) {
            firstParagraphEl = node;
            break;
        }
    }
    return firstParagraphEl;
}

function getFittingBlogContentSize(blogContentString) {
    let fittingBlogContentText;
    if (blogContentString.length > 100) {
        fittingBlogContentText = blogContentString.slice(0, 100).trim();
        fittingBlogContentText += '...'
    } else {
        fittingBlogContentText = blogContentString
    }
    return fittingBlogContentText;
}

function getBlogImageToShow(blogImageName) {
    const assetUrl = document.querySelector('meta[name="asset-url"]').getAttribute('content');
    if (blogImageName == null) {
        console.log('blogImage', blogImageName);
        return `${assetUrl}/storage/blog-image-placeholder.png`
    } else {
        return `${assetUrl}storage/blog-main-images/${blogImageName}`
    }
}

function getBlogTitleToShow(blogTitle) {
    if (blogTitle != null) {
        return blogTitle;
    } else {
        return '';
    }
}

$(() => {
    draftBlogsTabHeader.click();
});

