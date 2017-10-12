<template>
  <div class="">
    <div class="ui form">
      <div class="field">
        <label>Title</label>
        <input v-model="article.title"></input>
      </div>
      <div class="field">
        <label>Category</label>
        <input v-model="article.category"></input>
      </div>
      <div class="field">
        <label>Sub Content</label>
        <textarea rows="2" v-model="article.sub_content"></textarea>
      </div>
      <div class="field">
        <label>Content</label>
        <textarea rows="2" v-model="article.content"></textarea>
      </div>
      <button type="button" class="ui button blue fluid" @click="goSubmit()">SUBMIT</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      article: {
        title: '',
        category: '',
        sub_content: '',
        content: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'postArticle'
    ]),
    goSubmit () {
      this.postArticle(this.article)
    }
  }
}
</script>

<style lang="css">
</style>
