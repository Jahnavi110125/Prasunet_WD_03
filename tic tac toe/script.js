
let currentUser = "X";

let playerXName = "";
let playerOName = "";
let win = false;

let c1 = 0;
let c2 = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startGame").onclick = function() {
        playerXName = document.getElementById("userX").value || "Player X";
        playerOName = document.getElementById("userO").value || "Player O";
        alert(`Game started! ${playerXName} vs ${playerOName}`);
        // console.log("TACEIO");
        
        // Hide the user input div and show the game box
        document.querySelector(".details").style.display = "none";
        document.querySelector(".details1").style.display = "none";
        document.querySelector(".first").style.display = "none";
        document.querySelector(".box").style.display = "block";
        document.querySelector(".winning").style.display = "block";
        document.querySelector("#turning").style.display = "block";
        document.getElementById("turn").innerHTML = `Hey! It's ${playerXName} turn`;
        // document.getElementById("turn").style.color="black"
        document.querySelector(".restartGame").style.display = "block";
        document.querySelector(".right").style.display = "block";
        document.getElementById("n1").innerHTML = playerXName;
        document.getElementById("n2").innerHTML = playerOName;
        document.querySelector("#canvas").style.display = "none";
        document.getElementById("turning1").style.display="none";
        // document.getElementById("newb").style.display="none";

        let cells = document.querySelectorAll("#table1 td");

        // Update the existing click handler for Player X's moves
        cells.forEach(cell => {
            cell.onclick = function() {
                if (cell.innerHTML === "X" || cell.innerHTML === "O" || win) {
                    return alert("Invalid Selection");
                }
        
                // Human player move
                cell.innerHTML = currentUser;
                cell.style.backgroundColor = currentUser === "X" ? "#c7eafd" : "#e8198b"; 
                cell.style.fontWeight = "bold";
                cell.style.color = "black";
        
                if (decide()) {
                    win = true;
                    let temp = currentUser === "X" ? playerXName : playerOName;
                    document.getElementById("msg").innerHTML = ("Yay! " + temp + " got point!!");
                    document.getElementById("msg").style.color = "burlywood";
                    if (temp === playerXName) {
                        c1++;
                        document.getElementById("s1").innerHTML = c1;
                    } else if (temp === playerOName) {
                        c2++;
                        document.getElementById("s2").innerHTML = c2;
                    }
                } else {
                    currentUser = currentUser === "X" ? "O" : "X";
                    document.getElementById("turn").innerHTML = currentUser === "X" ? `Hey! It's ${playerXName} turn` : `Hey! It's ${playerOName} turn`;
        
                    // Simulate Taceio's move after Player X's move
                    // if (currentUser === "O") {
                    //     makeTaceioMove();
                    // }
                }
            }
        });   
    };

    document.getElementById("startGame1").onclick = function() {
        playerXName = document.getElementById("userX1").value || "Player X";
        playerOName = "Taceio";
        alert(`Game started! ${playerXName} vs Taceio`);
        // console.log("TACEIO");
        
        // Hide the user input div and show the game box
        document.querySelector(".details").style.display = "none";
        document.querySelector(".details1").style.display = "none";
        document.querySelector(".first").style.display = "none";
        document.querySelector(".box").style.display = "block";
        document.querySelector(".winning").style.display = "block";
        document.querySelector("#turning").style.display = "block";
        document.getElementById("turn").innerHTML = `Hey! It's ${playerXName} turn`;
        // document.getElementById("turn").style.color="black"
        document.querySelector(".restartGame").style.display = "block";
        document.querySelector(".right").style.display = "block";
        document.getElementById("n1").innerHTML = playerXName;
        document.getElementById("n2").innerHTML = playerOName;
        document.querySelector("#canvas").style.display = "none";
        document.getElementById("turning").style.display="none";
        document.getElementById("turning1").style.display="flex";
        // document.getElementById("newb").style.display="none";
        document.getElementById("t1").innerHTML = `${playerXName}(X)`;
        document.getElementById("t2").innerHTML =` Taceio(O)`;

        let cells = document.querySelectorAll("#table1 td");

// Update the existing click handler for Player X's moves
cells.forEach(cell => {
    cell.onclick = function() {
        if (cell.innerHTML === "X" || cell.innerHTML === "O" || win) {
            return alert("Invalid Selection");
        }

        // Human player move
        cell.innerHTML = currentUser;
        cell.style.backgroundColor = currentUser === "X" ? "#c7eafd" : "#e8198b"; 
        cell.style.fontWeight = "bold";
        cell.style.color = "black";

        if (decide()) {
            win = true;
            let temp = currentUser === "X" ? playerXName : playerOName;
            document.getElementById("msg").innerHTML = ("Yay! " + temp + " got point!!");
            document.getElementById("msg").style.color = "burlywood";
            if (temp === playerXName) {
                c1++;
                document.getElementById("s1").innerHTML = c1;
            } else if (temp === playerOName) {
                c2++;
                document.getElementById("s2").innerHTML = c2;
            }
        } else {
            currentUser = currentUser === "X" ? "O" : "X";
            // document.getElementById("turn").innerHTML = currentUser === "X" ? `Hey! It's ${playerXName} turn` : `Hey! It's ${playerOName} turn`;

            // Simulate Taceio's move after Player X's move
            if (currentUser === "O") {
                // document.getElementById("turn").innerHTML = `Hey! It's ${playerOName} turn`;
                makeTaceioMove();
                currentUser = "X";
                // document.getElementById("turn").innerHTML = `Hey! It's ${playerOName} turn`;
            }
        }
    }
});
    };

    document.querySelector(".restartGame").onclick = function() {
        resetGame();
    };
    document.querySelector("#resagain").onclick = function() {
        document.querySelector(".box").style.display = "block";
        document.querySelector(".winning").style.display = "block";
        document.getElementById("turn").innerHTML = `Hey! it's ${playerXName} turn`;
        document.querySelector(".restartGame").style.display = "block";
        document.querySelector(".right").style.display = "block";
        document.getElementById("n1").innerHTML = playerXName;
        document.getElementById("n2").innerHTML = playerOName;
        document.querySelector("#canvas").style.display = "none";
        document.querySelector(".lastwind").style.display = "none";
        c1 = 0;
        c2 = 0;
        document.getElementById("s1").innerHTML = c1;
        document.getElementById("s2").innerHTML = c2;
        document.querySelector(".heading").style.display = "flex";

        if(playerOName === "Taceio"){
            document.querySelector("#turning1").style.display = "flex";
            document.querySelector("#turning").style.display = "none";
        }
        else{
            document.querySelector("#turning").style.display = "block";
            document.querySelector("#turning1").style.display = "none";
        }
        resetGame();
    };


