import axios from 'axios'
// import Categories from './../categories'

export default {
  namespaced: true,
  state: {
    categories: [],
    selectedCategory: null,
    params: {
      regionCode: 'IN',
      key: 'AIzaSyAAT9Mvxmw2_WuRXdw9X1fcucole2iS17k'
    }
  },
  getters: {
    categories: state => state.categories,
    selectedCategory: state => state.selectedCategory
  },
  mutations: {
    LOAD_CATEGORIES (state, categories) {
      state.categories = categories
    },
    SET_CATEGORY (state, category) {
      state.selectedCategory = category
    },
    SET_CATEGORIES (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    async loadCategories ({ commit, state }) {
      let url = `https://youtube.googleapis.com/youtube/v3/videoCategories`
      let params = state.params
      axios.get(url, { params }).then((response) => {
        let items = (response.data.items).filter((item) => {
          return item.snippet.assignable
        })
        commit('LOAD_CATEGORIES', items)
      })
      // let items = (Categories.items).filter((item) => {
      //   return item.snippet.assignable
      // })
      // commit('LOAD_CATEGORIES', items)
    },
    async selectCategory ({ commit}, payload) {
      commit('SET_CATEGORY', payload)
    },
    async setCategories({ commit }, payload) {
      commit('SET_CATEGORIES', payload)
    }
  }
}
