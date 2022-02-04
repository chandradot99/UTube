import { createStore } from 'vuex'
import Home from './home'
import Sidebar from './sidebar'
import VideoDetail from './video-detail'

export default createStore({
  modules: {
    Home,
    Sidebar,
    VideoDetail
  }
})
