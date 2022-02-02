<template>
  <div class="video-detail-wrap">
    <div class="plyr__video-embed" id="player">
      <iframe
        :src="`https://www.youtube.com/embed/${id}&rel=0`"
        allowfullscreen
        allowtransparency
        allow="autoplay"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Plyr from 'plyr';

export default {
  name: 'VideoDetail',
  components: {
  },
  data () {
    return {
      id: ''
    }
  },
  mounted () {
    this.id = this.$route.params.id
  },
  updated () {
    this.$nextTick(this.debounce(() => {
      new Plyr('#player')
    }, 250))
  },
  methods: {
    debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }
  }
}
</script>

<style lang="scss" scoped>
  .video-detail-wrap {
    padding: 20px;
  }
  #player {
    // width: 90%;
    margin: 0 auto;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

