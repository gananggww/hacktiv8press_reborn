<template>
  <div class="">
    <div class="ui form">
      <div class="field">
        <label>Title</label>
        <textarea rows="2"></textarea>
      </div>
      <div class="field">
        <label>Sub Content</label>
        <textarea></textarea>
      </div>
      <div class="field">
        <label>Category</label>
        <textarea></textarea>
      </div>
      <div class="field">
        <label>Content</label>
        <textarea></textarea>
      </div>
      <button type="button" class="ui button fluid" @click="postArticle"></button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'postArticle'
    ])
  }
}
</script>

<style lang="css">
</style>
