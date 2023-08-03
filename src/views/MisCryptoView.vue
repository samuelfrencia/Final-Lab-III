<template>
  <div>
    <!--NAVBAR-->
    <NavbarView></NavbarView>
    <!--MIS CRYPTOS-->
    <div class="muestraDatos">
      <div class="row">
        <div class="col-md-1"></div>
        <div class=" col-md-10">
          <h2 style="text-align: center;">Mi billetera</h2>
          <table>
            <tr>
              <th>Crypto</th>
              <th>Cantidad</th>
              <th>Precio compra</th>
              <th>Ganancias</th>
            </tr>
            <tr v-for="(cripto, index) in criptos" :key="index">
              <td >{{ cripto.nombre }}</td>
              <td>{{ cripto.cantidad }}</td>
              <td>${{ cripto.precioCompra }}</td>
              <td>${{ cripto.ganancia }}</td>
            </tr>

          </table>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
    <br><br>
    <!--FOOTER-->
    <FooterView></FooterView>
  </div>
</template>
  
<script>
import axios from 'axios';
import NavbarView from '@/components/navbarView.vue';
import FooterView from '@/components/footerView.vue';

export default {
    data() {
        return {
            criptos: [
                { nombre: "BITCOIN", cantidad: 5, precioCompra: 24, ganancia: 51 },
                { nombre: "ETHEREUM", cantidad: 2, precioCompra: 20, ganancia: 41 },
                { nombre: "USDT", cantidad: 3, precioCompra: 15, ganancia: 1 },
                { nombre: "DAI", cantidad: 6, precioCompra: 14, ganancia: 5 },
            ],
            compras: [],
        };
    },
    created() {
        this.fetchCompras();
    },
    methods: {
        fetchCompras() {
            // Realiza una solicitud GET a tu API para obtener los datos de las compras realizadas
            axios.get("https://laboratorio3-f36a.restdb.io/rest/compras")
                .then((response) => {
                this.compras = response.data;
            })
                .catch((error) => {
                console.error("Error al obtener las compras:", error);
            });
        },
    },
    components: { NavbarView,
                  FooterView
                }
};
</script>
  
<style>
/* Estilos del archivo style.css */
</style>
  
  