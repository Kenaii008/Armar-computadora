function calcular() {
    var total=0;
}

var gabinete = document.getElementsById("gabinete").value;

if (gabinete == "700") {
    total+= 700;
}

else if (gabinete == "1200") {
    total+= 1200;
}
else if (gabinete == "500") {
    total+=550;
}
else if (gabinete == "2500") {
    total+= 2500;
}

var procesador = document.getElementsById("procesador").value;

if (procesador == "900") {
    total+= 900;
}

else if (procesador == "1500") {
    total+= 1500;
}

else if (procesador == "3500") {
    total+= 3500;
}

else if (procesador == "5000") {
    total+= 5000;
}

var disco = document.getElementById("disco").value;

if (disco == "500") {
    total+= 500;
}

else if (disco == "800") {
    total+= 800;
}

else if (disco == "1000") {
    total+= 1000;
}

else if (disco == "900") {
    total+= 900;
}

else if (disco == "1380") {
    total+= 1380;
}

if (document.querySelector('input[value="200"]').checked) {
        total += 200; // Mouse
    }
    if (document.querySelector('input[value="300"]').checked) {
        total += 300; // Teclado
    }
    if (document.querySelector('input[value="400"]').checked) {
        total += 400; // Bocinas
    }
    if (document.querySelector('input[value="600"]').checked) {
        total += 600; // Webcam
    }
    if (document.querySelector('input[value="1200"]').checked) {
        total += 1200; // UPS
    }
