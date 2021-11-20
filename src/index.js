const saveName = () => {
    const name = document.getElementById("name")
    if(localStorage.getItem('username') !== name.value){
        localStorage.setItem('username',name.value)
        window.location.href = "home.html"    
    }
}

const botonGuardarNombre = document.getElementById("guardarNombre")
botonGuardarNombre.addEventListener("click",saveName)    