// Function to simulate Taceio's move
function makeTaceioMove() {
    // Implement logic to decide Taceio's move
    let availableCells = [];

    // Collect all empty cells
    let cells = document.querySelectorAll("#table1 td");
    cells.forEach(cell => {
        if (cell.innerHTML !== "X" && cell.innerHTML !== "O") {
            availableCells.push(cell);
        }
    });

    // Choose a random available cell (you can implement more sophisticated AI here)
    let randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    
    // Simulate click on the chosen cell
    if (randomCell) {
        randomCell.click();
    }
}
    




    document.getElementById("exit").onclick = function() {
    
        // Hide the user input div and show the game box
        document.querySelector(".details").style.display = "none";
        document.querySelector(".box").style.display = "none";
        document.querySelector(".winning").style.display = "none";
        document.querySelector("#turning").style.display = "none";
        document.querySelector("#turning1").style.display = "none";
        // document.getElementById("turn").innerHTML = `Hey! it's ${playerXName} turn`;
        document.querySelector(".restartGame").style.display = "none";
        document.querySelector(".right").style.display = "none";
        document.querySelector("#winner").style.display = "block";
        document.querySelector("#canvas").style.display = "block";
        document.querySelector(".lastwind").style.display = "block";
        document.querySelector(".heading").style.display = "none";
        // body.style.backgroundColor = "black";
        exited();
    };

    document.getElementById("pp").onclick = function() {
    
        // Hide the user input div and show the game box
        document.querySelector(".details").style.display = "block";
        document.querySelector(".first").style.display = "none";
        
    };

    document.getElementById("pc").onclick = function() {
    
        // Hide the user input div and show the game box
        document.querySelector(".details1").style.display = "block";
        document.querySelector(".first").style.display = "none";
        
    };


    document.getElementById("newb").onclick = function() {
    
        // Hide the user input div and show the game box
        document.querySelector(".details").style.display = "none";
        document.querySelector(".box").style.display = "none";
        document.querySelector(".winning").style.display = "none";
        document.querySelector("#turning").style.display = "none";
        document.querySelector("#turning1").style.display = "none";
        // document.getElementById("turn").innerHTML = `Hey! it's ${playerXName} turn`;
        document.querySelector(".restartGame").style.display = "none";
        document.querySelector(".right").style.display = "none";
        document.querySelector("#winner").style.display = "block";
        document.querySelector("#canvas").style.display = "block";
        document.querySelector(".lastwind").style.display = "block";
        document.querySelector(".heading").style.display = "none";
        exited();
    };

    // updateFirstDisplay();
    window.addEventListener('resize', updateFirstDisplay);
    document.querySelector("#quit").onclick = function() {
        document.querySelector(".restartGame").style.display = "none";
        document.querySelector(".right").style.display = "none";
        document.querySelector("#canvas").style.display = "none";
        document.querySelector(".details").style.display = "none";
        // document.querySelector(".first").style.display = "flex";
        document.querySelector(".box").style.display = "none";
        document.querySelector(".winning").style.display = "none";
        document.querySelector("#turning").style.display = "none";
        document.querySelector(".lastwind").style.display = "none";
        // playerXName = "";
        // playerOName = "";
        document.getElementById("userX").value = "  ";
        document.getElementById("userO").value = " ";
        document.getElementById("userX1").value = " ";
        c1 = 0;
        c2 = 0;
        document.getElementById("s1").innerHTML = c1;
        document.getElementById("s2").innerHTML = c2;
        document.querySelector(".heading").style.display = "flex";
        // document.getElementsByClassName("heading") = "Tic Tac Toe"
        updateFirstDisplay();

        resetGame();
    };
    
    
});


