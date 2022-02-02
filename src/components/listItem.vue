<template>
  <div class="list-item" @click="goToDetail">
    <img :src="getThumbnail()" alt="">
    <div class="item-info">
      <div class="profile-image">
        <img src="https://streamtube.org/demo/fullwidth/wp-content/uploads/2021/08/avatar-16-150x150.jpg" alt="">
      </div>
      <div class="profile-info">
        <div class="description">{{getTitle()}}</div>
        <div class="chanel-info">
          <font-awesome-icon :style="{ color: '#aaaaaa' }" icon="user" />
          <span>{{getChannelTitle()}}</span>
        </div>
        <div class="extra-info">
          <div class="views">
            <font-awesome-icon :style="{ color: '#aaaaaa' }" icon="eye" />
            <span>73 views</span>
          </div>
          <div class="uploaded_time">
            <font-awesome-icon :style="{ color: '#aaaaaa' }" icon="calendar" />
            <span>5 months ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    goToDetail () {
      this.$router.push({
        path: `/video/${this.item.id}`
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
      cursor: pointer;
    }
    .item-info {
      display: flex;
      margin-top: 10px;
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

</style>