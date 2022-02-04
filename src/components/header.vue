<template>
  <div class="header-wrap">
    <div @click="goToHome" class="logo-wrap">
      <img src="../assets/img/UTube-logos_black.png" alt="">
    </div>
    <div class="search-wrap">
      <input v-model="searchQuery" type="text" placeholder="Search" v-on:keyup.enter="onSearch">
      <font-awesome-icon @click="onSearch" icon="search" size="lg" :style="{ color: '#aaaaaa' }"  />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    ...mapActions({
      searchVideos: 'Home/searchVideos'
    }),
    goToHome () {
      this.$router.push({
        path: '/'
      })
    },
    onSearch () {
      this.goToHome()
      this.searchVideos(this.searchQuery)
    }
   }
}
</script>

<style lang="scss" scoped>
  .header-wrap {
    height: 70px;
    border-bottom: 1px solid #e9ecef!important;
    z-index: 10000;
    background: #fff;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    .logo-wrap {
      width: 120px;
      img {
        width: 100%;
        position: relative;
        top: 3px;
        cursor: pointer;
      }
    }
    .search-wrap {
      margin: 0 auto 0 auto;
      width: 450px;
      height: 35px;
      border: 1px solid #ced4da;
      border-radius: 35px;
      display: flex;
      align-items: center;
      padding: 5px 20px 5px 10px;
      input {
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        font-size: 18px;
        color: #555;
        &:focus-visible {
          outline: none;
        }
      }
    }
  }
</style>