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
            <table class="table table-dark text-center" >
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
                  <td>{{ crypto.cantidad }}</td>
                  <td>${{ (crypto.totalCrypto).toFixed(2) }}</td>
                </tr>
                <tr>
                  <td class="table-borderless table-light" style="border: none;"></td>
                  <td class="table-borderless table-light" style="border: none;"></td>
                  <td class="table-info" colspan="1">SALDO: ${{ parseFloat(totalSaldoMysCrypto).toFixed(2) }}</td>
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
      usuario: '',
      misCryptos: {
        BITCOIN: { id: 0, nombre: 'BITCOIN', cantidad: 0, totalCrypto: 0 },
        ETHEREUM: { id: 1, nombre: 'ETHEREUM', cantidad: 0, totalCrypto: 0 },
        USDT: { id: 2, nombre: 'USDT', cantidad: 0, totalCrypto: 0 },
        DAI: { id: 3, nombre: 'DAI', cantidad: 0, totalCrypto: 0 }
      },
      totalSaldoMysCrypto: 0,
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
          this.criptos = response.data;
          for (let i = 0; i < this.criptos.length; i++) {
            let element = this.criptos[i];
            if (element.crypto_code == 'bitcoin') {
              this.misCryptos.BITCOIN.cantidad += parseFloat(element.crypto_amount);
              this.misCryptos.BITCOIN.totalCrypto += parseFloat(element.money)
            }
            if (element.crypto_code == 'ethereum') {
              this.misCryptos.ETHEREUM.cantidad += parseFloat(element.crypto_amount);
              this.misCryptos.ETHEREUM.totalCrypto += parseFloat(element.money)
            }
            if (element.crypto_code == 'usdt') {
              this.misCryptos.USDT.cantidad += parseFloat(element.crypto_amount);
              this.misCryptos.USDT.totalCrypto += parseFloat(element.money)
            }
            if (element.crypto_code == 'dai') {
              this.misCryptos.DAI.cantidad += parseFloat(element.crypto_amount);
              this.misCryptos.DAI.totalCrypto += parseFloat(element.money)
            }
            this.totalSaldoMysCrypto += parseFloat(element.money)
            localStorage.setItem('totalSaldo', this.totalSaldoMysCrypto);
          }
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
  
<style scoped></style>
