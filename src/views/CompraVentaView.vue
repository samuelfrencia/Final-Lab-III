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
  
      <div id="app">
        <div class="muestraDatos">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-2 cardCompra">
              <h3 style="text-align: center;">Compra</h3>
              <input type="number" name="" id="" class="input-group-text"
                style="width: 200px; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
              <br>
              <select class="form-select" id="miSelect"
                style="width: 200px; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
                <option selected disabled>Cripto a comprar</option>
                <option value="bitcoin">BITCOIN</option>
                <option value="ethereum">ETHEREUM</option>
                <option value="usdt">USDT</option>
                <option value="dai">DAI</option>
              </select>
              <br>
              <input type="number" name="" id="cantidadCompra" class="input-group-text" disabled
                style="width: 200px; " placeholder="Precio total">
              <br>
              <button class="btnComprarVender" id="btnVender">Comprar</button>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2 cardCompra">
              <h3 style="text-align: center;">Venta</h3>
              <input type="number" name="" id="" class="input-group-text"
                style="width: 200px; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
              <br>
  
              <select class="form-select" id="miSelect"
                style="width: 200px; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);">
                <option selected disabled>Cripto a vender</option>
                <option value="bitcoin">BITCOIN</option>
                <option value="ethereum">ETHEREUM</option>
                <option value="usdt">USDT</option>
                <option value="dai">DAI</option>
              </select>
              <br>
              <input type="number" name="" id="cantidadVenta" class="input-group-text" disabled
                style="width: 200px;" placeholder="Precio total">
              <br>
              <button class="btnComprarVender" id="btnVender">Vender</button>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>
  
      <br><br>
  
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
    name: 'App',
    data() {
      return {};
    },
    mounted() {
      fetch('https://criptoya.com/api/bitso/btc/ars/0.1')
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((objeto) => {
          console.log(objeto.totalAsk);
        });
    },
  };
  </script>
  
  <style scoped>
  /* Aquí van los estilos del archivo style.css */
  </style>
  