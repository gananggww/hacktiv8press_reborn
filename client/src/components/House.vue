<template>
  <div class="ui container">
    <button @click="showform" type="button" class="ui fluid button">Create</button>
    <div class="ui segment">
      <Createform v-show="active === true"/>
    </div>
    <div class="ui stackable grid two column">
      <div class="four wide column">
        <Sidebarx/>
      </div>
      <div class="twelve wide column">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebarx from '@/components/Sidebarx'
import Createform from '@/components/Createform'
export default {
  data () {
    return {
      active: false
    }
  },
  components: {
    Createform,
    Sidebarx
  },
  methods: {
    showform () {
      this.active = true
    }
  }
}
</script>

<style lang="css">
</style>
