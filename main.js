canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
pen_color = "black";
line_width = 1;
var ptx, pty;

if (screen.width < 992) {
    canvas.width = screen.width - 70;
    canvas.height = screen.height - 300;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_ts);

function my_ts(e) {
    pen_color = document.getElementById("color").value;
    line_width = document.getElementById("line_width").value;
    console.log("touchstart");
    ptx = e.touches[0].clientX - canvas.offsetLeft;
    pty = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_tm);

function my_tm(e) {
    ctx = e.touches[0].clientX - canvas.offsetLeft;
    cty = e.touches[0].clientY - canvas.offsetTop;
    pen.beginPath();
    pen.strokeStyle = pen_color;
    pen.lineWidth = line_width;
    pen.moveTo(ptx, pty);
    pen.lineTo(ctx, cty);
    pen.stroke();

    ptx = ctx;
    pty = cty;
}


function cleararea() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
}