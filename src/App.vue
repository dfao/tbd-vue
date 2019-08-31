<template>
  <div id="app">
    <nav>
      <router-link to="/dogs">Perros</router-link> |
      <router-link to="/new-dog">Perro Nuevo</router-link>
    </nav>
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

</style>
