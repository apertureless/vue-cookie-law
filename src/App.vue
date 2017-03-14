<template>
  <div id="app">
    <select v-model="theme">
      <option value="base">Base</option>
      <option value="blood-orange">Blood Orange</option>
      <option value="dark-lime">Dark Lime</option>
      <option value="royal">Royal</option>
      <option value="base--rounded">Base Round</option>
      <option value="blood-orange--rounded">Blood Orange Round</option>
      <option value="dark-lime--rounded">Dark Lime Round</option>
      <option value="royal--rounded">Royal Round</option>
    </select>
    <cookie-law :theme="theme"></cookie-law>
  </div>
</template>

<script>
import CookieLaw from './components/CookieLaw'

export default {
  name: 'app',
  components: {
    CookieLaw
  },
  data () {
    return {
      theme: 'base'
    }
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

select {
  width: 400px;
  height: 40px;
  font-size: 18px;
}
</style>
