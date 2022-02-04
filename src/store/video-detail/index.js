export default {
  namespaced: true,
  state: {
    selectedVideo: null,
  },
  getters: {
    selectedVideo: state => state.selectedVideo,
  },
  mutations: {
    SET_VIDEO (state, video) {
      state.selectedVideo = video
    }
  },
  actions: {
    async setSelectedVideo({ commit }, video) {
      commit('SET_VIDEO', video)
    }
  }
}
