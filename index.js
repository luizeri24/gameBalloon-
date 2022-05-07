var total = 0
function createBalloon(){
    var balloon = document.createElement('div');
    balloon.setAttribute('class', 'balloon');

    var x = Math.floor(Math.random() * 600)
    var y = Math.floor(Math.random() * 400);

    balloon.setAttribute('style', 'left:'+ x +'px;top:' + y + 'px;')
    balloon.setAttribute('onclick', 'toBurst(this)')

    document.body.appendChild(balloon)
}

function toBurst(object) {
    document.body.removeChild(object)
    totalBalloons = total += 1
    var result = document.getElementById('result')
    result.innerHTML = `Balões estourados: ${totalBalloons}`
}

function loadGame(){
    setInterval(createBalloon, 1000)
}