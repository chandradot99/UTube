<template>
  <div class="home-container">
    <div class="columns">
      <div class="column" v-for="(video, index) in videos" :key="index">
        <list-item :item="video"></list-item>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './../../components/listItem.vue'
// import Videos from './videos'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ListItem
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      loadVideos: 'Home/loadVideos'
    })
  },
  mounted () {
    this.loadVideos()
  },
  watch: {
    selectedCategory () {
      // this.getList()
    }
  },
  computed: {
    ...mapGetters({
      videos: 'Home/videos',
      selectedCategory: 'Sidebar/selectedCategory'
    })
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    // width: 100%;
    // height: 100%;
    padding: 20px;
    .columns {
      display: flex;
      flex-wrap: wrap;
      .column {
        flex: 1 0 20%;
        margin: 5px 10px;
        height: 350px;
      }
    }
  }
</style>
