<template>
  <div id="app">
    <cookie-law></cookie-law>
  </div>
</template>

<script>
import CookieLaw from './components/CookieLaw'

export default {
  name: 'app',
  components: {
    CookieLaw
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
