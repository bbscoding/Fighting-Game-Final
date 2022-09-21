function rectangularCollision({ rectangle1, rectange2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectange2.position.x
        && rectangle1.attackBox.position.x <= rectange2.position.x + rectange2.width
        && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectange2.position.y
        && rectangle1.attackBox.position.y <= rectange2.position.y + rectange2.height
    )
}

function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector("#displayText").style.display = "flex"
    if (player.health === enemy.health) {
        document.querySelector("#displayText").innerHTML = "Tie"
    }
    else if (player.health > enemy.health) {
        document.querySelector("#displayText").innerHTML = "Player 1 wins"
    }
    else if (player.health < enemy.health) {
        document.querySelector("#displayText").innerHTML = "Player 2 wins"
    }

}

let timer = 60;
let timerId;
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--;
        document.querySelector("#timer").innerHTML = timer
    }
    if (timer === 0) {
        determineWinner({ player, enemy,timerId })
    }
}