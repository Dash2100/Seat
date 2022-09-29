let i = 1;
let result = [];
function choose(x,y){
    document.getElementsByClassName("info")[0].innerHTML = "已選取 " + i + "/5 個座位";
    document.getElementById(x+","+y).style.backgroundColor = "#ADFF87";
    document.getElementById(x+","+y).style.pointerEvents = "none";
    document.getElementById("confirm-box").style.bottom = "10px";
    document.getElementById(x+","+y).innerText = i;
    if(i >= 5){
        document.getElementById("protect").style.display = "block";
        document.querySelector('.confirm-btn').disabled = false;
    }
    i++;
    result.push(x+","+y);
}

function cancel(){
    i = 1;
    result = [];
    document.getElementById("protect").style.display = "none";
    document.getElementById("confirm-box").style.bottom = "-100px";
    document.querySelector('.confirm-btn').disabled = true;
    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.style.backgroundColor = '#696969';
        seat.style.pointerEvents = 'auto';
    });
}

function confirm(){
    console.log(result);
}

function protect(){
    document.getElementById("confirm-box").classList.add("animate__bounce");
    setTimeout(function(){
        document.getElementById("confirm-box").classList.remove("animate__bounce");
    }, 1000);
}