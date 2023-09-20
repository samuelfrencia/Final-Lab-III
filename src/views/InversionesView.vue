<template>
    <div>
      <!--NAVBAR-->
      <NavbarView></NavbarView>
      <!--MIS CRYPTOS-->
      <div class="muestraDatos ">
        <div class="container">
          <h2 style="text-align: center;">Mi billetera</h2>
          <div class="table-responsive">
            <table class="table table-dark text-center">
              <thead>
                <tr>
                  <th>Crypto</th>
                  <th>Ganancias</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="crypto in misCryptos" :key="crypto.id" class="table-active">
                  <td>{{ crypto.nombre }}</td>
                  <td>${{ (crypto.totalCrypto).toFixed(2) }}</td>
                </tr>
              </tbody>
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
        usuario: '',
        misCryptos: {
          BITCOIN: { id: 0, nombre: 'BITCOIN', cantidad: 0, totalCrypto: 0},
          ETHEREUM: { id: 1, nombre: 'ETHEREUM', cantidad: 0, totalCrypto: 0},
          USDT: { id: 2, nombre: 'USDT', cantidad: 0, totalCrypto: 0},
          DAI: { id: 3, nombre: 'DAI', cantidad: 0, totalCrypto: 0}
        },
      };
    },
    created() {
      this.usuario = JSON.parse(localStorage.getItem('user'))
    },
    mounted() {
      this.traerTransacciones();
    },
    methods: {
      traerTransacciones() {
        axios.get(`https://laboratorio-36cf.restdb.io/rest/transactions?q={"user_id":"${this.usuario}"}`, {
          headers: {
            'x-apikey': '64a5ccf686d8c5d256ed8fce'
          },
        })
          .then(response => {
            this.criptos = response.data;
            for (let i = 0; i < this.criptos.length; i++) {
              let element = this.criptos[i];
              console.log(element)
            }
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
        axios.get(`https://criptoya.com/api/bitso/btc/ars/0.1`)
          .then(response => {
            this.precioActualBTC = response.data
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
  
        axios.get(`https://criptoya.com/api/bitso/ETH/ars/0.1`)
          .then(response => {
            this.precioActualETH = response.data
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
  
        axios.get(`https://criptoya.com/api/bitso/usdt/ars/0.1`)
          .then(response => {
            this.precioActualUSDT = response.data
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
  
        axios.get(`https://criptoya.com/api/bitso/dai/ars/0.1`)
          .then(response => {
            this.precioActualDAI = response.data
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
  
      },
    },
    components: {
      NavbarView,
      FooterView
    }
  };
  </script>
    
  <style scoped></style>
  