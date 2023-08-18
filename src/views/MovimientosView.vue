<template>
  <div>
    <!--NAVBAR-->
    <navbar-view></navbar-view>

    <!--MIS MOVIMIENTOS-->
    <div class="muestraDatos">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h2 style="text-align: center;">Mis movimientos</h2>
          <table>
            <thead>
              <tr>
                <th>Venta/Compra</th>
                <th>Crypto</th>
                <th>Cantidad</th>
                <th>Fecha</th>
                <th>Precio compra</th>
                <th>Ganancias</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cripto, index) in criptos" :key="index">
                <td>{{ cripto.action }}</td>
                <td>{{ cripto.crypto_code.toUpperCase() }}</td>
                <td>{{ cripto.crypto_amount }}</td>
                <td>{{ cripto.datetime }}</td>
                <td>${{ cripto.money }}</td>
                <td>${{ cripto.ganancia }}</td>
                <td><img src="../assets/pencil-square.svg" alt=""><img src="../assets/trash.svg" alt=""></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
    <br><br><br><br>
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
      buttons: [{ imgDelete: '../assets/trash.svg', imgEdit: '../assets/pencil-square.svg' }],
      criptos: [],
      usuario: '',
      fechaHoraDesdeAPI: "",
    };
  },
  created() {
    this.usuario = JSON.parse(localStorage.getItem('user'))
  },
  mounted() {
    this.fetchData(); // Llama al método para obtener los datos al cargar el componente
  },
  methods: {
    fetchData() {

      axios.get(`https://laboratorio3-f36a.restdb.io/rest/transactions?q={"user_id":"${this.usuario}"}`, {
        headers: {
          'x-apikey': '60eb09146661365596af552f'
        },
      })
        .then(response => {
          console.log('Respuesta de la API:', response.data);
          this.criptos = response.data;


        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    }
  },
  components: {
    NavbarView,
    FooterView
  }
};
</script>
  
<style>
/* Estilos del archivo style.css */
</style>
  