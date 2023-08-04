<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/inicio" class="nav-link"><img class="imgLogoNavBar" src="../assets/WorldCrypto.png"
          alt="Logo"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03" style="margin-top: 10px;">
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
       
        <button type="button" class="btn btn-info" style="margin-right: 10px;"><img style="margin-right: 5px;" src="../assets/person.svg">{{ usuario }}</button>
      
        <router-link to="/"> <img class="imagenCerrar"
            :src="isHovering ? require('../assets/door-closed-fill.svg') : require('../assets/door-closed.svg')" alt="Imagen"
            @mouseover="toggleHover(true)" @mouseout="toggleHover(false)"/></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      usuario: 'asd',
      isHovering: false,
    };
  },
  methods: {
    toggleHover(value) {
      this.isHovering = value;
    },
  },
};
</script>

<style scoped>
.imagenCerrar{
  height: 30px; 
  margin-right: 15px;  
  padding: 1px; 
  border-radius: 15%;
}
.imagenCerrar:hover{
  background-color: red;
}
</style>
