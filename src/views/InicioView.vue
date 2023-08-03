<template>
  <div>
    <!--NAVBAR-->
    <NavbarView></NavbarView>
    <!--INICIO SECION-->
    <div class="container">
      <div class="muestraDatos">
        <div class="row" style="align-items: top;">
          <div class="cardDatosBalance col-md-3" style="padding: 20px;">
            <h3>Balance estimado</h3>
            <!--PONGO INPUT PARA MUESTRA, LO QUE QUIERO HACER ES CON UN p O h3 QUE MUESTRE MI SALDO TOTAL-->
            <input type="number" disabled style="opacity: 50%;" v-model="saldoTotal" placeholder="sin saldo">
          </div>
          <div class="cardDatosCryptos col-md-7">
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
                <tr v-for="(dato, index) in datos" :key="index">
                  <td>{{ criptos[index] }}</td>
                  <td>{{ '$' + dato.ask }}</td>
                  <td>{{ '$' + dato.totalAsk }}</td>
                  <td>{{ '$' + dato.totalBid }}</td>
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
export default {
    data() {
        return {
            criptos: [
                "BITCOIN",
                "ETHEREUM",
                "USDT",
                "DAI",
                "CARDANO",
                "LITECOIN",
                "USDC",
                "UNISWAP",
                "SOLANA",
                "TRON",
                "MANA",
                "MATIC TOKEN",
                "AAVE TOKEN",
                "CHAINLINK TOKEN",
                "XRP",
                "PAX GOLD",
                "ALGORAND",
                "CHILIZ",
                "SAND",
                "AXIE INFINITY SHARD"
            ],
            datos: [],
            saldoTotal: 0
        };
    },
    mounted() {
        this.obtenerDatos();
    },
    methods: {
        traerDatos(url) {
            return fetch(url)
                .then(res => res.json())
                .catch(error => {
                console.error("Error al obtener los datos:", error);
            });
        },
        tabla(dato, index) {
            this.datos[index] = dato;
        },
        obtenerDatos() {
            const apiUrls = [
                "https://criptoya.com/api/bitso/btc/ars/0.1",
                "https://criptoya.com/api/bitso/ETH/ars/0.1",
                "https://criptoya.com/api/bitso/usdt/ars/0.1",
                "https://criptoya.com/api/bitso/dai/ars/0.1",
                "https://criptoya.com/api/bitso/ADA/ars/0.1",
                "https://criptoya.com/api/bitso/LTC/ars/0.1",
                "https://criptoya.com/api/bitso/usdc/ars/0.1",
                "https://criptoya.com/api/bitso/UNI/ars/0.1",
                "https://criptoya.com/api/bitso/sol/ars/0.1",
                "https://criptoya.com/api/bitso/trx/ars/0.1",
                "https://criptoya.com/api/bitso/mana/ars/0.1",
                "https://criptoya.com/api/bitso/matic/ars/0.1",
                "https://criptoya.com/api/bitso/aave/ars/0.1",
                "https://criptoya.com/api/bitso/link/ars/0.1",
                "https://criptoya.com/api/bitso/xrp/ars/0.1",
                "https://criptoya.com/api/bitso/paxg/ars/0.1",
                "https://criptoya.com/api/bitso/algo/ars/0.1",
                "https://criptoya.com/api/bitso/chz/ars/0.1",
                "https://criptoya.com/api/bitso/sand/ars/0.1",
                "https://criptoya.com/api/bitso/axs/ars/0.1"
            ];
            const fetchPromises = apiUrls.map(url => this.traerDatos(url));
            Promise.all(fetchPromises)
                .then(data => {
                data.forEach((apiResult, index) => {
                    this.tabla(apiResult, index);
                });
            });
        }
    },
    components: { NavbarView,
                  FooterView
    }
};
</script>
  
<style scoped>
/* Agrega los estilos CSS aquí */
</style>
  