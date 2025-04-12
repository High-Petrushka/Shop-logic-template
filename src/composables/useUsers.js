import { ref, watch } from "vue";

const userList = ref([]);

try {
  if (localStorage.getItem('users') === null) {
    userList.value.push({
      id: 0,
      name: "Admin",
      password: "1234",
      role: "main",
    });
  } else {
    userList.value = JSON.parse(localStorage.getItem('users'));
  }
} catch (error) {
  userList.value.push({
    id: 0,
    name: "Admin",
    password: "1234",
    role: "main",
  });
}

watch(userList, (newValue) => {
  localStorage.setItem('users', JSON.stringify(newValue));
});

function addUser(userName, userPass) {
  let userId = userList[userList.value.length - 1].id + 1;

  userList.value.push({
    id: userId,
    name: userName,
    password: userPass,
    role: "user",
  });
}

function delUser(userId) {
  let index = findUserIndex(userId);

  userList.value.splice(index, 1);
}

function compareUser(userName, userPass) {
  for (let i = 0; i < userList.value.length; i++) {
    if (userList.value[i].name == userName) {
      if (userList.value[i].password == userPass) {
        return "Correct";
      } else {
        return "PasswordError";
      }
    }
  }

  return "LoginError";
}

function findUserIndex(id) {
  for (let i = 0; i < userList.value.length; i++) {
    if (userList.value[i].id == id) {
      return i;
    }
  }
}

export default function useUsers() {
  return { userList, addUser, delUser, compareUser };
}
