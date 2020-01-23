import {MDCDialog} from "@material/dialog/component";
import BlogsService from "../network/BlogsService";

const appUrl = document.querySelector('meta[name="base-url"]').getAttribute('content');

const draftBlogsTabHeader = document.getElementById('draft-blogs-tab-header');
const publishedBlogsTabHeader = document.getElementById('published-blogs-tab-header');

const CURRENT_TAB = 'current-tab';
const CURRENT_TAB_DRAFT = 'drafts';
const CURRENT_TAB_PUBLISHED = 'published';

let currentTab;

$(() => {
    draftBlogsTabHeader.addEventListener('click', e => {
        if (currentTab !== "drafts") {
            publishedBlogsTabHeader.classList.remove('active');
            draftBlogsTabHeader.classList.add('active');
            currentTab = 'drafts';
            sessionStorage.setItem(CURRENT_TAB, CURRENT_TAB_DRAFT);
            showDraftBlogs();
            setupBlogEntryDeleteMenuItem()
        }
    });

    publishedBlogsTabHeader.addEventListener('click', e => {
        if (currentTab !== "published") {
            draftBlogsTabHeader.classList.remove('active');
            publishedBlogsTabHeader.classList.add('active');
            currentTab = 'published';
            sessionStorage.setItem(CURRENT_TAB, CURRENT_TAB_PUBLISHED);
            showPublishedBlogs();
            setupBlogEntryDeleteMenuItem()
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
        blogsContainer.innerHTML = ''
    }

    function blogHtml(blog, isDraft = true) {
        const div = document.createElement('div');
        const blogContentToDisplay = getBlogContentToDisplay(blog['content']);
        const blogImageToShow = getBlogImageToShow(blog['main_image_filename']);
        div.innerHTML = `
            <div class="d-flex blog-entry col-12">
                <a href="${appUrl}/only/juli/blog/${blog.id}" class="d-flex flex-grow-1" style="text-decoration: none; color: inherit">
                    <div>
                        <img class="blog-entry-img" src="${blogImageToShow}" width="100px"/>
                    </div>
                    <div class="flex-grow-1 d-flex flex-column ml-4">
                        <span class="h3 blog-entry-title" style="display: block; text-overflow: ellipsis; word-wrap: break-word; overflow: hidden; max-height: 60px; line-height: 30px;">${getBlogTitleToShow(blog['title'])}</span>
                        <span style="text-overflow: ellipsis; overflow: hidden;">${blogContentToDisplay}</span>
                    </div>
                </a>
                <div class="dropdown show">
                    <a class="" href="#" role="button" id="blog-entry-menu-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons">arrow_drop_down</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="blog-entry-menu-link">
                        <a class="dropdown-item" href="${appUrl}/only/juli/blog/${blog.id}">Edit</a>
                        <a class="dropdown-item delete-blog-entry-menu-item" data-blog-id="${blog.id}" href="#">Delete</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                </div>
            </div>
    `.trim();

        return div.firstChild
    }

    function getBlogContentToDisplay(blogContent) {
        const div = document.createElement('div');
        div.innerHTML = blogContent.trim();
        const firstParagraphEl = getFirstParagraphElement(div.childNodes);
        if (firstParagraphEl !== undefined) {
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

    const deleteConfirmationDialog =
        new MDCDialog(document.getElementById('delete-confirmation-dialog'));

    const requestOptions = {
        csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
    };

    if (!sessionStorage.getItem(CURRENT_TAB))
        sessionStorage.setItem(CURRENT_TAB, CURRENT_TAB_DRAFT);

    if(sessionStorage.getItem(CURRENT_TAB) === CURRENT_TAB_DRAFT)
        draftBlogsTabHeader.click();
    else if (sessionStorage.getItem(CURRENT_TAB) === CURRENT_TAB_PUBLISHED)
        publishedBlogsTabHeader.click();

    setupBlogEntryDeleteMenuItem();

    function setupBlogEntryDeleteMenuItem() {
        $('.delete-blog-entry-menu-item').off('click');
        $('.delete-blog-entry-menu-item').on('click', event => {
            event.preventDefault();
            deleteConfirmationDialog.open();
            const blogId = event.target.dataset.blogId;
            setupConfirmationDialogDeleteButtonListener(blogId);
            console.log(blogId);
        });
    }

    function setupConfirmationDialogDeleteButtonListener(blogId) {
        $('#delete-confirmation-dialog-delete-btn').on('click', event => {
            console.log('Confirmation modal delete clicked');
            const blogsService = new BlogsService(requestOptions);
            blogsService.delete(blogId).then(res => {
                console.log(`${blogId} deleted`);
                destroyConfirmationDialogDeleteButtonListener();
                window.location.reload();
            });
        })
    }

    function destroyConfirmationDialogDeleteButtonListener() {
        $('.delete-confirmation-dialog-delete-btn').off('click');
    }

});
