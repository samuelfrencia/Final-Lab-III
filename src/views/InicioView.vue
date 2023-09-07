<template>
  <div>
    <!--NAVBAR-->
    <NavbarView></NavbarView>
    <!--INICIO SECION-->
    <div class="container">
      <div class="muestraDatos">
        <div class="row" style="align-items: top;">
          <div class="cardDatosBalance col-md-3 container" style="padding: 20px;">
            <h3>
              Saldo total
              <img :src="isBalanceVisible ? require('../assets/eye-fill.svg') : require('../assets/eye-slash-fill.svg')"
                @click="toggleBalanceVisibility" style="width: 25px; cursor: pointer;">
            </h3>
            <h4><b>{{ isBalanceVisible ? '$' + parseFloat(totalSaldoMysCrypto).toFixed(2) : '****' }}</b></h4>
          </div>
          <div class="cardDatosCryptos col-md-7 container">
            <h2 style="text-align: center;color: red;">Mercado crypto (Bitso)</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Moneda</th>
                  <th scope="col">Precio compra</th>
                  <th scope="col">Precio compra final</th>
                  <th scope="col">Precio venta</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="moneda in monedas" :key="moneda.id">
                  <td>{{ moneda.nombre }}</td>
                  <td>{{ moneda.precioCompra }}</td>
                  <td>{{ moneda.precioCompraFinal }}</td>
                  <td>{{ moneda.precioVenta }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!--FOOTER-->
    <FooterView></FooterView>
  </div>
</template>
  
<script>
import NavbarView from '@/components/navbarView.vue';
import FooterView from '@/components/footerView.vue';
import axios from 'axios';
export default {
  data() {
    return {
      totalSaldoMysCrypto: 0,
      isBalanceVisible: true,
      monedas: [],
    };
  },
  mounted() {
    this.usuario = JSON.parse(localStorage.getItem('user'))
    this.traerTransaccion();
    const cryptoLista = [
      { id: 1, nombre: 'BITCOIN', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/btc/ars/0.1' },
      { id: 2, nombre: 'ETHEREUM', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/ETH/ars/0.1' },
      { id: 3, nombre: 'USDT', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/usdt/ars/0.1' },
      { id: 4, nombre: 'DAI', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/dai/ars/0.1' },
      { id: 5, nombre: 'CARDANO', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/ADA/ars/0.1' },
      { id: 6, nombre: 'LITECOIN', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/LTC/ars/0.1' },
      { id: 7, nombre: 'USDC', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/usdc/ars/0.1' },
      { id: 8, nombre: 'UNISWAP', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/UNI/ars/0.1' },
      { id: 9, nombre: 'SOLANA', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/sol/ars/0.1' },
      { id: 10, nombre: 'TRON', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/trx/ars/0.1' },
      { id: 11, nombre: 'MANA', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/mana/ars/0.1' },
      { id: 12, nombre: 'MATIC TOKEN', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/matic/ars/0.1' },
      { id: 13, nombre: 'AAVE TOKEN', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/aave/ars/0.1' },
      { id: 14, nombre: 'CHAINLINK TOKEN', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/link/ars/0.1' },
      { id: 15, nombre: 'XRP', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/xrp/ars/0.1' },
      { id: 16, nombre: 'PAX GOLD', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/paxg/ars/0.1' },
      { id: 17, nombre: 'ALGORAND', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/algo/ars/0.1' },
      { id: 18, nombre: 'CHILIZ', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/chz/ars/0.1' },
      { id: 19, nombre: 'SAND', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/sand/ars/0.1' },
      { id: 20, nombre: 'AXIE INFINITY SHARD', mercadoCryptosAPI: 'https://criptoya.com/api/bitso/axs/ars/0.1' },
    ];
    cryptoLista.forEach(moneda => {
      axios.get(moneda.mercadoCryptosAPI)
        .then(response => {
          const datosMoneda = response.data;
          this.monedas.push({
            id: moneda.id,
            nombre: moneda.nombre,
            precioCompra: datosMoneda.ask,
            precioCompraFinal: datosMoneda.totalAsk,
            precioVenta: datosMoneda.totalBid
          });
        })
        .catch(error => {
          console.error(`Error al obtener datos de la moneda ${moneda.nombre}: ${error}`);
        });
    });
  },
  methods: {
    toggleBalanceVisibility() {
      this.isBalanceVisible = !this.isBalanceVisible;
    },
    traerTransaccion() {
      axios.get(`https://laboratorio3-f36a.restdb.io/rest/transactions?q={"user_id":"${this.usuario}"}`, {
        headers: {
          'x-apikey': '60eb09146661365596af552f'
        },
      })
        .then(response => {
          this.criptos = response.data;
          for (let i = 0; i < this.criptos.length; i++) {
            let element = this.criptos[i];
            this.totalSaldoMysCrypto += parseFloat(element.money)
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
  
<style scoped>
.muestraDatos {
  margin-bottom: 80px;
  margin-top: 80px;
}

.cardDatosCryptos {
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  padding: 15px;
}
</style>
  