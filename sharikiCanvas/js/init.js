const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


class ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.startAngel = 0;
        this.endAngel = 2 * Math.PI;
        this.draw = false;
        this.dX = 3;
        this.dY = 3;
    }

    get getX() {
        return this.x
    }

    get getY() {
        return this.y
    }

    calcFlyDX = () => {
        this.x += this.dX;
    }
    calcFlyDY = () => {
        this.y += this.dY
    }


}

let ballsInBox = [];


function clickOnBox() {
    canvas.onmousemove = function () {
        canvas.onmousedown = function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            const newBall = new ball(x, y);
            ballsInBox.push(newBall);
            setInterval(drawInCanvas, 100);
            setInterval(flyBalls, 100);


        }
    }
}

function drawInCanvas() {
    let start = new Date ();

    ctx.clearRect(0, 0, 700, 500);
    for (let i = 0; i < ballsInBox.length; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'red' ;


        ctx.arc(ballsInBox[i].getX, ballsInBox[i].getY, ballsInBox[i].radius, ballsInBox[i].startAngel, ballsInBox[i].endAngel, ballsInBox[i].draw);
        ctx.fill()
        ctx.stroke();
    }
    let end = new Date();
    console.log('Операция заняла ' + (end.getTime() - start.getTime()) + ' мсек');
}

function flyBalls() {
    for (let i = 0; i < ballsInBox.length; i++) {
        if (ballsInBox[i].x >= canvas.width -20) {
            ballsInBox[i].dX = -ballsInBox[i].dX;

        }
        //console.log(ballsInBox[i].x)
        if (ballsInBox[i].x <= 20) {
            ballsInBox[i].dX = -ballsInBox[i].dX;
        }

        if (ballsInBox[i].y >= canvas.height-20) {
            ballsInBox[i].dY = -ballsInBox[i].dY;
        }
        if (ballsInBox[i].y <= 20) {
            ballsInBox[i].dY = -ballsInBox[i].dY;
        }

        ballsInBox[i].calcFlyDX();
        ballsInBox[i].calcFlyDY();


    }

}

clickOnBox();



