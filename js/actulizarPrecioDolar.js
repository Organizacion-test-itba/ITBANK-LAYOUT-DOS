const URLDOLAR = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
const tablaPrecios = document.querySelector("#tablaPrecioDolares");
const fecha = new Date().toLocaleDateString();




function traerPreciosDolar() {
	fetch(URLDOLAR)
		.then((res) => res.json())
		.then((data) => {
			let preciosDolar = data;
			preciosDolar
				.filter(
					(precio) =>
						precio.casa.nombre !== "Argentina" &&
						precio.casa.venta != 0 &&
						precio.casa.variacion
				)
				.forEach((precio) => {
          
					tablaPrecios.innerHTML += `
        <section class="cuenta-info">      
        <h1 class="tipo__dolar">${precio.casa.nombre}</h1>
        <section class="dolar__precio">
          <article class="dolar__precio--articulo">
            <h4>Compra</h4>
            <h2>$${precio.casa.compra}</h2>
          </article>
          <article class="dolar__precio--articulo">
            <h4>Venta</h4>
            <h2>$${precio.casa.venta}</h2>
          </article>
        </section>
        <article class="dolar__precio--datos">
          <h4 class="dolar__precio--dato">  VARIACION ${precio.casa.variacion}%</h4>
        <h5 class="dolar__precio--dato">ACTUALIZADO: ${fecha}</h5>
        </article>
      </section>
        `;
				});
		});
}

window.onload = () => {
	traerPreciosDolar();
};
