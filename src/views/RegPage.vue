<script setup>
import { ref, reactive } from "vue";
import useUsers from "../composables/useUsers";

const local = reactive({
  inpName: "",
  inpPassword: "",
  isError: false,
});

const check = ref("");

function checkName(userName) {
  const answer = useUsers().validateName(userName);

  if (answer == "OK") {
    check.value = answer;
  } else {
    check.value = answer;
  }
}
</script>

<template>
  <div class="cont">
    <div class="wrapper">
      <form class="reg__form">
        <div class="title__box">
          <h1>Sign up {{ check }}</h1>
        </div>
        <div class="input__box">
          <div class="field__cont">
            <h3 class="inp__title">User name</h3>
            <input class="static__inp" type="text" autocomplete="off" data-1p-ignore data-lpignore="true"
              data-protonpass-ignore="true" v-model="local.inpName" />
            <div class="error__box"></div>
          </div>
          <div class="field__cont">
            <h3 class="inp__title">Password</h3>
            <input class="static__inp" type="Password" autocomplete="off" data-1p-ignore data-lpignore="true"
              data-protonpass-ignore="true" v-model="local.inpPassword" />
            <div class="error__box"></div>
          </div>
        </div>
        <div class="button__box">
          <button class="reversed__btn" @click.prevent="checkName(local.inpName)">
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: fit-content;
  height: fit-content;

  margin: 0 auto;
  padding: 7rem;

  background: var(--card-color);
  border-radius: 4rem;
  box-shadow: -3.2rem -3.2rem 0rem var(--shadow-color);
}

.reg__form {
  width: fit-content;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  row-gap: 3.2rem;
}

.field__cont {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button__box {
  display: flex;
  justify-content: center;
}
</style>
