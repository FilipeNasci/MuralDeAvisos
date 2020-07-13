

document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {
    fetch('http://localhost:3000/api/all').then(res => {
        return res.json();
    }).then(json => {
        let postElements = '';
        let posts = JSON.parse(json);

        posts.forEach(post => {
            let postElement = `<div id=${post.id} class="card mb-4">
            <div class="card-header d-flex justify-content-between">
                <h5 class="card-title d-inline">${post.title}</h5>
                <button class="btn btn-dark" onclick="deletePost('${post.id}')"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg></button>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description}</div>
            </div>
        </div>`;
            postElements += postElement;
        })
        document.getElementById("posts").innerHTML = postElements;
    })
}


function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;
    let post = { title, description }

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    };

    fetch('http://localhost:3000/api/new', options).then(res => {
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    })
}


function deletePost(id) {
    let post = { id }
    const options = {
        method: "DELETE",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    };

    fetch('http://localhost:3000/api/del', options).then(res => {
        updatePosts();
    })
}