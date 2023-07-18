<template>
    <div>
  <!--NAVBAR-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/login" class="nav-link"><img class="imgLogoNavBar" src="../assets/WorldCrypto.png" alt="Logo"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <router-link :to="{ path: '/login' }" :disabled="enlaceInicioDeshabilitado" class="nav-link">Inicio</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ path: '/compraventa' }" :disabled="enlaceCompraVentaDeshabilitado" class="nav-link">Comprar/Vender</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ path: '/misCrypto' }" :disabled="enlaceMisCryptoDeshabilitado" class="nav-link">Mis Crypto</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ path: '/movimientos' }" :disabled="{enlaceMovimientosDeshabilitado}" class="nav-link">Movimientos</router-link>
      </li>
    </ul>
      </div>
    </div>
  </nav>
  
      <!--INICIO SECION-->
      <div class="container">
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
      <footer class="colorFooter">
        <div class="containerFooter">
          <div class="footer-columns">
            <div class="footer-column">
              <h3>Enlaces</h3>
              <ul>
                <li><a href="login.html">Inicio</a></li>
                <li><a href="login.html">Comprar/Vender</a></li>
                <li><a href="login.html">Mis Cryptos</a></li>
                <li><a href="login.html">Movimientos</a></li>
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
                <li><a href="#"><img class="redes" src="img/face.png" alt=""></a></li>
                <li><a href="#"><img class="redes" src="img/tw.png" alt=""></a></li>
                <li><a href="#"><img class="redes" src="img/igg.png" alt=""></a></li>
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
        usuario: '',
        enlaceInicioDeshabilitado: true, // Cambia esta variable según tus necesidades
        enlaceCompraVentaDeshabilitado: true, // Cambia esta variable según tus necesidades
        enlaceMisCryptoDeshabilitado: true, // Cambia esta variable según tus necesidades
        enlaceMovimientosDeshabilitado: true, // Cambia esta variable según tus necesidades
      };
    },
    methods: {
      submitForm() {
        if (this.usuario === '') {
          alert('Por favor, ingresa el usuario');
        } else {
          localStorage.setItem('usuario', this.usuario);
          this.$router.push('/inicio'); // Redireccionar a la página de inicio
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Agrega los estilos CSS aquí */
  </style>
  