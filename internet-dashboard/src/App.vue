<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MainView from './views/MainView.vue'
import adamKoolUnsplash from './assets/adamKoolUnsplash.jpg'
</script>

<template>
  <div id="app-main-div" class="full-screen background-img motion" :style="adamKoolUnsplash">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <main-view />
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