function updateFirstDisplay() {
    if (window.innerWidth <= 475) {
        document.querySelector(".first").style.display = "block";
    } else {
        document.querySelector(".first").style.display = "flex";
    }
}


function decide(){
    if (document.getElementById("1").innerHTML === currentUser && document.getElementById("2").innerHTML === currentUser && document.getElementById("3").innerHTML === currentUser){
        return true;
    }
    if (document.getElementById("4").innerHTML === currentUser && document.getElementById("5").innerHTML === currentUser && document.getElementById("6").innerHTML === currentUser){
        return true;
    }
    if (document.getElementById("7").innerHTML === currentUser && document.getElementById("8").innerHTML === currentUser && document.getElementById("9").innerHTML === currentUser){
        return true;
    }
    if (document.getElementById("1").innerHTML === currentUser && document.getElementById("4").innerHTML === currentUser && document.getElementById("7").innerHTML === currentUser){
        return true;
    }
    if (document.getElementById("2").innerHTML === currentUser && document.getElementById("5").innerHTML === currentUser && document.getElementById("8").innerHTML === currentUser){
        return true;
    }
    if (document.getElementById("3").innerHTML === currentUser && document.getElementById("6").innerHTML === currentUser && document.getElementById("9").innerHTML === currentUser){
        return true;
    }
    if (document.getElementById("1").innerHTML === currentUser && document.getElementById("5").innerHTML === currentUser && document.getElementById("9").innerHTML === currentUser){
        return true;
    }
    if (document.getElementById("3").innerHTML === currentUser && document.getElementById("5").innerHTML === currentUser && document.getElementById("7").innerHTML === currentUser){
        return true;
    }
    else{
        return false;
    }
}

function checkTie() {
    let cells = document.querySelectorAll("#table1 td");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML !== "X" && cells[i].innerHTML !== "O") {
            return false;
        }
    }
    return true;
}

