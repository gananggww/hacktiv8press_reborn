import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex)

const http = axios.create({
  baseURL: `http://localhost:3000`
})

const state = {
  articles: []
}

const getters = {

}
const mutations = {
  setPostArticle (state, payload) {
    state.articles.unshift(payload)
  },
  setArticles (state, payload) {
    state.articles = payload
  }
}

const actions = {
  postArticle (context, payload) {
    http.post('/', {
      title: payload.title,
      content: payload.content,
      mini_content: payload.mini_content,
      category: payload.category
    }, {
      headers: {
        fbaccesstoken: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log(response)
      context.commit('setPostArticle', response)
    })
  },
  getArticles (context, payload) {
    http.get('/')
    .then(response => {
      context.commit('setArticles', response)
    })
  }
}

const store = new vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
