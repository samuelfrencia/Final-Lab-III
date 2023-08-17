<template>
  <div>
    <!--NAVBAR-->
    <NavbarView></NavbarView>

    <div class="muestraDatos">
      <div class="row">
        <div class="col-3"></div>
        <!--COMPRA-->
        <div class="col-2 cardCompra">
          <h3 style="text-align: center;">Comprar</h3>
          <hr>
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
              <input class="input-group-text" type="text" v-model="totalCompra" style="width: 100%; color: darkgray"
                disabled> <br>
              <button class="btnComprarVender" style="width: auto;" @click="realizarCompra()">Comprar</button>
            </div>
          </div>
        </div>

        <div class="col-2"></div>

        <!--VENTA-->
        <div class="col-2 cardCompra">
          <h3 style="text-align: center;">Vender</h3>
          <hr>
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
              <button class="btnComprarVender" style="width: auto;" @click="realizarVenta()">Comprar</button>
            </div>
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

//const apiClient = axios.create({
//  url: 'https://laboratorio3-f36a.restdb.io/rest/',
//  headers: { 'APIKEY': '60eb09146661365596af552f' }
//});

export default {
  data() {
    return {
      cantidad: 0,
      criptoSeleccionada: "",
      totalCompra: "Precio total",
      criptos: [
        { nombre: "BITCOIN", api: "https://criptoya.com/api/bitso/btc/ars/0.1" },
        { nombre: "ETHEREUM", api: "https://criptoya.com/api/bitso/ETH/ars/0.1" },
        { nombre: "USDT", api: "https://criptoya.com/api/bitso/usdt/ars/0.1" },
        { nombre: "DAI", api: "https://criptoya.com/api/bitso/dai/ars/0.1" },
      ],
      cantidadV: 0,
      criptoSeleccionadaV: "",
      totalVenta: "Precio total",
    };
  },
  methods: {
    calcularCompra() {
      if (!this.cantidad || this.cantidad <= 0) {
        this.totalCompra = "Precio total";
        return;
      }
      const criptoSeleccionada = this.criptos.find(c => c.nombre === this.criptoSeleccionada);
      if (!criptoSeleccionada) {
        this.totalCompra = "Precio total";
        return;
      }
      this.obtenerPrecioCripto(criptoSeleccionada.api, this.cantidad)
        .then((totalCompra) => {
          this.totalCompra = totalCompra.toFixed(2);
        })
        .catch((error) => {
          this.totalCompra = "Precio total";
          alert("Ha ocurrido un error al obtener los datos de la API.");
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
    //PROBLEMA DE LA API
    realizarCompra() {
      if (this.totalCompra === "Precio total" || this.totalCompra <= 0) {
        alert("Primero ingresa una cantidad válida y selecciona una criptomoneda.");
      }
      else {
        const datetime = new Date();
        const dia = datetime.getDate();
        const mes = datetime.getMonth() + 1;
        const anio = datetime.getFullYear();
        const hora = datetime.getHours();
        const min = datetime.getMinutes();
        this.horaCompra = dia + "/" + mes + "/" + anio + " - " + hora + ":" + min + "hs."
        const datos = {
          user_id: this.usuario,
          action: 'purchase',
          crypto_code: this.criptoSeleccionada.toLowerCase(),
          crypto_amount: this.cantidad.toString(),
          money: this.totalCompra.toString(),
          datetime: this.horaCompra.toString(),
        }
        axios
          .post('https://laboratorio3-f36a.restdb.io/rest/transactions', datos, {
            headers: {
              'x-apikey': '60eb09146661365596af552f',
              'Content-Type': 'application/json',
             },
          })
          .then(response => {
            console.log('Respuesta de la API:', response.data);
          })
          .catch(error => {
            console.error(error);
          });
        this.criptoSeleccionada = "";
        this.cantidad = "";
        alert("¡Compra aceptada! Total: $" + this.totalCompra);
        this.totalCompra = "Precio total";
      }
    },
    calcularVenta() {
      if (!this.cantidadV || this.cantidadV <= 0) {
        this.totalVenta = "Precio total";
        return;
      }
      const criptoSeleccionadaV = this.criptos.find(c => c.nombre === this.criptoSeleccionadaV);
      if (!criptoSeleccionadaV) {
        this.totalVenta = "Precio total";
        return;
      }
      this.obtenerPrecioCriptoVenta(criptoSeleccionadaV.api, this.cantidadV)
        .then((totalVenta) => {
          this.totalVenta = "$" + totalVenta.toFixed(2);
        })
        .catch((error) => {
          this.totalVenta = "Precio total";
          alert("Ha ocurrido un error al obtener los datos de la API.");
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
      if (this.totalVenta === "Precio total" || this.totalVenta <= 0) {
        alert("Primero ingresa una cantidad válida y selecciona una criptomoneda.");
      }
      else {
        this.criptoSeleccionadaV = "";
        this.cantidadV = "";
        alert("Venta aceptada! Total: " + this.totalVenta);
        this.totalVenta = "Precio total";
      }
    },
  },
  created() {
    this.usuario = JSON.parse(localStorage.getItem('user'))
  },
  components: {
    NavbarView,
    FooterView
  }
};
</script>
  

  