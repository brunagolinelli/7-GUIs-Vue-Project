import { createRouter, createWebHistory } from 'vue-router'
import cellsHome from "../views/cels/cellsHome.vue"
import circleDrawer from "../components/circleDrawer.vue"
import counter from "../components/counter.vue"
import crud from "../components/crud.vue"
import flight from "../components/flight.vue"
import temperatureConvert from "../components/temperatureConvert.vue"
import timer from "../components/timer.vue"
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cells',
    name: 'Cells',
    component: cellsHome
  },
  {
    path: '/circle-drawer',
    name: 'CircleDrawer',
    component: circleDrawer
  },
  {
    path: '/counter',
    name: 'Counter',
    component: counter
  },
  {
    path: '/crud',
    name: 'Crud',
    component: crud
  },
  {
    path: '/flight',
    name: 'Flight',
    component: flight
  },
  {
    path: '/temperature-convert',
    name: 'TemperatureConvert',
    component: temperatureConvert
  },
  {
    path: '/timer',
    name: 'Timer',
    component: timer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router




