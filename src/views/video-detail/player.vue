<template>
  <div class="plyr__video-embed" id="player">
    <iframe
      :src="`https://www.youtube.com/embed/${id}?autoplay=1`"
      allowfullscreen
      allowtransparency
      allow="autoplay"
    ></iframe>
  </div>
</template>

<script>
import Plyr from 'plyr';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted() {
    new Plyr('#player')
  }
}
</script>

<style lang="scss" scoped>
  #player {
    border-radius: 4px;
    cursor: pointer;
  }
</style>