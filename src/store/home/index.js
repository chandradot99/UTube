import axios from 'axios'
// import Videos from './../videos'

export default {
  namespaced: true,
  state: {
    videos: [],
    params: {
      part: 'snippet,contentDetails',
      regionCode: 'IN',
      chart: 'mostPopular',
      maxResults: 50,
      key: 'AIzaSyAAT9Mvxmw2_WuRXdw9X1fcucole2iS17k'
    }
  },
  getters: {
    videos: state => state.videos,
  },
  mutations: {
    SET_VIDEOS (state, videos) {
      state.videos = videos
    },
    UPDATE_PARAMS (state, params) {
      state.params = params
    },
    CLEAR_PARAMS (state, params) {
      state.params = params
    }
  },
  actions: {
    async loadVideos({ commit, state }) {
      let url = `https://youtube.googleapis.com/youtube/v3/videos`
      let params = state.params
      axios.get(url, { params }).then((response) => {
        let items = response.data.items
        commit('SET_VIDEOS', items)
      })
      // let items = Videos.items
      // commit('SET_VIDEOS', items)
    },
    async updateParams({ commit, state }, params) {
      params = Object.assign({}, state.params, params )
      commit('UPDATE_PARAMS', params)
    },
    async clearParams({ commit }) {
      let params = {
        part: 'snippet,contentDetails',
        regionCode: 'IN',
        chart: 'mostPopular',
        maxResults: 50,
        key: 'AIzaSyAAT9Mvxmw2_WuRXdw9X1fcucole2iS17k'
      }
      commit('CLEAR_PARAMS', params)
    }
  }
}
