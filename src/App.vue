<template>
  <router-view/> 
</template>

<style>
*{
    margin: 0;
    padding: 0;
    font-size: 100%;
}
.imgLogoNavBar{
    width: 250px;
}
.cerrarSesion{
 
    color: white ;
}
.cerrarSesion:hover{
    color: red;
}

/*SECCION PRINCIPAL*/
.loginCentrado{
    display: flex;
    justify-content: center;
    align-items: center;
}
.card {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
} 
.card h2 {
    margin-top: 0;
}  
.card form {
    margin-top: 5px;
}
.card label,
.card input,
.card button {
    display: block;
    width: 100%;
    margin-bottom: 10px;
}
.card button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.card button:hover {
    background-color: #45a049;
}
.usuario{
    text-align: left;
}

/*FOOTER*/
footer {
    padding: 20px 0;
    color: white;
    font-size: 14px;
}
.containerFooter {
    max-width: 60%;
    margin: 0 auto;
}  
.footer-columns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
} 
.footer-column {
    width: 40%;
} 
h3 {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    
} 
.cambio {
  color: white;
  text-decoration: none;
}
.cambio:hover {
  color: #37E1E1;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
ul li {
    margin-bottom: 10px;
    
}
ul li a {
    color: white;
    text-decoration: none;
}
ul li a:hover {
    color: #37E1E1;
} 
.social-icons {
    display: flex;
    justify-content: center;
} 
.social-icons li {
    margin: 0 5px;
} 
.footer-text {
    text-align: center;
  }
.redes {
    width: 40px;
}
.colorFooter{
    background-color: #323232;
}

.muestraDatos{
    margin-bottom: 100px;
    margin-top: 100px;
}
  
/*COMPRA DE CRYPTOS*/
.cardCompra{
    border: 1px solid darkgray;
    border-radius: 15px;
    padding: 25px;
    text-align: center;

}
.btnComprarVender{
    width: 90px;
    padding: 6px;
    background-color: #323232;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.btnComprarVender:hover{
    background-color: black ;
}
#miSelect {
    border: 2px solid #ccc;
    padding: 5px;
  }
  
#miSelect:focus {
    border-color: black;
  }
  </style>



