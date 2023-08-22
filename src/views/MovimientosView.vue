<template>
  <div>
    <!--NAVBAR-->
    <navbar-view></navbar-view>

    <!--MIS MOVIMIENTOS-->
    <div class="muestraDatos">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h2 style="text-align: center;">Mis movimientos</h2>
          <table>
            <thead>
              <tr>
                <th>Venta/Compra</th>
                <th>Crypto</th>
                <th>Cantidad</th>
                <th>Fecha</th>
                <th>Precio compra</th>
                <th>Ganancias</th>
                <th>ID</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaccion in criptos" :key="transaccion._id">
                <td>{{ transaccion.action }}</td>
                <td>{{ transaccion.crypto_code.toUpperCase() }}</td>
                <td>{{ transaccion.crypto_amount }}</td>
                <td>{{ transaccion.datetime }}</td>
                <td>${{ transaccion.money }}</td>
                <td>${{ transaccion.ganancia }}</td>
                <td>{{ transaccion._id }}</td>
                <!-- Button trigger modal -->
                <td>
                  <button class="btn btn-info" id="btnInfo" data-bs-toggle="modal" data-bs-target="#ModalVer">
                    <img src="../assets/eye.svg" alt="">
                  </button>
                  <button class="btn btn-warning" id="btnEdit" data-bs-toggle="modal" data-bs-target="#ModalModificar">
                    <img src="../assets/pencil-square.svg" alt="">
                  </button>
                  <button class="btn btn-danger" @click="eliminarTransaccion(transaccion._id)" id="btnBorrar">
                    <img src="../assets/trash.svg" alt="">
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Modal VER -->
        <div class="modal fade" id="ModalVer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Datos de la transaccion</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" style="text-align: center;">
                <input name="" id="" style="margin: 2px;" disabled>{{ criptos.action }}<br>
                <input name="" id="" style="margin: 2px;" disabled>{{ criptos.crypto_code }}<br>
                <input name="" id="" style="margin: 2px;" disabled>{{ criptos.crypto_amount }}<br>
                <input name="" id="" style="margin: 2px;" disabled>{{ criptos.datetime }}<br>
                <input name="" id="" style="margin: 2px;" disabled>{{ criptos.money }}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal MODIFICAR -->
        <div class="modal fade" id="ModalModificar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar transaccion</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" style="text-align: center;">
                <input name="" id="" style="margin: 2px;">{{ criptos.action }}<br>
                <input name="" id="" style="margin: 2px;">{{ criptos.crypto_code }}<br>
                <input name="" id="" style="margin: 2px;">{{ criptos.crypto_amount }}<br>
                <input name="" id="" style="margin: 2px;">{{ criptos.datetime }}<br>
                <input name="" id="" style="margin: 2px;">{{ criptos.money }}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal BORRAR 
        <div class="modal fade" id="ModalBorrar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Estas seguro de eliminar la transaccion?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-footer">
                <button id="modalElim" class="btn btn-danger">Eliminar</button>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>-->




        <div class="col-md-1"></div>
      </div>
    </div>
    <br><br><br><br>
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
      buttons: [{ imgDelete: '../assets/trash.svg', imgEdit: '../assets/pencil-square.svg' }],
      criptos: [],
      usuario: '',
      fechaHoraDesdeAPI: "",

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
          console.log('Respuesta de la API:', response.data);

          this.criptos = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    },
    eliminarTransaccion() {
      axios.delete(`https://laboratorio3-f36a.restdb.io/rest/transactions/${this.criptos._id}`, {
        headers: {
          'x-apikey': '60eb09146661365596af552f'
        },
      })
        .then(response => {
          console.log('Dato ELIMINADO de la API:', response.data);
        })
        .catch(error => {
          console.error('Error al ELIMINAR dato:', error);
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
}</style>
  