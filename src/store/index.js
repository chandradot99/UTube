import { createStore } from 'vuex'
import Home from './home'
import Sidebar from './sidebar'

export default createStore({
  modules: {
    Home,
    Sidebar
  }
})
