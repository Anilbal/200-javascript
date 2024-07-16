let my_div = document.querySelector(".my-div");

function isTouch() {
    try {
        document.createElement("TouchEvent");
        return true;
    } catch (error) {
        return false;
    }
}

const move = (e) => {
    let x, y;
    try {
        x = !isTouch() ? e.pageX : e.touches[0].pageX;
        y = !isTouch() ? e.pageY : e.touches[0].pageY;
    } catch (error) {
        console.error(error);
    }
    my_div.style.left = x + "px";
    my_div.style.top = y + "px";
}

document.addEventListener("mousemove", (e) => {
    move(e);
});

document.addEventListener("touchmove", (e) => {
    move(e);
});
