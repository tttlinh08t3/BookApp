<template>
  <div id="app">
     <router-view></router-view>
     <navbar></navbar>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import './assets/css/main.css'

export default {
  name: 'App',
  components: {
    'navbar': Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
