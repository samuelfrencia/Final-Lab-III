<template>
  <div>
    <!--NAVBAR-->
    <navbarViewLogin></navbarViewLogin>

    <!--INICIO SECION-->
    <div class="loginCentrado">
      <div class="card">
        <div class="card-header">
          <h3>Iniciar sesión</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <label for="usuario" class="usuario">Usuario:</label>
            <input type="text" v-model="usuario" id="usuario" />
            <button type="submit" id="loginButton">Ingresar</button>
          </form>
        </div>
      </div>
    </div>

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
    };
  },
  methods: {
    submitForm() {
      if (this.usuario === '') {
        alert('Por favor, ingresa el usuario');
      } else {
        localStorage.setItem('user', JSON.stringify(this.usuario))
        this.$router.push('/inicio'); 
      }
    }
  },
  components: { navbarViewLogin,
                footerViewLogin       
    }
};
</script>
  
  