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
          <div class="table-responsive">
            <table class="table table-dark text-center">
              <thead>
                <tr>
                  <th>Crypto</th>
                  <th>Cantidad</th>
                  <th>Total ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="transaccion in criptos" :key="transaccion._id" class="table-active">
                  <td>{{ transaccion.crypto_code.toUpperCase() }}</td>
                  <td>{{ transaccion.crypto_amount }}</td>
                  <td>${{ transaccion.money }}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
      usuario: ''
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
      axios.get(`https://laboratorio-36cf.restdb.io/rest/transactions?q={"user_id":"${this.usuario}"}`, {
        headers: {
          'x-apikey': '64a5ccf686d8c5d256ed8fce'
        },
      })
        .then(response => {
          console.log('Respuesta de la API:', response.data);
          this.criptos = response.data;

          // Calcular la suma de dinero y asegurarse de que no tenga decimales
          const totalMoney = this.criptos.reduce((total, transaccion) => total + parseFloat(transaccion.money), 0);

          // Redondear hacia abajo para obtener un número entero
          const totalMoneySinDecimales = Math.floor(totalMoney);

          console.log('Total de dinero:', totalMoneySinDecimales);

          // Guardar el totalMoney en localStorage
          localStorage.setItem('totalMoney', totalMoneySinDecimales);

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
