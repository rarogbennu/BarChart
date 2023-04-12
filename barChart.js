"use strict"

window.addEventListener("load", start);

const data = [6, 20, 0, 27, 1, 28, 3, 5, 7, 32, 27, 13, 11, 29, 22, 25, 32, 19, 18, 1, 4, 11, 32, 12, 3, 14, 20, 19, 23, 13, 28, 2, 7, 24, 18, 29, 9, 5, 1, 0]

function start() {
    showData()
}

function showData() {
    const bars = document.querySelectorAll(".bar")
    const maxHeight = 32;
    
    for( let i=0; i<40; i++) {
    const individualBar = bars[i];
    const height = data[i] / maxHeight * 100;
    individualBar.style.height = ` ${height}px`;}
}

