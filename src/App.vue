<template>
  <div id="app">
    <Header />
    <sidebar></sidebar>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/header'
import Sidebar from './components/sidebar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans');

  html, body {
    margin: 0px;
    font-family: 'Nunito Sans', sans-serif;
  }
  #app {
    width: 100vw;
    height: 100vh;
    font-family: 'Nunito Sans', sans-serif;
  }

  .main-container {
    margin-top: 70px;
    padding-left: 200px;
  }

  .ytp-expand-pause-overlay .ytp-pause-overlay {
    display: none !important;
  }
</style>
