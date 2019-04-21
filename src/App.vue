<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navigationBar from './components/navigationBar'

  export default {
    name: 'app',
    components: {
      'nav-bar': navigationBar
    },

    data() {
      return {}
    }
  }
</script>

<style>

</style>
