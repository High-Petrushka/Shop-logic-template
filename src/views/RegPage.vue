<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";

import useUsers from "../composables/useUsers";

const local = reactive({
  inpName: "",
  inpPassword: "",
  isError: { name: false, pass: false },
  nameError: "",
  passError: "",
  errorHeight: { name: "0px", pass: "0px" },
  changeRoute: 0,
});

const router = useRouter();
const addNewUser = useUsers().addUser();

function compareError(code) {
  let answer = "";

  switch (code) {
    case "EmptyError":
      answer = "Required to be filled!";
      break;
    case "TooShortError":
      answer = "Has to include at least 4 signs!";
      break;
    case "TooLongError":
      answer = "Hasn't to be longer than 10 signs!";
      break;
    case "LetterError":
      answer = "First letter required to be capital!";
      break;
    case "SpaceError":
      answer = "Name shouldn't include any spaces!";
      break;
    case "NameSignError":
      answer = "Name should include only letters!";
      break;
    case "PassSignError":
      answer = "Only letters, digits, '!' & '?' marks afforded!";
      break;
    case "LackSignError":
      answer = "Must include a letter, a digit, a '!' & a '?' mark!";
  }

  return answer;
}

function checkName(userName) {
  const answer = useUsers().validateName(userName);

  if (answer == "OK") {
    local.changeRoute++;
  } else {
    local.nameError = compareError(answer);
    local.isError.name = true;
    local.errorHeight.name = "21px";
    return 0;
  }
}

function checkPass(userPass) {
  const answer = useUsers().validatePassword(userPass);

  if (answer == "OK") {
    local.changeRoute++;
  } else {
    local.passError = compareError(answer);
    local.isError.pass = true;
    local.errorHeight.pass = "21px";
    return 0;
  }
}

function clearError(target) {
  local.isError[target] = false;
  local[`${target}Error `] = "";
  local.errorHeight[target] = "0px";
}

function checkData() {
  checkName(local.inpName);
  checkPass(local.inpPassword);

  if (local.changeRoute == 2) {
    useUsers().addUser(local.inpName, local.inpPassword);

    local.inpName = "";
    local.inpPassword = "";
    local.changeRoute = 0;

    router.push({ name: "Auth" });
  } else {
    local.changeRoute = 0;
  }
}
</script>

<template>
  <div class="cont">
    <div class="wrapper">
      <form class="reg__form">
        <div class="title__box">
          <h1>Sign up</h1>
        </div>
        <div class="input__box">
          <div class="field__cont">
            <h3 class="inp__title">User name</h3>
            <input class="static__inp" :class="{ error__inp: local.isError.name }" @input="clearError('name')"
              type="text" autocomplete="off" data-1p-ignore data-lpignore="true" data-protonpass-ignore="true"
              v-model="local.inpName" />
            <div class="error__box" :style="{ height: local.errorHeight.name }">
              <p class="error__text">{{ local.nameError }}</p>
            </div>
          </div>
          <div class="field__cont">
            <h3 class="inp__title">Password</h3>
            <input class="static__inp" :class="{ error__inp: local.isError.pass }" @input="clearError('pass')"
              type="Password" autocomplete="off" data-1p-ignore data-lpignore="true" data-protonpass-ignore="true"
              v-model="local.inpPassword" />
            <div class="error__box" :style="{ height: local.errorHeight.pass }">
              <p class="error__text">{{ local.passError }}</p>
            </div>
          </div>
        </div>
        <div class="button__box">
          <button class="reversed__btn" @click.prevent="checkData">
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
  margin-bottom: 0.2rem;
}

.error__box {
  width: 100%;
  height: 2.1rem;

  text-align: center;
  overflow: hidden;

  transition: height 0.5s ease;
}

.button__box {
  display: flex;
  justify-content: center;
}
</style>
