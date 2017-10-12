<template lang="html">
  <div class="ui segment" >
    <div class="ui items">
      <div class="item" v-for="article in articlesx">
        <div class="image">
          <img src="/images/wireframe/image.png">
        </div>
        <div class="content">
          <a class="header">{{articles.title}}</a>
          <div class="meta">
            <span>{{articles.sub_content}}</span>
          </div>
          <div class="description">
            <p></p>
          </div>
          <div class="extra">
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getArticles'
    ]),
    ...mapState([
      'articles'
    ])
  },
  computed: {
    articlesx () {
      return this.articles()
    }
  }
}
</script>

<style lang="css">
</style>
