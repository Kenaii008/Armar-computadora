function calcular() {
    var total=0;
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
    if (document.querySelector('input[value="100"]').checked) {
        total += 100; // Alfombrilla
    }
    if (document.querySelector('input[value="800"]').checked) {
        total += 800; // Control Gamer
    }
    if (document.querySelector('input[value="250"]').checked) {
        total += 250; // Luz RGB
    }
    if (document.querySelector('input[value="3500"]').checked) {
        total += 3500; // Silla Gamer
    }
    if (document.querySelector('input[value="450"]').checked) {
        total += 450; // Adaptador WiFi
    }
    if (document.querySelector('input[value="180"]').checked) {
        total += 180; // Hub USB
    }
    if (document.querySelector('input[value="700"]').checked) {
        total += 700; // Audífonos
    }
    if (document.querySelector('input[value="4000"]').checked) {
        total += 4000; // Monitor adicional
    }
    if (document.querySelector('input[value="220"]').checked) {
        total += 220; // Soporte
    }
    if (document.querySelector('input[value="180"]').checked) {
        total += 180; // Ventilador
    }
    if (document.querySelector('input[value="300"]').checked) {
        total += 300; // Micrófono
    }
    if (document.querySelector('input[value="120"]').checked) {
        total += 120; // Lector SD
    }
    if (document.querySelector('input[value="90"]').checked) {
        total += 90; // Cable HDMI
    }
    if (document.querySelector('input[value="250"]').checked) {
        total += 250; // Base refrigerante
    }
    if (document.querySelector('input[value="150"]').checked) {
        total += 150; // Caja de herramientas
    }

    alert("El total de la PC es: $" + total + " MXN");

}

document.getElementById("calcular").addEventListener("click", calcular);

