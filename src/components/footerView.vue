<template>
    <footer class="colorFooter">
      <div class="containerFooter">
        <div class="footer-columns">
          <div class="footer-column" style="width: auto;">
            <h3>Enlaces</h3>
            <ul>
              <li><router-link to="/inicio">Inicio</router-link></li>
              <li><router-link to="/compraventa">Comprar/Vender</router-link></li>
              <li><router-link to="/miscrypto">Mis Cryptos</router-link></li>
              <li><router-link to="/movimientos">Movimientos</router-link></li>
            </ul>
          </div>
          <div class="footer-column" style="width: auto;">
            <h3>Contacto</h3>
            <p>Dirección: Cordoba</p>
            <p>Teléfono: 3562-525252</p>
            <p>Email: worldcrypto@cryptos.com</p>
          </div>
          <div class="footer-column" style="width: auto;">
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
</template>

<script>
export default {
  name: 'FooterView',
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>

</style>
