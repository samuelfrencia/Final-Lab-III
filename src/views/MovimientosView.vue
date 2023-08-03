<template>
  <div>
    <!--NAVBAR-->
    <navbar-view></navbar-view>

    <!--MIS MOVIMIENTOS-->
    <div class="muestraDatos">
      <div class="row">
        <div class="col-md-1"></div>
        <div class=" col-md-10">
          <h2 style="text-align: center;">Mis movimientos</h2>
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

    <br><br><br><br>
    <!--FOOTER-->
    <FooterView></FooterView>
  </div>
</template>
  
<script>
import NavbarView from '@/components/navbarView.vue';
import FooterView from '@/components/footerView.vue';
export default {
    name: "App",
    components: { NavbarView,
                  FooterView
    }
};
</script>
  
<style>/* Estilos del archivo style.css */</style>
  