function resetGame() {
    
    let cells1 = document.querySelectorAll("#table1 td");
    cells1.forEach(cell => {
        cell.innerHTML = "";
        cell.style.backgroundColor = "";
        cell.style.fontWeight = "";
    });
    currentUser = "X";
    win = false;
    document.getElementById("msg").innerHTML = "Let's see who wins?";
    document.getElementById("msg").style.color = "";
    document.getElementById("turn").innerHTML = `Hey! It's ${playerXName} turn`;

}


function exited(){
    let sc1 = c1;
    let sc2 = c2;
    if(sc1>sc2){
        document.getElementById("cong").innerHTML = "Congratulations!!";
        document.getElementById("final").innerHTML = ` ${playerXName} won!!!!`;
    }
    else if(sc1 === 0 && sc2 === 0){
        document.getElementById("cong").innerHTML = "OOPS!!!!";
        document.getElementById("final").innerHTML = `Not Played Yet!`;
    }
    else if(sc1 === sc2){
        document.getElementById("final").innerHTML = `It's a Tie!!`;
        document.getElementById("cong").innerHTML = "OOPS!!!!";
    }
    else{
        document.getElementById("final").innerHTML = `${playerOName} won!!!!`;
    }
}

 window.addEventListener("resize", resizeCanvas, false);
        window.addEventListener("DOMContentLoaded", onLoad, false);
        
        window.requestAnimationFrame = 
            window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function (callback) {
                window.setTimeout(callback, 1000/60);
            };
        
        var canvas, ctx, w, h, particles = [], probability = 0.04,
            xPoint, yPoint;
        
        
        
        
        
        function onLoad() {
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            resizeCanvas();
            
            window.requestAnimationFrame(updateWorld);
        } 
        
        function resizeCanvas() {
            if (!!canvas) {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
            }
        } 
        
        function updateWorld() {
            update();
            paint();
            window.requestAnimationFrame(updateWorld);
        } 
        
        function update() {
            if (particles.length < 500 && Math.random() < probability) {
                createFirework();
            }
            var alive = [];
            for (var i=0; i<particles.length; i++) {
                if (particles[i].move()) {
                    alive.push(particles[i]);
                }
            }
            particles = alive;
        } 
        
        function paint() {
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = "rgba(0,0,0,0.2)";
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';
            for (var i=0; i<particles.length; i++) {
                particles[i].draw(ctx);
            }
        } 
        
        function createFirework() {
            xPoint = Math.random()*(w-200)+100;
            yPoint = Math.random()*(h-200)+100;
            var nFire = Math.random()*50+100;
            var c = "rgb("+(~~(Math.random()*200+55))+","
                 +(~~(Math.random()*200+55))+","+(~~(Math.random()*200+55))+")";
            for (var i=0; i<nFire; i++) {
                var particle = new Particle();
                particle.color = c;
                var vy = Math.sqrt(25-particle.vx*particle.vx);
                if (Math.abs(particle.vy) > vy) {
                    particle.vy = particle.vy>0 ? vy: -vy;
                }
                particles.push(particle);
            }
        } 
        
        function Particle() {
            this.w = this.h = Math.random()*4+1;
            
            this.x = xPoint-this.w/2;
            this.y = yPoint-this.h/2;
            
            this.vx = (Math.random()-0.5)*10;
            this.vy = (Math.random()-0.5)*10;
            
            this.alpha = Math.random()*.5+.5;
            
            this.color;
        } 
        
        Particle.prototype = {
            gravity: 0.05,
            move: function () {
                this.x += this.vx;
                this.vy += this.gravity;
                this.y += this.vy;
                this.alpha -= 0.01;
                if (this.x <= -this.w || this.x >= screen.width ||
                    this.y >= screen.height ||
                    this.alpha <= 0) {
                        return false;
                }
                return true;
            },
            draw: function (c) {
                c.save();
                c.beginPath();
                
                c.translate(this.x+this.w/2, this.y+this.h/2);
                c.arc(0, 0, this.w, 0, Math.PI*2);
                c.fillStyle = this.color;
                c.globalAlpha = this.alpha;
                
                c.closePath();
                c.fill();
                c.restore();
            }
        } 