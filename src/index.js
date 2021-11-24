const saveName = () => {
    const name = $('#name')[0]
    localStorage.setItem('username',name.value)
    window.location.href = "home.html"    
}

$('#guardarNombre').on("click",saveName)