<template>
  <div>
    <!--NAVBAR-->
    <NavbarView></NavbarView>
    <!--MIS CRYPTOS-->
    <div class="muestraDatos">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h2 style="text-align: center;">Mi billetera</h2>
          <table>
            <thead>
              <tr>
                <th>Crypto</th>
                <th>Cantidad</th>
                <th>Total ($)</th>
                <th>Ganancias</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cripto, index) in criptos" :key="index">
                <td>{{ cripto.crypto_code.toUpperCase() }}</td>
                <td>{{ cripto.crypto_amount }}</td>
                <td>${{ cripto.money }}</td>
                <td>${{ cripto.money }}</td>
              </tr>
            </tbody>
            <!--<tbody>
              <tr v-for="(cripto, index) in criptos" :key="index">
                <td>{{ cripto.crypto_code.toUpperCase() }}</td>
                <td>{{ cripto.crypto_amount }}</td>
                <td>${{ cripto.money }}</td>
              </tr>
            </tbody>-->
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
      criptos: [],
      usuario: '',
      monedas: [
        { nombre: "BITCOIN"},
        { nombre: "ETHEREUM"},
        { nombre: "USDT" },
        { nombre: "DAI"},
      ],
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
          
          this.criptos = response.data; // Almacena los datos en el arreglo criptos
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
