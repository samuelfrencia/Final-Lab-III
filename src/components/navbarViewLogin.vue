<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link to="/" class="nav-link"><img class="imgLogoNavBar" src="../assets/WorldCrypto.png"
            alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Comprar/Vender</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Mis Crypto</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Movimientos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
      };
    },
  };
  </script>
  
  