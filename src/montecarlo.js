$(() => {
    $("#back-to-home").on('click', () => {
        window.location.href = "home.html"
    })
    const canvasCircle = $("#circle")
    const ctx = canvasCircle[0].getContext('2d')
    ctx.beginPath()
    ctx.arc(150,150,150,0,2 * Math.PI)
    ctx.stroke()

    canvasCircle.on('click', e => {
        let rect = canvasCircle[0].getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top
        console.log(`x: ${x}\n y:${y}`)
    })
})