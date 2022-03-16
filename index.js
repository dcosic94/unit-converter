let input = document.getElementById('input-num');
let length = document.getElementById('length-result');
let volume = document.getElementById('volume-result');
let mass = document.getElementById('mass-result');


function convertMetrics () {
    let meter = input.value + " meter = " + (input.value * 3.2808).toFixed(3) + " feets";
    let feet = input.value + " feet = " + (input.value / 3.2808).toFixed(3) + " meters"; 
    length.textContent = meter + " | " + feet

    let liters = input.value + " liter = " + (input.value * 0.26417).toFixed(3) + " gallons";
    let gallons = input.value + " gallon = " + (input.value / 0.26417).toFixed(3) + " liters";
    volume.textContent = liters + " | " + gallons;

    let kilos = input.value + " kilo = " + (input.value * 2.20462).toFixed(3) + " pounds";
    let pounds = input.value + " pound = " + (input.value / 2.20462).toFixed(3) + " kilos";
    mass.textContent = kilos + " | " + pounds;
};


