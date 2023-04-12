"use strict"

window.addEventListener("load", start);

function start() {
    const bars = document.querySelectorAll(".bar")

    const initBar = bars[0];
    const height = 50
    initBar.style.height = ` ${height}px`;
}