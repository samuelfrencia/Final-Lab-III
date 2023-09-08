<template>
  <div>
    <!--NAVBAR-->
    <navbarViewLogin></navbarViewLogin>
    <br><br><br><br>
    <!--VALIDACION-->
    <div class="alert alert-danger d-flex align-items-center container" role="alert" v-if="correcto == false"
      id="alertWarning">
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
            <input class="input-group-text" type="text" v-model="usuario" id="usuario" required placeholder="Ingrese usuario" autocomplete="off" style="width: 100%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);"/>
            <div class="content">
              <p>El usuario debe contener:</p>
              <ul class="requirement-list">
                <li v-for="(requirement, index) in requirements" :key="index"
                  :class="{ valid: isRequirementValid(requirement.regex) }" 
                  style=""
                  >
                  <span>{{ requirement.label }}</span>
                </li>
              </ul>
            </div>
            <button type="submit" id="loginButton">Ingresar</button>
          </form>
        </div>
      </div>
    </div>

    <br><br><br>
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
      showusuario: false,
      requirements: [
        { regex: /[0-9]/, label: 'Un numero (0...9)' },
        { regex: /[a-z]/, label: 'Letra en minúscula (a...z)' },
        { regex: /[A-Z]/, label: 'Letra en mayúscula (A...Z)'  },
      ],
    };
  },
  methods: {

    isRequirementValid(regex) {
      return regex.test(this.usuario);
    },
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
#alertWarning {
  display: flex;
  justify-content: center;
  width: 50%;
}
/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.content {
  margin: 20px 0 10px;
}
.content p {
  color: black;
  font-size: 1.2rem;
}
.requirement-list li {
  font-size:1rem;
  list-style: none;
  display: flex;
  align-items: left;
}

.requirement-list li i {
  width: 20px;
  color: #aaa;
  font-size: 0.6rem;
}

.requirement-list li span {
  margin-left: 12px;
  color: black;
}

.requirement-list li.valid span {
  color: darkgrey;
}

@media screen and (max-width: 500px) {
  .content p {
    font-size: 1.15rem;
  }
  .requirement-list li {
    font-size: 1.1rem;
  }
  .requirement-list li span {
    margin-left: 7px;
  }
}</style>