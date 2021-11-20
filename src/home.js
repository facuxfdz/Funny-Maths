const load = () => {
    const username = localStorage.getItem('username')
    if(!username) window.location.href = "index.html"
    const usernameH2 = document.createElement("h2")
    usernameH2.classList.add("text-light")
    usernameH2.classList.add("main-text")
    usernameH2.appendChild(document.createTextNode(`Bienvenide ${username}`))
    const usernameDiv = document.getElementById("username")
    usernameDiv.appendChild(usernameH2)
}

document.addEventListener('DOMContentLoaded', load)

