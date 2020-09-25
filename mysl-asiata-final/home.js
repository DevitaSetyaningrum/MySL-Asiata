const canvas = document.getElementById("mycanvas")
const phoneNumber = document.getElementById("phoneNumber")
const container = document.getElementById("recommendedPackages")
const ctx = canvas.getContext("2d")
const random = (a, b) => Math.floor(Math.random() * (a) + b)
let ball
let ball2
let ball3
let ball4
let ball5

function resizeCanvas() {
    canvas.width = screen.width;
    canvas.height = container.offsetHeight
    canvas.top = container.offsetTop
    drawStuff();
}

function drawStuff() {
    ball = { x: random(canvas.offsetWidth - 200, 100), y: random(canvas.offsetHeight - 200, 100), r: random(25, 75), xSpeed: 2, ySpeed: 2 }
    ball2 = { x: random(canvas.offsetWidth - 200, 100), y: random(canvas.offsetHeight - 200, 100), r: random(25, 75), xSpeed: 3, ySpeed: -3 }
    ball3 = { x: random(canvas.offsetWidth - 200, 100), y: random(canvas.offsetHeight - 200, 100), r: random(25, 75), xSpeed: -3, ySpeed: 3 }
    ball4 = { x: random(canvas.offsetWidth - 200, 100), y: random(canvas.offsetHeight - 200, 100), r: random(25, 75), xSpeed: -4, ySpeed: 4 }
    ball5 = { x: random(canvas.offsetWidth - 200, 100), y: random(canvas.offsetHeight - 200, 100), r: random(25, 75), xSpeed: 4, ySpeed: -2 }
}

function draw() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

    ctx.beginPath()
    ctx.fillStyle = "rgba(216,49,91,0.2)";
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = "rgba(216,49,91,0.3)";
    ctx.arc(ball2.x, ball2.y, ball2.r, 0, 2 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = "rgba(62,146,204,0.2)";
    ctx.arc(ball3.x, ball3.y, ball3.r, 0, 2 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = "rgba(62,146,204,0.4)";
    ctx.arc(ball4.x, ball4.y, ball4.r, 0, 2 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = "rgba(10,36,99,0.3)";
    ctx.arc(ball5.x, ball5.y, ball5.r, 0, 2 * Math.PI)
    ctx.fill()

    update()
}


function update() {
    if (ball.y - ball.r + ball.ySpeed <= 0 || ball.y + ball.r + ball.ySpeed >= canvas.offsetHeight) {
        ball.ySpeed *= -1
    }
    if (ball.x - ball.r + ball.xSpeed <= 0 || ball.x + ball.r + ball.xSpeed >= canvas.offsetWidth) {
        ball.xSpeed *= -1
    }
    ball.x += ball.xSpeed
    ball.y += ball.ySpeed

    if (ball2.y - ball2.r + ball2.ySpeed <= 0 || ball2.y + ball2.r + ball2.ySpeed >= canvas.offsetHeight) {
        ball2.ySpeed *= -1
    }
    if (ball2.x - ball2.r + ball2.xSpeed <= 0 || ball2.x + ball2.r + ball2.xSpeed >= canvas.offsetWidth) {
        ball2.xSpeed *= -1
    }
    ball2.x += ball2.xSpeed
    ball2.y += ball2.ySpeed

    if (ball3.y - ball3.r + ball3.ySpeed <= 0 || ball3.y + ball3.r + ball3.ySpeed >= canvas.offsetHeight) {
        ball3.ySpeed *= -1
    }
    if (ball3.x - ball3.r + ball3.xSpeed <= 0 || ball3.x + ball3.r + ball3.xSpeed >= canvas.offsetWidth) {
        ball3.xSpeed *= -1
    }
    ball3.x += ball3.xSpeed
    ball3.y += ball3.ySpeed

    if (ball4.y - ball4.r + ball4.ySpeed <= 0 || ball4.y + ball4.r + ball4.ySpeed >= canvas.offsetHeight) {
        ball4.ySpeed *= -1
    }
    if (ball4.x - ball4.r + ball4.xSpeed <= 0 || ball4.x + ball4.r + ball4.xSpeed >= canvas.offsetWidth) {
        ball4.xSpeed *= -1
    }
    ball4.x += ball4.xSpeed
    ball4.y += ball4.ySpeed

    if (ball5.y - ball5.r + ball5.ySpeed <= 0 || ball5.y + ball5.r + ball5.ySpeed >= canvas.offsetHeight) {
        ball5.ySpeed *= -1
    }
    if (ball5.x - ball5.r + ball5.xSpeed <= 0 || ball5.x + ball4.r + ball5.xSpeed >= canvas.offsetWidth) {
        ball5.xSpeed *= -1
    }
    ball5.x += ball5.xSpeed
    ball5.y += ball5.ySpeed
}

phoneNumber.innerHTML = localStorage.phonenumber
resizeCanvas()
setInterval(draw, 10)
window.addEventListener('resize', resizeCanvas, false);