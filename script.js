function choose(x,y){
    document.getElementsByClassName("info")[0].innerHTML = "已選取 第" + x + "排 第" + y + "個座位";
    document.getElementById(x+","+y).style.backgroundColor = "#ADFF87";
    document.getElementById("protect").style.display = "block";
    document.getElementById("confirm-box").style.bottom = "10px";
}

function cancel(){
    document.getElementById("protect").style.display = "none";
    document.getElementById("confirm-box").style.bottom = "-100px";
    const seats = document.querySelectorAll('.seat');

    seats.forEach(seat => {
        seat.style.backgroundColor = '#696969';
    });
}