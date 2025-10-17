canvas = document.getElementById("canvas")
canvas.width = window.outerWidth
canvas.height = window.outerHeight

ctx = canvas.getContext("2d")


update(deltaTime){
}

render(ctx){

}

gameloop(){
    deltaTime = Date.now() - lastTime()
    lastTime = Date.now()
    update(deltaTime)
    render(ctx)
    requestAnimationFrame(gameloop)
}

gameloop()
    
render(ctx)