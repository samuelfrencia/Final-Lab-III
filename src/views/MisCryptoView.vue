<template>
  <div>
    <!--NAVBAR-->
    <NavbarView></NavbarView>
    <!--MIS CRYPTOS-->
    <div class="muestraDatos ">
      <div class="container">
        <h2 style="text-align: center;">Mi billetera</h2>
        <div class="table-responsive" v-if="correcto">
          <table class="table table-dark text-center">
            <thead>
              <tr>
                <th>Crypto</th>
                <th>Cantidad</th>
                <th>Total ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="crypto in misCryptos" :key="crypto.id" class="table-active">
                <td>{{ crypto.nombre }}</td>
                <td>{{ formatearNumero(crypto.cantidad) }}</td>
                <td>${{ formatearNumero(crypto.totalCrypto) }}</td>
              </tr>
              <tr>
                <td class="table-borderless table-light" style="border: none;"></td>
                <td class="table-borderless table-light" style="border: none;"></td>
                <td class="table-info" colspan="1">SALDO: ${{ formatearNumero(totalSaldoMysCrypto) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="spinner center" v-else>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
    <br>
    <br><br>
    <!--FOOTER-->
    <FooterView></FooterView>
  </div>
</template>
  
<script>
import axios from 'axios';
import NavbarView from '@/components/navbarView.vue';
import FooterView from '@/components/footerView.vue';
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      usuario: '',
      misCryptos: {
        BITCOIN: { id: 0, nombre: 'BITCOIN', cantidad: 0, totalCrypto: 0 },
        ETHEREUM: { id: 1, nombre: 'ETHEREUM', cantidad: 0, totalCrypto: 0 },
        USDT: { id: 2, nombre: 'USDT', cantidad: 0, totalCrypto: 0 },
        DAI: { id: 3, nombre: 'DAI', cantidad: 0, totalCrypto: 0 }
      },
      totalSaldoMysCrypto: 0,
      correcto: false,
    };
  },
  created() {
    this.usuario = JSON.parse(localStorage.getItem('user'))
  },
  mounted() {
    this.traerTransacciones();
  },
  methods: {
    formatearNumero(numero) {
      const opciones = {
        style: 'decimal',
        useGrouping: true,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      };
      return numero.toLocaleString('es-ES', opciones);
    },
    traerTransacciones() {
      axios.get(`https://laboratorio3-f36a.restdb.io/rest/transactions?q={"user_id":"${this.usuario}"}`, {
        headers: {
          'x-apikey': '60eb09146661365596af552f'
        },
      })
        .then(response => {
          this.criptos = response.data;
          for (let i = 0; i < this.criptos.length; i++) {
            let element = this.criptos[i];

            if (element.crypto_code == 'bitcoin') {
              if (element.action == 'purchase') {
                this.misCryptos.BITCOIN.cantidad += parseFloat(element.crypto_amount);
              } else {
                this.misCryptos.BITCOIN.cantidad -= parseFloat(element.crypto_amount);
              }
            }
            if (element.crypto_code == 'ethereum') {
              if (element.action == 'purchase') {
                this.misCryptos.ETHEREUM.cantidad += parseFloat(element.crypto_amount);
              } else {
                this.misCryptos.ETHEREUM.cantidad -= parseFloat(element.crypto_amount);
              }
            }
            if (element.crypto_code == 'usdt') {
              if (element.action == 'purchase') {
                this.misCryptos.USDT.cantidad += parseFloat(element.crypto_amount);
              } else {
                this.misCryptos.USDT.cantidad -= parseFloat(element.crypto_amount);
              }
            }
            if (element.crypto_code == 'dai') {
              if (element.action == 'purchase') {
                this.misCryptos.DAI.cantidad += parseFloat(element.crypto_amount);
              } else {
                this.misCryptos.DAI.cantidad -= parseFloat(element.crypto_amount);
              }
            }
          }
          if (this.misCryptos.BITCOIN.cantidad > 0) {
            this.misCryptos.BITCOIN.totalCrypto = parseFloat(this.precioActualBTC.totalBid * this.misCryptos.BITCOIN.cantidad);
          }
          else {
            this.misCryptos.BITCOIN.cantidad = 0
          }
          if (this.misCryptos.ETHEREUM.cantidad > 0) {
            this.misCryptos.ETHEREUM.totalCrypto = parseFloat(this.precioActualETH.totalBid * this.misCryptos.ETHEREUM.cantidad);
          }
          else {
            this.misCryptos.ETHEREUM.cantidad = 0
          }
          if (this.misCryptos.USDT.cantidad > 0) {
            this.misCryptos.USDT.totalCrypto = parseFloat(this.precioActualUSDT.totalBid * this.misCryptos.USDT.cantidad);
          }
          else {
            this.misCryptos.USDT.cantidad = 0
          }
          if (this.misCryptos.DAI.cantidad > 0) {
            this.misCryptos.DAI.totalCrypto = parseFloat(this.precioActualDAI.totalBid * this.misCryptos.DAI.cantidad);
          }
          else {
            this.misCryptos.DAI.cantidad = 0
          }
          this.totalSaldoMysCrypto = this.misCryptos.BITCOIN.totalCrypto + this.misCryptos.ETHEREUM.totalCrypto
            + this.misCryptos.USDT.totalCrypto + this.misCryptos.DAI.totalCrypto;
          this.correcto = true;
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: ' + error)
          console.error('Error al obtener los datos:', error);
        });
      axios.get(`https://criptoya.com/api/bitso/btc/ars/0.1`)
        .then(response => {
          this.precioActualBTC = response.data
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: ' + error)
          console.error('Error al obtener los datos:', error);
        });

      axios.get(`https://criptoya.com/api/bitso/ETH/ars/0.1`)
        .then(response => {
          this.precioActualETH = response.data
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: ' + error)
          console.error('Error al obtener los datos:', error);
        });

      axios.get(`https://criptoya.com/api/bitso/usdt/ars/0.1`)
        .then(response => {
          this.precioActualUSDT = response.data
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: ' + error)
          console.error('Error al obtener los datos:', error);
        });

      axios.get(`https://criptoya.com/api/bitso/dai/ars/0.1`)
        .then(response => {
          this.precioActualDAI = response.data
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: ' + error)
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
  
<style scoped>
</style>
