<template>
  <div>
    <!--NAVBAR-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link to="/inicio" class="nav-link"><img class="imgLogoNavBar" src="../assets/WorldCrypto.png"
            alt="Logo"></router-link>
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
          <router-link to="/" class="cerrarSesion">Cerrar sesión</router-link>
        </div>
      </div>
    </nav>

    <div class="muestraDatos">
      <div class="row">



        <div class="col-3"></div>


        <!--COMPRA-->
        <div class="col-2 cardCompra">
          <h3 style="text-align: center;">Comprar</h3><hr>
          <div>
            <div>
              <input class="input-group-text" type="number" v-model="cantidad" @input="calcularCompra()"
                style="width: 100%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
              <br>
              <select class="form-select" id="miSelect" v-model="criptoSeleccionada" @change="calcularCompra()"
                style="width: 100%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
                <option v-for="(cripto, index) in criptos" :key="index" :value="cripto.nombre">{{ cripto.nombre }}
                </option>
              </select>
            </div>
            <div style="margin-top: 20px;">
              <input class="input-group-text" type="text" v-model="totalCompra"
                style="width: 100%; color: darkgray" disabled> <br>
              <button class="btnComprarVender" style="width: auto;" @click="realizarCompra()">Comprar</button>
            </div>
          </div>
        </div>



        <div class="col-2"></div>


        <!--VENTA
        <div class="col-2 cardCompra">
          <h3 style="text-align: center;">Vender</h3>
          <div>
            <div>
              <input type="number" class="input-group-text" v-model="cantidad"
                style="width: 100%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
              <br>
              <select class="form-select" v-model="criptoSeleccionada"
                style="width: 100%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
                <option v-for="(cripto, index) in criptos" :key="index" :value="cripto.nombre">{{ cripto.nombre }}
                </option>
              </select>
            </div>
            <div style="margin-top: 10px;">
              <button class="btnComprarVender" style="width: auto;" @click="calcularCompra()">Vender</button>
              <input class="input-group-text" type="text" v-model="totalCompra"
                style="width: 100%; color: darkgray; margin-top: 10px;" disabled>
            </div>
          </div>
        </div>-->

        <div class="col-2 cardCompra">
          <h3 style="text-align: center;">Vender</h3><hr>
          <div>
            <div>
              <input class="input-group-text" type="number" v-model="cantidadV" @input="calcularVenta()"
                style="width: 100%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
              <br>
              <select class="form-select" id="miSelect" v-model="criptoSeleccionadaV" @change="calcularVenta()"
                style="width: 100%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
                <option v-for="(cripto, index) in criptos" :key="index" :value="cripto.nombre">{{ cripto.nombre }}
                </option>
              </select>
            </div>
            <div style="margin-top: 20px;">              
              <input class="input-group-text" type="text" v-model="totalVenta"
                style="width: 100%; color: darkgray; margin-top: 10px;" disabled>
                <br>
              <button  class="btnComprarVender" style="width: auto;" @click="realizarVenta()">Comprar</button>
            </div>
          </div>
        </div>


      </div>
    </div>
    <br><br>

    <!--FOOTER-->
    <footer class="colorFooter">
      <div class="containerFooter">
        <div class="footer-columns">
          <div class="footer-column" style="width: auto;">
            <h3>Enlaces</h3>
            <ul>
              <li><router-link to="/inicio">Inicio</router-link></li>
              <li><router-link to="/compraventa">Comprar/Vender</router-link></li>
              <li><router-link to="/miscrypto">Mis Cryptos</router-link></li>
              <li><router-link to="/movimientos">Movimientos</router-link></li>
            </ul>
          </div>
          <div class="footer-column" style="width: auto;">
            <h3>Contacto</h3>
            <p>Dirección: Brinkmann Cordoba</p>
            <p>Teléfono: 3562-525252</p>
            <p>Email: worldcrypto@cryptos.com</p>
          </div>
          <div class="footer-column" style="width: auto;">
            <h3>Síguenos</h3>
            <ul class="social-icons">
              <li><a href="https://www.facebook.com/" target="_blank"><img class="redes" src="../assets/face.png"
                    alt=""></a></li>
              <li><a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhome" target="_blank"><img
                    class="redes" src="../assets/tw.png" alt=""></a></li>
              <li><a href="https://www.instagram.com/" target="_blank"><img class="redes" src="../assets/igg.png"
                    alt=""></a></li>
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
import axios from 'axios';

