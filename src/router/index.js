import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import InicioView from '../views/InicioView.vue'
import CompraVentaView from '../views/CompraVentaView.vue'
import MisCryptoView from '../views/MisCryptoView.vue'
import MovimientosView from '../views/MovimientosView.vue'
import InversionesView from '../views/InversionesView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/compraventa',
    name: 'compraventa',
    component: CompraVentaView
  },  
  {
    path: '/miscrypto',
    name: 'miscrypto',
    component: MisCryptoView
  },
  {
    path: '/movimientos',
    name: 'movimientos',
    component: MovimientosView
  },
  {
    path: '/inversiones',
    name: 'inversiones',
    component: InversionesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
