<script setup></script>

<template>
  <div class="cont">
    <div class="wrapper">
      <div class="title__box">
        <h1>Log In</h1>
      </div>
      <div class="input__box">
        <input type="text" />
        <input type="password" />
      </div>
      <div class="button__box">
        <button>Log in</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 600px;
  height: 800px;

  margin: 0 auto;
  padding: 2rem;

  background: var(--card-color);
  border-radius: 2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
}
</style>
