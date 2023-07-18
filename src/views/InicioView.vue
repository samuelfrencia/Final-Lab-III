<template>
    <div>

  <!--NAVBAR-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/inicio" class="nav-link"><img class="imgLogoNavBar" src="../assets/WorldCrypto.png" alt="Logo"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/inicio" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/compraventa" class="nav-link">Comprar/Vender</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/misCrypto" class="nav-link">Mis Crypto</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/movimientos" class="nav-link">Movimientos</router-link>
          </li>
        </ul>
        <router-link to="/login" class="cerrarSesion">Cerrar sesión</router-link>
      </div>
    </div>
  </nav>
  
      <!--INICIO SECION-->
      <div class="muestraDatos">
        <div class="row" style="align-items: top;">
          <div class="col-1"></div>
          <div class="cardDatosBalance col-md-3" style="padding: 20px;">
            <h2>Balance estimado</h2>
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
  
  <!--FOOTER-->
  <footer class="colorFooter">
    <div class="containerFooter">
      <div class="footer-columns">
        <div class="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><router-link to="/inicio">Inicio</router-link></li>
            <li><router-link to="/compraventa">Comprar/Vender</router-link></li>
            <li><router-link to="/miscrypto">Mis Cryptos</router-link></li>
            <li><router-link to="/movimientos">Movimientos</router-link></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Contacto</h3>
          <p>Dirección: Brinkmann Cordoba</p>
          <p>Teléfono: 3562-525252</p>
          <p>Email: worldcrypto@cryptos.com</p>
        </div>
        <div class="footer-column">
          <h3>Síguenos</h3>
          <ul class="social-icons">
            <li><a href="#"><img class="redes" src="../assets/face.png" alt=""></a></li>
            <li><a href="#"><img class="redes" src="../assets/tw.png" alt=""></a></li>
            <li><a href="#"><img class="redes" src="../assets/igg.png" alt=""></a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="footer-text">Derechos de autor © 2023. Todos los derechos reservados.</p>
    </div>
  </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        criptos: [
          'BITCOIN', 'ETHEREUM', 'USDT', 'DAI', 'CARDANO', 'LITECOIN', 'USDC', 'UNISWAP', 'SOLANA', 'TRON',
          'MANA', 'MATIC TOKEN', 'AAVE TOKEN', 'CHAINLINK TOKEN', 'XRP', 'PAX GOLD', 'ALGORAND', 'CHILIZ', 'SAND', 'AXIE INFINITY SHARD'
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
            console.error('Error al obtener los datos:', error);
          });
      },
      tabla(dato, index) {
        this.datos[index] = dato;
      },
      obtenerDatos() {
        const apiUrls = [
          'https://criptoya.com/api/bitso/btc/ars/0.1',
          'https://criptoya.com/api/bitso/ETH/ars/0.1',
          'https://criptoya.com/api/bitso/usdt/ars/0.1',
          'https://criptoya.com/api/bitso/dai/ars/0.1',
          'https://criptoya.com/api/bitso/ADA/ars/0.1',
          'https://criptoya.com/api/bitso/LTC/ars/0.1',
          'https://criptoya.com/api/bitso/usdc/ars/0.1',
          'https://criptoya.com/api/bitso/UNI/ars/0.1',
          'https://criptoya.com/api/bitso/sol/ars/0.1',
          'https://criptoya.com/api/bitso/trx/ars/0.1',
          'https://criptoya.com/api/bitso/mana/ars/0.1',
          'https://criptoya.com/api/bitso/matic/ars/0.1',
          'https://criptoya.com/api/bitso/aave/ars/0.1',
          'https://criptoya.com/api/bitso/link/ars/0.1',
          'https://criptoya.com/api/bitso/xrp/ars/0.1',
          'https://criptoya.com/api/bitso/paxg/ars/0.1',
          'https://criptoya.com/api/bitso/algo/ars/0.1',
          'https://criptoya.com/api/bitso/chz/ars/0.1',
          'https://criptoya.com/api/bitso/sand/ars/0.1',
          'https://criptoya.com/api/bitso/axs/ars/0.1'
        ];
  
        const fetchPromises = apiUrls.map(url => this.traerDatos(url));
  
        Promise.all(fetchPromises)
          .then(data => {
            data.forEach((apiResult, index) => {
              this.tabla(apiResult, index);
            });
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Agrega los estilos CSS aquí */
  </style>
  