export default {
  data() {
    return {
      cantidad: 0,
      criptoSeleccionada: '',
      totalCompra: 'Precio total',
      criptos: [
        { nombre: 'BITCOIN', api: 'https://criptoya.com/api/bitso/btc/ars/0.1' },
        { nombre: 'ETHEREUM', api: 'https://criptoya.com/api/bitso/ETH/ars/0.1' },
        { nombre: 'USDT', api: 'https://criptoya.com/api/bitso/usdt/ars/0.1' },
        { nombre: 'DAI', api: 'https://criptoya.com/api/bitso/dai/ars/0.1' },
      ],
      cantidadV: 0,
      criptoSeleccionadaV: '',
      totalVenta: 'Precio total',
    };
  },
  methods: {
    calcularCompra() {
      if (!this.cantidad || this.cantidad <= 0) {
        this.totalCompra = 'Precio total';
        return;
      }

      const criptoSeleccionada = this.criptos.find(c => c.nombre === this.criptoSeleccionada);
      if (!criptoSeleccionada) {
        this.totalCompra = 'Precio total';
        return;
      }

      this.obtenerPrecioCripto(criptoSeleccionada.api, this.cantidad)
        .then((totalCompra) => {
          this.totalCompra = '$' + totalCompra.toFixed(2);
        })
        .catch((error) => {
          this.totalCompra = 'Precio total';
          alert('Ha ocurrido un error al obtener los datos de la API.');
          console.error(error);
        });
    },
    obtenerPrecioCripto(api, cantidad) {
      return axios.get(api)
        .then((response) => {
          const precioCripto = response.data.totalAsk;
          return cantidad * precioCripto;
        });
    },
    realizarCompra() {
      if (this.totalCompra === 'Precio total' || this.totalCompra <= 0) {
        alert('Primero ingresa una cantidad válida y selecciona una criptomoneda.');
      } else {
        this.criptoSeleccionada = '';
        this.cantidad = '';
        alert('¡Compra aceptada! Total: ' + this.totalCompra);
        this.totalCompra = 'Precio total'
      }
    },



    calcularVenta() {
      if (!this.cantidadV || this.cantidadV <= 0) {
        this.totalVenta = 'Precio total';
        return;
      }

      const criptoSeleccionadaV = this.criptos.find(c => c.nombre === this.criptoSeleccionadaV);
      if (!criptoSeleccionadaV) {
        this.totalVenta = 'Precio total';
        return;
      }

      this.obtenerPrecioCriptoVenta(criptoSeleccionadaV.api, this.cantidadV)
        .then((totalVenta) => {
          this.totalVenta = '$' + totalVenta.toFixed(2);
        })
        .catch((error) => {
          this.totalVenta = 'Precio total';
          alert('Ha ocurrido un error al obtener los datos de la API.');
          console.error(error);
        });
    },
    obtenerPrecioCriptoVenta(api, cantidadV) {
      return axios.get(api)
        .then((response) => {
          const precioCriptoVenta = response.data.totalBid;
          return cantidadV * precioCriptoVenta;
        });
    },
    realizarVenta() {
      if (this.totalVenta === 'Precio total' || this.totalVenta <= 0) {
        alert('Primero ingresa una cantidad válida y selecciona una criptomoneda.');
      } else {        
        this.criptoSeleccionadaV = '';
        this.cantidadV = '';
        alert('Venta aceptada! Total: ' + this.totalVenta);
        this.totalVenta = 'Precio total'
      }
    },
  },
};
</script>
  
<style scoped>
/* Aquí van los estilos del archivo style.css */
</style>
  