let svg = document.getElementById('svg');
class ball {
    constructor(x, y) {
        this.radius = 20;
        this.cx = x;
        this.cy = y;
        this.fill = "#E9DCFF";
        this.dX = 3;
        this.dY = 3;
    }

    get getX() {
        return this.cx
    }

    get getY() {
        return this.cy
    }

    calcFlyDX = () => {
        this.cx += this.dX;
    }
    calcFlyDY = () => {
        this.cy += this.dY
    }


}

let ballsInBox = [];


function clickOnBox() {
    svg.onmousemove = function () {
        svg.onmousedown = function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            const newBall = new ball(x, y);
            ballsInBox.push(newBall);
            setInterval(drawInSvg, 10);
            setInterval(flyBalls, 10);


        }
    }
}

function drawInSvg() {
    let start = new Date ();

    svg.innerHTML = '';
    for (let i = 0; i < ballsInBox.length; i++) {

        let newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        newCircle.setAttribute('r',ballsInBox[i].radius)
        newCircle.setAttribute('cx',ballsInBox[i].getX )
        newCircle.setAttribute('cy',ballsInBox[i].getY )
        newCircle.setAttribute('fill',ballsInBox[i].fill)
        svg.appendChild(newCircle);

    }
    let end = new Date();
    console.log('Операция заняла ' + (end.getTime() - start.getTime()) + ' мсек');


}
/*console.log(svg.width)
console.log(svg.height)
console.log(svg.width.animVal.value)*/
function flyBalls() {
    for (let i = 0; i < ballsInBox.length; i++) {
        if (ballsInBox[i].cx >= svg.width.animVal.value -20) {
            ballsInBox[i].dX = -ballsInBox[i].dX;

        }
        //console.log(ballsInBox[i].x)
        if (ballsInBox[i].cx <= 20) {
            ballsInBox[i].dX = -ballsInBox[i].dX;
        }

        if (ballsInBox[i].cy >= svg.height.animVal.value-20) {
            ballsInBox[i].dY = -ballsInBox[i].dY;
        }
        if (ballsInBox[i].cy <= 20) {
            ballsInBox[i].dY = -ballsInBox[i].dY;
        }

        ballsInBox[i].calcFlyDX();
        ballsInBox[i].calcFlyDY();


    }

}


clickOnBox();



