<template>
  <div class="video-detail-wrap">
    <div class="player-wrap">
      <Player :id="id" v-if="id" :key="id"/>
      <div class="item-info" v-if="selectedVideo">
        <div class="profile-image">
          <img src="https://streamtube.org/demo/fullwidth/wp-content/uploads/2021/08/avatar-16-150x150.jpg" alt="">
        </div>
        <div class="profile-info">
          <div class="description">{{getTitle()}}</div>
          <div class="extra-info">
            <div class="chanel-info">
              <font-awesome-icon :style="{ color: '#aaaaaa' }" icon="user" />
              <span>{{getChannelTitle()}}</span>
            </div>
            <div class="uploaded_time">
              <font-awesome-icon :style="{ color: '#aaaaaa' }" icon="calendar" />
              <span>{{getPublishedTime()}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="suggestions-wrap">
      <suggestions />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatDistance } from 'date-fns'
import Suggestions from './suggestions.vue'
import Player from './player.vue'

export default {
  name: 'VideoDetail',
  components: {
    Suggestions,
    Player
  },
  data () {
    return {
      id: null
    }
  },
  mounted () {
    this.id = this.$route.params.id
  },
  methods: {
    getChannelTitle () {
      return this.selectedVideo.snippet.channelTitle
    },
    getTitle() {
      return this.selectedVideo.snippet.title
    },
    getThumbnail() {
      return this.selectedVideo.snippet.thumbnails.high.url
    },
    getPublishedTime () {
      return formatDistance(new Date(this.selectedVideo.snippet.publishedAt), new Date(), { addSuffix: true })
    }
  },
  watch: {
    selectedVideo () {
      this.id = this.selectedVideo.id.videoId || this.selectedVideo.id
    }
  },
  computed: {
    ...mapGetters({
      selectedVideo: 'VideoDetail/selectedVideo'
    })
  }
}
</script>

<style lang="scss" scoped>
  .video-detail-wrap {
    display: flex;
    height: calc(100vh - 70px);
    .player-wrap {
      width: calc(100% - 350px);
      .item-info {
        display: flex;
        padding: 10px;
        .profile-image {
          margin-right: 20px;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
        .profile-info {
          span {
            padding-left: 5px;
            color: #aaaaaa;
            font-size: 14px;
          }
          .description {
            font-weight: 600;
            color: #212529;
            height: 44px;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 15px;
          }
          .chanel-info {
            padding: 5px 0;
          }
          .extra-info{
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
    .suggestions-wrap {
      width: 350px;
      height: 100%;
      overflow: scroll;
    }
  }
</style>

