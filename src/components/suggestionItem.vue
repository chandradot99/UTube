<template>
  <div class="list-item" @click="goToDetail">
    <div class="thumbnail">
      <img :src="getThumbnail()" alt="">
      <div class="thumbnail-hover">
        <font-awesome-icon size="3x" :style="{ color: '#00b3ff' }" icon="play" />
      </div>
    </div>
    <div class="item-info">
      <!-- <div class="profile-image">
        <img src="https://streamtube.org/demo/fullwidth/wp-content/uploads/2021/08/avatar-16-150x150.jpg" alt="">
      </div> -->
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
</template>

<script>
import { formatDistanceStrict } from 'date-fns'
import { mapActions } from 'vuex'

export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions({
      setSelectedVideo: 'VideoDetail/setSelectedVideo'
    }),
    goToDetail () {
      this.setSelectedVideo(this.item)
      let id = this.item.id.videoId || this.item.id
      this.$router.push({
        path: `/video/${id}`
      })
    },
    getChannelTitle () {
      return this.item.snippet.channelTitle
    },
    getTitle() {
      return this.item.snippet.title
    },
    getThumbnail() {
      return this.item.snippet.thumbnails.high.url
    },
    getPublishedTime () {
      return formatDistanceStrict(new Date(this.item.snippet.publishedAt), new Date(), { addSuffix: true })
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    width: 100%;
    display: flex;
    .thumbnail {
      position: relative;
      cursor: pointer;
      width: 200px;
      height: 100px;
      overflow: hidden;
      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        transition: transform 0.7s;
      }
      .thumbnail-hover {
        display: none;
        transition: 0.3s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
        .thumbnail-hover {
          display: block;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .item-info {
      margin-left: 10px;
      width: 150px;
      overflow: hidden;
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
          padding-right: 10px;
          overflow: hidden;
          height: 25px;
        }
        .extra-info{
          padding-top: 5px;
        }
      }
    }
  }

</style>