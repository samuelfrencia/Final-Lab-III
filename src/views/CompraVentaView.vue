<template>
  <div>
    <!--NAVBAR-->
    <NavbarView></NavbarView>

    <br><br>
    <div class="cardss">
      <!--COMPRA-->
      <div class="cardCompra">
        <h3 style="text-align: center;">Comprar</h3>
        <hr>
        <div>
          <div>
            <input class="input-group-text inputs" type="number" v-model="cantidad" @input="calcularCompra()">
            <br>
            <select class="form-select inputs" id="miSelect" v-model="criptoSeleccionada" @change="calcularCompra()">
              <option v-for="(cripto, index) in criptos" :key="index" :value="cripto.nombre">{{ cripto.nombre }}
              </option>
            </select>
          </div>
          <div style="margin-top: 20px;">
            <input class="input-group-text inputs" type="text" v-model="totalCompra" style="color: darkgray" disabled> 
            <br>
            <button class="btnComprarVender" style="width: 75px;" @click="realizarCompra()">Comprar</button>
          </div>
        </div>
      </div>


      <!--VENTA-->
      <div class="cardVenta">
        <h3 style="text-align: center;">Vender</h3>
        <hr>
        <div>
          <div>
            <input class="input-group-text inputs" type="number" v-model="cantidadV" @input="calcularVenta()">
            <br>
            <select class="form-select inputs" id="miSelect" v-model="criptoSeleccionadaV" @change="calcularVenta()">
              <option v-for="(cripto, index) in criptos" :key="index" :value="cripto.nombre">{{ cripto.nombre }}
              </option>
            </select>
          </div>
          <div style="margin-top: 20px;">
            <input class="input-group-text inputs" type="text" v-model="totalVenta" style="color: darkgray;" disabled>
            <br>
            <button class="btnComprarVender" style="width: 75px;" @click="realizarVenta()">Vender</button>
          </div>
        </div>
      </div>
    </div>
    <br><br>

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
      cantidad: 0,
      criptoSeleccionada: "",
      criptos: [
        { nombre: "BITCOIN", api: "https://criptoya.com/api/bitso/btc/ars/0.1" },
        { nombre: "ETHEREUM", api: "https://criptoya.com/api/bitso/ETH/ars/0.1" },
        { nombre: "USDT", api: "https://criptoya.com/api/bitso/usdt/ars/0.1" },
        { nombre: "DAI", api: "https://criptoya.com/api/bitso/dai/ars/0.1" },
      ],
      totalCompra: "Precio total",
      cantidadV: 0,
      criptoSeleccionadaV: "",
      totalVenta: "Precio total",
      totalBTCcomprado: 0,
      totalETHcomprado: 0,
      totalUSDTcomprado: 0,
      totalDAIcomprado: 0,
    };
  },
  mounted() {
    this.traerTransaccionesVenta();
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
    realizarCompra() {
      if (this.totalCompra === "Precio total" || this.totalCompra <= 0) {
        alert("Primero ingresa una cantidad válida y selecciona una criptomoneda.");
      }
      else {
        const fechaHora = new Date();
        const dia = String(fechaHora.getDate()).padStart(2, '0');
        const mes = String(fechaHora.getMonth() + 1).padStart(2, '0');
        const anio = fechaHora.getFullYear();
        const hora = String(fechaHora.getHours()).padStart(2, '0');
        const min = String(fechaHora.getMinutes()).padStart(2, '0');
        const seg = String(fechaHora.getSeconds()).padStart(2, '0');
        this.horaCompra = anio + "-" + mes + "-" + dia + " " + hora + ":" + min + ":" + seg;
        const datos = {
          user_id: this.usuario,
          action: 'purchase',
          crypto_code: this.criptoSeleccionada.toLowerCase(),
          crypto_amount: this.cantidad.toString(),
          money: this.totalCompra.toString(),
          datetime: this.horaCompra,
        }
        axios
          .post('https://laboratorio3-f36a.restdb.io/rest/transactions', datos, {
            headers: {
              'x-apikey': '60eb09146661365596af552f',
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            console.log('Subido a la API:', response.data);
            this.idTransaccion = response.data._id
          })
          .catch(error => {
            console.error(error);
          });
        this.criptoSeleccionada = "";
        this.cantidad = "";
        alert("¡Compra aceptada! Total: $" + this.totalCompra);
        this.totalCompra = "Precio total";
        this.$router.push('/miscrypto');
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
          this.totalVenta = totalVenta.toFixed(2);
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
      else if ((this.criptoSeleccionadaV == 'BITCOIN' && this.cantidadV <= this.totalBTCcomprado) ||
        (this.criptoSeleccionadaV == 'ETHEREUM' && this.cantidadV <= this.totalETHcomprado) ||
        (this.criptoSeleccionadaV == 'USDT' && this.cantidadV <= this.totalUSDTcomprado) ||
        (this.criptoSeleccionadaV == 'DAI' && this.cantidadV <= this.totalDAIcomprado)) {
        const fechaHora = new Date();
        const dia = String(fechaHora.getDate()).padStart(2, '0');
        const mes = String(fechaHora.getMonth() + 1).padStart(2, '0');
        const anio = fechaHora.getFullYear();
        const hora = String(fechaHora.getHours()).padStart(2, '0');
        const min = String(fechaHora.getMinutes()).padStart(2, '0');
        const seg = String(fechaHora.getSeconds()).padStart(2, '0');
        this.horaCompra = anio + "-" + mes + "-" + dia + " " + hora + ":" + min + ":" + seg;
        const datos = {
          _id: this.idTransaccion,
          user_id: this.usuario,
          action: 'sale',
          crypto_code: this.criptoSeleccionadaV.toLowerCase(),
          crypto_amount: this.cantidadV.toString(),
          money: this.totalVenta.toString(),
          datetime: this.horaCompra,
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
            this.idTransaccion = response.data._id
          })
          .catch(error => {
            console.error(error);
          });
        this.criptoSeleccionadaV = "";
        this.cantidadV = "";
        alert("Venta aceptada! Total: " + this.totalVenta);
        this.totalVenta = "Precio total";
        this.$router.push('/miscrypto');
      }
      else { alert("NO PUEDES VENDER MAS DE LO QUE TIENES") }
    },
    traerTransaccionesVenta() {
      axios.get(`https://laboratorio3-f36a.restdb.io/rest/transactions?q={"user_id":"${this.usuario}"}`, {
        headers: {
          'x-apikey': '60eb09146661365596af552f'
        },
      })
        .then(response => {
          this.criptosCompradas = response.data;
          for (let i = 0; i < this.criptosCompradas.length; i++) {
            let element = this.criptosCompradas[i];
            if (element.crypto_code == 'bitcoin') {
              if (element.action == 'purchase') {
                this.totalBTCcomprado += parseFloat(element.crypto_amount)
              }
              if (element.action == 'sale') {
                this.totalBTCcomprado -= parseFloat(element.crypto_amount)
              }
            }
            if (element.crypto_code == 'ethereum') {
              if (element.action == 'purchase') {
                this.totalETHcomprado += parseFloat(element.crypto_amount)
              }
              if (element.action == 'sale') {
                this.totalETHcomprado -= parseFloat(element.crypto_amount)
              }
            }
            if (element.crypto_code == 'usdt') {
              if (element.action == 'purchase') {
                this.totalUSDTcomprado += parseFloat(element.crypto_amount)
              }
              if (element.action == 'sale') {
                this.totalUSDTcomprado -= parseFloat(element.crypto_amount)
              }
            }
            if (element.crypto_code == 'dai') {
              if (element.action == 'purchase') {
                this.totalDAIcomprado += parseFloat(element.crypto_amount)
              }
              if (element.action == 'sale') {
                this.totalDAIcomprado -= parseFloat(element.crypto_amount)
              }
            }
          }
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    }
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
<style scoped>
/*COMPRA DE CRYPTOS*/
.inputs{
  width: 170px; 
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
.cardss {
  display: flex;
  justify-content: center;
}

.cardCompra {
  border: 1px solid darkgray;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  width: 220px;
  margin: 20px;
  background-color: #f1efee;
}

.cardVenta {
  border: 1px solid darkgray;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  width: 220px;
  margin: 20px;
  background-color: #f1efee;
}

.btnComprarVender {
  width: 90px;
  padding: 6px;
  background-color: #323232;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.btnComprarVender:hover {
  background-color: black;
}

#miSelect {
  border: 2px solid #ccc;
  padding: 5px;
}

#miSelect:focus {
  border-color: black;
}

input {
  width: 50px;
}
@media screen and (max-width: 500px) {
  .cardss {
  display: flex;
  justify-content: center; /* Centrar las tarjetas horizontalmente */
  align-items: center; /* Centrar las tarjetas verticalmente */
  flex-direction: column; /* Apilar las tarjetas en dispositivos móviles */
  max-width: 800px; /* Tamaño máximo de las tarjetas */
  margin: 0 auto;
}

.cardCompra,
.cardVenta {
  width: 220px; /* Tamaño fijo para las tarjetas */
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
}





</style>
  

  