function calcularTotal() {
    let precioUnidad = 200; // Precio por unidad
    let cantidad = document.getElementById("cantidadInput").value; // Obtiene la cantidad ingresada
    let dropdown = document.getElementById("descuentoDropdown");
    let descuento = dropdown.value; // Obtiene el valor seleccionado del dropdown
    let precioTotal = precioUnidad * cantidad; // Calcula el precio total

    if (descuento > 0) {
        let precioConDescuento = precioTotal * (1 - descuento / 100); // Calcula el precio con descuento
        document.getElementById("totalAPagar").textContent = "Total a pagar: $" + precioConDescuento;
    } else {
        document.getElementById("totalAPagar").textContent = "Total a pagar: $" + precioTotal;
    }
}
function mostrarTotalAPagar() {
    let precio = 200; // Precio sin descuento
    let dropdown = document.getElementById("descuentoDropdown");
    let descuento = dropdown.value; // Obtiene el valor seleccionado del dropdown
    let precioConDescuento = precio * (1 - descuento / 100); // Calcula el precio con descuento

    let totalAPagar = document.getElementById("totalAPagar");
    totalAPagar.textContent = "Total a pagar: $" + precioConDescuento.toFixed(2);
}
function mostrarResumen() {
    let totalAPagar = document.getElementById("totalAPagar").textContent;
    Swal.fire({
        title: "Gracias por elegirnos ya te enviaremos el link con el pago",
        text: totalAPagar,
        icon: "success",
        confirmButtonText: "Aceptar"
    });
}