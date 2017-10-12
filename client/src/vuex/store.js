import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex)

const http = axios.create({
  baseURL: `http://localhost:3000`
})

const State = {

}

const Getters = {

}
const Mutations = {

}

const Actions = {
  postArticle (context, payload) {
    http.post('/', {
      title: payload.title,
      content: payload.content,
      mini_content: payload.mini_content,
      category: payload.category
    })
    .then(response => {
      context.commit('setPostArticle')
    })
  }
}

const store = new vuex.Store({
  State,
  Getters,
  Mutations,
  Actions
})

export default store
