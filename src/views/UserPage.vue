<script setup>
import { onMounted, reactive, ref } from "vue";
import UserPattern from "../components/UserPattern.vue";
import useUsers from "../composables/useUsers";

const local = reactive({
  userData: {},
});

onMounted(() => {
  const curUserId = ref(useUsers().getCurUserId());
  local.userData = useUsers().getUser(curUserId.value);
});
</script>

<template>
  <div class="cont">
    <UserPattern :userInfo="local.userData" />
  </div>
</template>

<style scoped></style>
