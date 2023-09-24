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
.spinner {
  font-size: 28px;
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
}

.spinner.center {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.spinner .spinner-blade {
  position: absolute;
  left: 0.4629em;
  bottom: 0;
  width: 0.074em;
  height: 0.2777em;
  border-radius: 0.0555em;
  background-color: transparent;
  -webkit-transform-origin: center -0.2222em;
  -ms-transform-origin: center -0.2222em;
  transform-origin: center -0.2222em;
  animation: spinner-fade9234 1s infinite linear;
}

.spinner .spinner-blade:nth-child(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
}

.spinner .spinner-blade:nth-child(2) {
  -webkit-animation-delay: 0.083s;
  animation-delay: 0.083s;
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}

.spinner .spinner-blade:nth-child(3) {
  -webkit-animation-delay: 0.166s;
  animation-delay: 0.166s;
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}

.spinner .spinner-blade:nth-child(4) {
  -webkit-animation-delay: 0.249s;
  animation-delay: 0.249s;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.spinner .spinner-blade:nth-child(5) {
  -webkit-animation-delay: 0.332s;
  animation-delay: 0.332s;
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}

.spinner .spinner-blade:nth-child(6) {
  -webkit-animation-delay: 0.415s;
  animation-delay: 0.415s;
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}

.spinner .spinner-blade:nth-child(7) {
  -webkit-animation-delay: 0.498s;
  animation-delay: 0.498s;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.spinner .spinner-blade:nth-child(8) {
  -webkit-animation-delay: 0.581s;
  animation-delay: 0.581s;
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}

.spinner .spinner-blade:nth-child(9) {
  -webkit-animation-delay: 0.664s;
  animation-delay: 0.664s;
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}

.spinner .spinner-blade:nth-child(10) {
  -webkit-animation-delay: 0.747s;
  animation-delay: 0.747s;
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}

.spinner .spinner-blade:nth-child(11) {
  -webkit-animation-delay: 0.83s;
  animation-delay: 0.83s;
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}

.spinner .spinner-blade:nth-child(12) {
  -webkit-animation-delay: 0.913s;
  animation-delay: 0.913s;
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}

@keyframes spinner-fade9234 {
  0% {
    background-color: #69717d;
  }

  100% {
    background-color: transparent;
  }
}

  </style>



