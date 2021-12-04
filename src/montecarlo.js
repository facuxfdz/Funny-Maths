let circlePoints = 0
let totalPoints = 0
let pi = 0

$(() => {

    // AJAX call
    // RESTRICTED API KEY
    const YOUTUBEAPIURL =  "https://www.googleapis.com/youtube/v3/search?q=montecarlo-maths&key=AIzaSyBEOh5dbQTcb08o99wM8S4uWCNtkyHwbGs"
    $.ajax({
        method: "GET",
        url: YOUTUBEAPIURL,
        success: (res) => {
            
            $("#main-montecarlo").append(`
                <a class='btn btn-outline-danger my-5' target='_blank' href='https://youtube.com/watch?v=${res.items[0].id.videoId}'>Ver video relacionado</a>
            `)
        }
    })

    // GO TO HOME REDIRECT
    $("#back-to-home").on('click', () => {
        window.location.href = "home.html"
    })

    // DRAW CANVAS WHEN THE POINTS WILL BE DRAWN
    drawCanvas()

    // RENDER 'ADD' BUTTON
    $("#main-montecarlo").append(`
        <div class='form-group d-flex flex-column align-items-center justify-content-center'>
            <label for='amount'>Cantidad de puntos aleatorios a agregar</label>
            <input class='my-3 form-control w-50' id='amount' type='number'></input>
            <button class='btn btn-outline-success my-4' id='sendPoints'>Lanzar puntos al tablero</button>
        </div>
    `)

    // FIRST RENDER PI VALUE
    $("#main-montecarlo").append(`<h2 id='pi'>&#x3C0; &#8776; ${pi}</h2>`)

    // HANDLE CLICK
    $("#sendPoints").on('click', () => {
        const amountToDraw = $("#amount").val()
        let x
        let y
        const sign = [-1,1]
        for(let i=0;i<amountToDraw;i++){
            x = Math.random()*150 * sign[Math.floor(Math.random() * sign.length)]
            y = Math.random()*150 * sign[Math.floor(Math.random() * sign.length)]
            const ctx = $("#circle")[0].getContext('2d')
            drawCoordinates(x,y,ctx)              
        }


    })

})

const drawCanvas = () => {
    const canvasCircle = $("#circle")
    const ctx = canvasCircle[0].getContext('2d')
    ctx.beginPath()
    ctx.arc(150,150,150,0,2 * Math.PI)
    ctx.stroke()
}


const drawCoordinates = (x,y,ctx) => {
    
    setTimeout(() => {

        const drawX = 150 - x
        const drawY = 150 - y
        
        const pointSize = 3

        ctx.fillStyle = '#ff2626'
        
        ctx.beginPath()
        ctx.arc(drawX,drawY,pointSize,0,2*Math.PI,true)
        ctx.fill()
        const realX = parseFloat('0.' + (x+"").split('.')[1])
        const realY = parseFloat('0.' + (y+"").split('.')[1])
        const distance = Math.pow(realX,2) + Math.pow(realY,2)

        if(distance <= 1){
            circlePoints += 1
        }
        
        totalPoints += 1 
        
        pi = 4*circlePoints/totalPoints 

        $("#pi").html(`<h2>&#x3C0; &#8776; ${pi}</h2>`)
    },1000)

}
