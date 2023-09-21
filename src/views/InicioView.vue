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
            <h4 v-if="mostrar"><b>{{ isBalanceVisible ? '$' + formatearNumero(totalSaldoMysCrypto) : '****' }}</b>
            </h4>
            <h4 v-else>...</h4>
          </div>
          <div class="cardDatosCryptos col-md-7 container">
            <h2 style="text-align: center;color: red;">Mercado crypto (Bitso)</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Moneda</th>
                  <th scope="col">Precio compra</th>
                  <th scope="col">Precio compra final</th>
                  <th scope="col">Precio venta final</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="moneda in monedas" :key="moneda.id">
                  <td>{{ moneda.nombre }}</td>
                  <td>{{ formatearNumero(moneda.precioCompra) }}</td>
                  <td>{{ formatearNumero(moneda.precioCompraFinal) }}</td>
                  <td>{{ formatearNumero(moneda.precioVenta) }}</td>
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
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      misCryptos: {
        BITCOIN: { id: 0, nombre: 'BITCOIN', cantidad: 0, totalCrypto: 0 },
        ETHEREUM: { id: 1, nombre: 'ETHEREUM', cantidad: 0, totalCrypto: 0 },
        USDT: { id: 2, nombre: 'USDT', cantidad: 0, totalCrypto: 0 },
        DAI: { id: 3, nombre: 'DAI', cantidad: 0, totalCrypto: 0 }
      },
      totalSaldoMysCrypto: 0,
      isBalanceVisible: true,
      monedas: [],
      mostrar: false
    };
  },
  mounted() {
    this.usuario = JSON.parse(localStorage.getItem('user'))
    this.traerTransacciones();
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
            this.mostrar = true;
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: '+ error)
          console.error('Error al obtener los datos:', error);
        });
      axios.get(`https://criptoya.com/api/bitso/btc/ars/0.1`)
        .then(response => {
          this.precioActualBTC = response.data
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: '+ error)
          console.error('Error al obtener los datos:', error);
        });

      axios.get(`https://criptoya.com/api/bitso/ETH/ars/0.1`)
        .then(response => {
          this.precioActualETH = response.data
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: '+ error)
          console.error('Error al obtener los datos:', error);
        });

      axios.get(`https://criptoya.com/api/bitso/usdt/ars/0.1`)
        .then(response => {
          this.precioActualUSDT = response.data
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: '+ error)
          console.error('Error al obtener los datos:', error);
        });

      axios.get(`https://criptoya.com/api/bitso/dai/ars/0.1`)
        .then(response => {
          this.precioActualDAI = response.data
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: '+ error)
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
.muestraDatos {
  margin-bottom: 80px;
  margin-top: 80px;
}

.cardDatosCryptos {
  border: 0.5px solid black;
  border-radius: 20px;
  text-align: center;
  padding: 15px;
}
</style>
  