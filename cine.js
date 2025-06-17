let asientos = [11, 15, 28, 44, 45, 70];
let asiento_pedido = 50; // para que me corra en node ya le mando el asiento preterminado
function cine(asientos, asiento_pedido) {
  // Recorremos todos los asientos disponibles
  for (let i = 0; i < asientos.length; i++) {
    if (asientos[i] === asiento_pedido) {
      // Si encontramos el asiento pedido en el array
      console.log(
        "Lo sentimos, el asiento " + asiento_pedido + " no está disponible."
      );
      return; // Salimos de la función para evitar seguir buscando
    }
  }
  // Si no se encontró el asiento en el ciclo, entonces está disponible
  console.log(
    "Felicitaciones, el asiento " + asiento_pedido + " está disponible."
  );
}

// cuando uso el navegador puedo pedirle al usuario el asiento
// let asiento_pedido = Number(prompt("¡Hola! ¿Qué asiento deseas comprar?"));

cine(asientos, asiento_pedido);

