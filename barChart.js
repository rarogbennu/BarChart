"use strict"

window.addEventListener("load", start);

const data = []

function start() {
    const bars = document.querySelectorAll(".bar")

    const initBar = bars[0];
    const maxHeight = 32;
    const height = data[0] / maxHeight * 100;
    initBar.style.height = ` ${height}px`;
}