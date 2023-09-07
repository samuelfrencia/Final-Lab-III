<template>
  <div>
    <!--NAVBAR-->
    <navbarViewLogin></navbarViewLogin>
    <br><br><br>
    <!--VALIDACION-->
    <div class="alert alert-danger d-flex align-items-center container" role="alert" v-if="correcto == false" id="alertWarning">
      <div>
        ERROR: El usuario debe contener al menos una mayúscula, una minúscula y un número
      </div>
    </div>
    <!--INICIO SECION-->
    <div class="loginCentrado">
      <div class="card">
        <div class="card-header">
          <h3>Iniciar sesión</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm" id="loginForm">
            <label for="usuario" class="usuario">Usuario:</label>
            <input type="text" v-model="usuario" id="usuario" required />
            <button type="submit" id="loginButton">Ingresar</button>
          </form>
        </div>
      </div>
    </div>

    <br><br><br><br>
    <!--FOOTER-->
    <footerViewLogin></footerViewLogin>
  </div>
</template>
  
<script>
import navbarViewLogin from '@/components/navbarViewLogin.vue';
import footerViewLogin from '@/components/footerViewLogin.vue';
export default {
  data() {
    return {
      usuario: '',
      correcto: true,
    };
  },
  methods: {
    submitForm() {
      const validacion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;
      if (validacion.test(this.usuario)) {
        localStorage.setItem('user', JSON.stringify(this.usuario))
        this.$router.push('/inicio');
        this.correcto = true;
      } else {
        this.correcto = false;
      }
    }
  },
  components: {
    navbarViewLogin,
    footerViewLogin
  }
};
</script>
  
<style scoped>
#alertWarning{
  display: flex;
  justify-content: center;
  width: 50%;
}
</style>