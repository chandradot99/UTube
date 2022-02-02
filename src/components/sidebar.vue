<template>
  <div class="sidebar-wrap">
    <ul>
      <li>
        <div class="header" :class="{'active': selectedSection === 'home'}" @click="selectSection('home')">
          <font-awesome-icon icon="home" size="lg" :style="{ color: '#555' }" />
          <span>Home</span>
        </div>
      </li>
      <li>
        <div class="header" :class="{'active': selectedSection === 'categories'}" @click="selectSection('categories')">
          <font-awesome-icon icon="video" size="lg" :style="{ color: '#555' }" />
          <span>Categories</span>
          <font-awesome-icon icon="angle-down" class="expand-collapse" size="lg" :style="{ color: '#555' }" />
        </div>
        <div class="list" v-if="selectedSection === 'categories'">
          <ul>
            <li v-for="(category, index) in categories" :key="index" @click="onSelectCategory(category)">
              <span>{{getCategoryName(category)}}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      selectedSection: 'home'
    }
  },
  mounted () {
    this.loadCategories()
  },
  methods: {
    ...mapActions({
      loadCategories: 'Sidebar/loadCategories',
      selectCategory: 'Sidebar/selectCategory',
      setCategories: 'Sidebar/setCategories',
      updateParams: 'Home/updateParams',
      clearParams: 'Home/clearParams',
      loadVideos: 'Home/loadVideos',
    }),
    getCategoryList () {
      let params = {
        part: 'snippet',
        regionCode: 'IN'
      }
      let url = `https://youtube.googleapis.com/youtube/v3/videoCategories?&key=AIzaSyAAT9Mvxmw2_WuRXdw9X1fcucole2iS17k`
      axios.get(url, { params }).then((response) => {
        this.setCategories(response.data.items)
      })
    },
    getCategoryName (category) {
      return category.snippet.title
    },
    onSelectCategory (category) {
      this.selectCategory(category)
      this.updateParams({
        videoCategoryId: category.id
      }).then(() => {
        this.loadVideos()
        this.$router.push({
          path: '/'
        })
      })
    },
    selectSection (section) {
      this.selectedSection = section
      if (section === 'home') {
        this.clearParams().then(() => {
          this.loadVideos()
          this.$router.push({
            path: '/'
          })
        })
      }
    }
  },
  computed: {
    ...mapGetters({
      categories: 'Sidebar/categories',
      selectedCategory: 'Sidebar/selectedCategory'
    })
  }
}
</script>

<style lang="scss" scoped>
  .sidebar-wrap {
    position: fixed;
    width: 200px;
    top: 70px;
    bottom: 0;
    left: 0;
    z-index: 10000;
    border-right: 1px solid #dee2e6!important;
    overflow: auto;
    ul {
      margin: 0;
      padding-left: 0;
      li {
        list-style: none;
      }
      .header {
        height: 45px;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px 10px;
        span {
          margin-left: 20px;
          color: #555;
          font-size: 15px;
        }
        .expand-collapse {
          margin: 0 0 0 auto;
        }
        &.active {
          background: #f6f7f7;
          color: #dc3545;
        }
        &:hover {
          background: #f6f7f7;
          span {
            color: #dc3545;
          }
        }
      }
      .list {
        ul {
          li {
            height: 35px;
            color: #555;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            padding: 0 5px 0 10px;
            &:hover {
              background: #f6f7f7;
              color: #dc3545;
            }
          }
        }
      }
    }
  }
</style>