let asientos = [11, 15, 28, 44, 45, 70];

function cine(asientos, asiento_pedido) {
    let disponible = false;

    for (let i = 0; i <= 5; i++) {
        if (asientos[i] === asiento_pedido) {
            disponible = false;
            break;
        }
    }

    if (disponible) {
        console.log(" Felicitaciones, el asiento " + asiento_pedido+ " está disponible.");
    } else {
        console.log(" Lo sentimos, el asiento " + asiento_pedido + " no está disponible.");
    }
}

let asiento_pedido = Number(prompt("Hola! ¿Qué asiento deseas comprar?"));

cine(asientos, asiento_pedido);
