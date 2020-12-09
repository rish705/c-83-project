var mouseEvent = "empty"
canvas =
    document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = black
width_of_line = 1

function my_mousemove(e) {
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientYv - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y)
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x
    last_position_of_y = current_position_of_mouse_y
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    current_position_of_mouse_x = e.touches[0].clientX = canvas.offsetLeft
    current_position_of_mouse_y = e.touches[0].clientY = canvas.offsetTop

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y)
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x
    last_position_of_y = current_position_of_mouse_y
}