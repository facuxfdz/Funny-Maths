$(() => {
    const username = localStorage.getItem('username')
    if(!username) window.location.href = "index.html"
    const usernameDiv = $('#username')
    usernameDiv.append(`<h2 class='text-light main-text'>Bienvenide ${username}</h2>`)
})