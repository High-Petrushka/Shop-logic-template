<script setup>
import { reactive } from "vue";
import useUsers from "../composables/useUsers";
import { useRouter } from "vue-router";

const local = reactive({
  inpName: "",
  inpPassword: "",
  checked: "",
  isError: false,
  errorHeight: "0px",
});

const router = useRouter();

function clearInp() {
  local.inpName = "";
  local.inpPassword = "";
}

function clearError() {
  local.isError = false;
  local.errorHeight = "0px";
}

function handleError(error) {
  if (error.state == "Correct") {
    useUsers().setUser(error.userId);
    router.push({ path: `/user/${local.inpName}` });
  } else {
    local.isError = true;
    local.errorHeight = "21px";
  }

  switch (error) {
    case "Correct":
      console.log("Correct");
      break;
    case "PasswordError":
      console.log("PasswordError");
      break;
    case "LoginError":
      console.log("LoginError");
      break;
  }
}
</script>

<template>
  <div class="cont">
    <div class="wrapper">
      <form class="auth__form" autocomplete="off">
        <div class="title__box">
          <h1>Log In</h1>
        </div>
        <div class="input__box">
          <div class="field__cont">
            <h3 class="inp__title">User name</h3>
            <input
              class="static__inp"
              :class="{ error__inp: local.isError }"
              type="text"
              autocomplete="off"
              data-1p-ignore
              v-model="local.inpName"
              @input="clearError"
            />
          </div>
          <div class="field__cont">
            <h3 class="inp__title">Password</h3>
            <input
              class="static__inp"
              :class="{ error__inp: local.isError }"
              type="password"
              autocomplete="off"
              data-1p-ignore
              data-lpignore="true"
              data-protonpass-ignore="true"
              v-model="local.inpPassword"
              @input="clearError"
            />
          </div>
          <div class="error__cont" :style="{ height: local.errorHeight }">
            <p class="error__text">Incorrect login or password</p>
          </div>
        </div>
        <div class="button__box">
          <button
            class="reversed__btn"
            @click.prevent="
              handleError(
                useUsers().compareUser(local.inpName, local.inpPassword),
              );
              clearInp();
            "
          >
            Log in
          </button>
        </div>
        <div class="reg__box">
          <p class="reg__quest">
            New to Us?
            <RouterLink :to="{ name: 'Reg' }">Create an account</RouterLink>
          </p>
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

.auth__form {
  width: fit-content;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 3.2rem;
}

.title__box {
  width: 100%;
  height: fit-content;
}

.input__box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.field__cont {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.error__cont {
  height: 0px;
  overflow: hidden;

  display: flex;
  justify-content: center;

  transition: height 0.5s ease;
}

.button__box {
  display: grid;
  place-items: center;
}

.reg__box {
  text-align: center;
}

.reg__quest {
  font-size: 1.4rem;
}
</style>
