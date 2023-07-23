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

    <!--MIS CRYPTOS-->
    <div class="muestraDatos">
      <div class="row">
        <div class="col-md-1"></div>
        <div class=" col-md-10">
          <h2 style="text-align: center;">Mi billetera</h2>
          <table>
            <tr>
              <th>Crypto</th>
              <th>Cantidad</th>
              <th>Precio compra</th>
              <th>Compra</th>
            </tr>
            <tr>
              <td>Bitcoin</td>
              <td>0</td>
              <td>515151</td>
              <td>51515151</td>
            </tr>
            <tr>
              <td>Ethereum</td>
              <td>0</td>
              <td>515151</td>
              <td>51515151</td>
            </tr>
            <tr>
              <td>Usdt</td>
              <td>0</td>
              <td>515151</td>
              <td>51515151</td>
            </tr>
            <tr>
              <td>Dai</td>
              <td>0</td>
              <td>515151</td>
              <td>51515151</td>
            </tr>
          </table>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>

    <br><br><br>

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
export default {
  name: 'App',
};
</script>
  
<style>
/* Estilos del archivo style.css */
</style>
  
  