<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div style="display: flex; height: 100;">
    <header class="header">
      <h1>Chance Stribling</h1>
      <h3>Web Developer</h3>
      <v-btn class="my-10" width="120px" variant="outlined" to="/experience">Experience</v-btn>
      <v-btn class="my-10" width="120px" variant="outlined" to="/skills">Skills</v-btn>
      <v-btn class="my-10" width="120px" variant="outlined" to="/">Projects</v-btn>
      
    </header>
    <div style="flex: 70%;">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 30%;
  position: sticky;
  top: 0;
}

</style>
