<template>
  <div class="ui container">
    <button type="button" class="ui fluid button">Create</button>
    <div class="ui segment">
      <Createform/>
    </div>
    <div class="ui segment">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Createform from '@/components/Createform'
export default {
  components: {
    Createform
  }
}
</script>

<style lang="css">
</style>
