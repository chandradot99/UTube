<template>
  <div class="suggestions-container">
    <div class="columns">
      <div class="column" v-for="(video, index) in videos" :key="index">
        <suggestion-item :item="video"></suggestion-item>
      </div>
    </div>
  </div>
</template>

<script>
import SuggestionItem from './../../components/suggestionItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    SuggestionItem
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      videos: 'Home/videos',
    })
  }
}
</script>

<style lang="scss" scoped>
  .suggestions-container {
    .columns {
      .column {
        margin: 5px 10px 20px;
      }
    }
  }
</style>
