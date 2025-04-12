<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="cont">
    <nav class="menu">
      <div class="links">
        <div class="link__box">
          <RouterLink class="menu__link" :to="{ name: 'Auth' }">Log in</RouterLink>
        </div>
        <div class="link__box">
          <RouterLink class="menu__link" :to="{ name: 'Shop' }">Shop</RouterLink>
        </div>
      </div>
      <div class="links">
        <div class="link__box">
          <RouterLink class="menu__link" :to="{ name: 'User' }">Account</RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.menu {
  width: 100%;
  height: fit-content;

  padding: 2rem;

  border: 2px dashed #222;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.links {
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 2rem;
}

.link__box {
  background: var(--card-color);
  padding: 0.75rem 2rem;
  border-radius: 10rem;

  cursor: pointer;
  box-shadow: none;

  transition: 0.2s ease-out;
}

.link__box:hover {
  border-radius: 0.5rem;
}

.menu__link {
  font-size: 1.8rem;
  font-weight: 550;
  color: var(--font-color);
}
</style>
