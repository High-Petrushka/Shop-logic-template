<script setup>
import { RouterView } from "vue-router";
import HeaderMenu from "./components/HeaderMenu.vue";
</script>

<template>
  <header>
    <HeaderMenu />
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>

<style scoped></style>
