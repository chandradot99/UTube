import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/home'
import VideoDetail from '../views/video-detail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/video/:id',
    name: 'Video',
    component: VideoDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
