<script setup>
import useUsers from "../composables/useUsers";
import { useRouter } from "vue-router";

const props = defineProps({
  userInfo: {},
});

const router = useRouter();

function exit() {
  useUsers().quit();
  router.push({ path: "/" });
}
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <div class="user__wrapper">
        <div class="user__box">
          <div class="title__box">
            <h1>Basic info</h1>
          </div>
          <div class="info__box">
            <div class="text__cont">
              <h3 class="user__title">Name:</h3>
              <p class="user__text">{{ props.userInfo.name }}</p>
            </div>
            <div class="text__cont">
              <h3 class="user__title">Role:</h3>
              <p class="user__text">{{ props.userInfo.role }}</p>
            </div>
          </div>
        </div>
        <div class="action__box">
          <button class="reversed__btn" @click.prevent="exit()">Exit</button>
          <button class="reversed__btn">Delete</button>
        </div>
      </div>
    </div>
    <div class="card"></div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
}

.wrapper {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10rem;
}

.user__wrapper {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 20%;
}

.user__box {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  row-gap: 3.2rem;
}

.info__box {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.text__cont {
  padding-right: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user__title {
  font-size: 1.8rem;
  font-weight: 600;
}

.user__text {
  font-size: 1.8rem;
  font-weight: 400;
}

.action__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
