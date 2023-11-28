<template>
  <div>
    <!--NAVBAR-->
    <navbar-view></navbar-view>

    <!--MIS MOVIMIENTOS-->
    <div class="muestraDatos">
      <div class="container" >
        <h2 style="text-align: center;">Mis movimientos</h2>
        <div class="table-responsive" v-if="correcto">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Accion</th>
                <th>Crypto</th>
                <th>Cantidad</th>
                <th>Fecha</th>
                <th>Precio compra</th>
                <th>Botones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="transaccion in criptos" :key="transaccion._id">
                <td>{{ transaccion.action }}</td>
                <td>{{ transaccion.crypto_code.toUpperCase() }}</td>
                <td>{{ formatearNumero(transaccion.crypto_amount) }}</td>
                <td>{{ transaccion.datetimeFormatted }}</td>
                <td>${{ formatearNumero(transaccion.money) }}</td>
                <td>
                  <!-- Button/Modal VER -->
                  <button class="btn btn-info" id="btnInfo" data-bs-toggle="modal" data-bs-target="#ModalVer"
                    @click="verTransaccion(transaccion)">
                    <img src="../assets/eye.svg" alt="">
                  </button>
                  <div class="modal fade" id="ModalVer" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Datos de la transaccion</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style="text-align: center;">
                          <p><em>Accion:</em> <b>{{ verCrypto.action }}</b></p>
                          <p><em>Criptomoneda:</em> <b>{{ verCrypto.crypto_code }}</b></p>
                          <p><em>Cantidad:</em> <b>{{ verCrypto.crypto_amount }}</b></p>
                          <p><em>Fecha:</em> <b>{{ verCrypto.datetimeFormatted }}</b></p>
                          <p><em>Precio:</em> <b>${{ verCrypto.money }}</b></p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Button/Modal MODIFICAR-->
                  <button class="btn btn-warning" id="btnEdit" data-bs-toggle="modal" data-bs-target="#ModalModificar"
                    @click="verTransaccion(transaccion)">
                    <img src="../assets/pencil-square.svg" alt="">
                  </button>
                  <div class="modal fade" id="ModalModificar" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar transaccion</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" id="centrarDIV">
                          <em>Accion:</em><select class="form-select" v-model="verCrypto.action" id="miSelect"
                            style="width: 50%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);text-align:center">
                            <option value="purchase">purchase</option>
                            <option value="sale">sale</option>
                          </select><br>
                          <em>Criptomoneda:</em><select class="form-select" v-model="verCrypto.crypto_code" id="miSelect"
                            style="width: 50%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);text-align:center"
                            @change="calcularModif(criptoSeleccionadaModif)">
                            <option value="bitcoin">BITCOIN</option>
                            <option value="ethereum">ETHEREUM</option>
                            <option value="usdt">USDT</option>
                            <option value="dai">DAI</option>
                          </select><br>
                          <em>Cantidad:</em><input type="number" v-model="verCrypto.crypto_amount"
                            @input="calcularModif(cantidadModif)" class="input-group-text" id="componentIguales"><br>
                          <em>Fecha:</em><input type="datetime" v-model="verCrypto.datetimeFormatted"
                            class="input-group-text" id="componentIguales"><br>
                          <em>Precio:</em><input type="number" v-model="verCrypto.money" class="input-group-text"
                            id="componentIguales">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal"
                            @click="modificarTransaccion(verCrypto)">Modificar</button>
                          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--BUTTON BORRAR-->
                  <button class="btn btn-danger" id="btnBorrar" data-bs-toggle="modal" data-bs-target="#ModalEliminar"
                    @click="verTransaccion(transaccion)">
                    <img src="../assets/trash.svg" alt="">
                  </button>
                  <div class="modal fade" id="ModalEliminar" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">¿Esta seguro de eliminar esta transaccion?
                          </h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" id="centrarDIV">
                          <em>Accion:</em><input class="input-group-text" v-model="verCrypto.action" id="miSelect"
                            disabled style="width: 50%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);text-align:center"><br>
                          <em>Criptomoneda:</em><input class="input-group-text" v-model="verCrypto.crypto_code"
                            id="miSelect" disabled
                            style="width: 50%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);text-align:center"><br>
                          <em>Cantidad:</em><input type="number" v-model="verCrypto.crypto_amount"
                            class="input-group-text" disabled id="componentIguales"><br>
                          <em>Fecha:</em><input type="datetime" v-model="verCrypto.datetimeFormatted"
                            class="input-group-text" disabled id="componentIguales"><br>
                          <em>Precio:</em><input type="number" v-model="verCrypto.money" class="input-group-text"
                            id="componentIguales" disabled>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal"
                            @click="eliminarTransaccion(verCrypto)">Eliminar</button>
                          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
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
      </div>
    </div>
    <br><br><br><br><br><br><br>
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
      criptos: [],
      usuario: '',
      fechaHoraDesdeAPI: "",
      verCrypto: [],
      verModif: [],
      cantidadModif: 0,
      criptoSeleccionadaModif: "",
      criptosModif: [
        { nombre: "BITCOIN", api: "https://criptoya.com/api/bitso/btc/ars/0.1" },
        { nombre: "ETHEREUM", api: "https://criptoya.com/api/bitso/ETH/ars/0.1" },
        { nombre: "USDT", api: "https://criptoya.com/api/bitso/usdt/ars/0.1" },
        { nombre: "DAI", api: "https://criptoya.com/api/bitso/dai/ars/0.1" },
      ],
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
      axios.get(`https://laboratorio3-5fc7.restdb.io/rest/transactions?q={"user_id":"${this.usuario}"}`, {
        headers: {
          'x-apikey': '64bdbc3386d8c5613ded91e7'
        },
      })
        .then(response => {          
          this.criptos = response.data.map(transaccion => {
            const fechaUTC = new Date(transaccion.datetime);
            const offset = 3; // Diferencia horaria en horas para Buenos Aires
            const fechaBuenosAires = new Date(fechaUTC.getTime() + offset * 60 * 60 * 1000);

            const dia = fechaBuenosAires.getDate().toString().padStart(2, '0');
            const mes = (fechaBuenosAires.getMonth() + 1).toString().padStart(2, '0');
            const anio = fechaBuenosAires.getFullYear();
            const horas = fechaBuenosAires.getHours().toString().padStart(2, '0');
            const minutos = fechaBuenosAires.getMinutes().toString().padStart(2, '0');

            transaccion.datetimeFormatted = `${dia}/${mes}/${anio}, ${horas}:${minutos}`;

            return transaccion;

          });
          this.correcto = true;
        })
        .catch(error => {
          Swal.fire('Error al obtener los datos de la API: '+ error)
          console.error('Error al obtener los datos:', error);
        });
    },
    eliminarTransaccion(transaccion) {
      axios.delete(`https://laboratorio3-5fc7.restdb.io/rest/transactions/${transaccion._id}`, {
        headers: {
          'x-apikey': '64bdbc3386d8c5613ded91e7'
        },
      })
        .then(response => {
          console.log('Dato ELIMINADO de la API:', response.data);

          this.traerTransacciones();
        })
        .catch(error => {
          Swal.fire('Error al ELIMINAR dato de la API: '+ error)
          console.error('Error al ELIMINAR dato:', error);
        });
    },
    verTransaccion(transaccion) {
      this.verCrypto = {};

      axios.get(`https://laboratorio3-5fc7.restdb.io/rest/transactions/${transaccion._id}`, {
        headers: {
          'x-apikey': '64bdbc3386d8c5613ded91e7'
        },
      })
        .then(response => {
          this.verCrypto = response.data;
          const fechaUTC = new Date(this.verCrypto.datetime);
          const offset = 3; // Diferencia horaria en horas para Buenos Aires
          const fechaBuenosAires = new Date(fechaUTC.getTime() + offset * 60 * 60 * 1000);
          const dia = fechaBuenosAires.getDate().toString().padStart(2, '0');
          const mes = (fechaBuenosAires.getMonth() + 1).toString().padStart(2, '0');
          const anio = fechaBuenosAires.getFullYear();
          const horas = fechaBuenosAires.getHours().toString().padStart(2, '0');
          const minutos = fechaBuenosAires.getMinutes().toString().padStart(2, '0');
          this.verCrypto.datetimeFormatted = `${dia}/${mes}/${anio}, ${horas}:${minutos}`;
          console.log('VER transaccion de la API:', this.verCrypto);
        })
        .catch(error => {
          Swal.fire('Error al obtener el dato de la API: '+ error)
          console.error('Error al obtener dato:', error);
        });
    },
    modificarTransaccion(transaccion) {
      const transaccionModificada = {
        action: this.verCrypto.action,
        crypto_code: this.verCrypto.crypto_code,
        crypto_amount: this.verCrypto.crypto_amount,
        datetime: this.verCrypto.datetime,
        money: this.verCrypto.money
      }

      axios.patch(`https://laboratorio3-5fc7.restdb.io/rest/transactions/${transaccion._id}`, transaccionModificada, {
        headers: {
          'x-apikey': '64bdbc3386d8c5613ded91e7'
        },
      })
        .then(response => {
          this.verModif = response.data;
          console.log('MODIFICADA la transaccion de la API:', this.verModif)
          this.traerTransacciones();
        })
        .catch(error => {
          Swal.fire('Error al MODIFICAR los datos de la API: '+ error)
          console.error('Error al MODIFICAR dato:', error);
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
#componentIguales {
  width: 50%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3)
}

#btnInfo {
  margin: 1px;
  border: 1px solid white;
  background-color: white;
}

#btnInfo:hover {
  background-color: aqua;
}

#btnEdit {
  margin: 1px;
  border: 1px solid white;
  background-color: white;
}

#btnEdit:hover {
  background-color: #EBD52E;
}

#btnBorrar {
  margin: 1px;
  border: 1px solid white;
  background-color: white;
}

#btnBorrar:hover {
  background-color: red;
}

#centrarDIV {
  width: 100%;
  height: 100%;
  /* Ajustar la altura al 100% del viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Centrar verticalmente */
  align-items: center;
  /* Centrar horizontalmente */
}

</style>
  