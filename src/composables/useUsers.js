import { ref, watch } from "vue";

const userList = ref([]);

const namePattern = /[A-Z][a-z]+/g;
const passPattern = /[]/g;
const letterPattern = /[A-Z]/g

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

function checkLen(userData) {
  let answer = "";

  if (userData.length < 4) {
    answer = "TooShortError";
  } else if (userData.length > 10) {
    answer = "TooLongError";
  } else {
    answer = "OK";
  }

  return answer;

}

function findSpace(testStr) {

  for (let i = 0; i < testStr.length; i++) {
    if (testStr.charAt(i) == " ") {
      return "SpaceError";
    }
  }

  return "SignError";
}

function validateName(dataStr) {
  if (dataStr.length === 0) {
    return "EmptyError";
  } else {
    const len = checkLen(dataStr);
    if (len != "OK") {
      return len;
    } else {
      const patternCheck = dataStr.match(namePattern);
      console.log(dataStr.charAt(0))
      //console.log(letterPattern.test(dataStr.charAt(0)))
      if (!patternCheck || patternCheck[0].length < dataStr.length) {
        if (letterPattern.test(dataStr[0]) == false) {
          // console.log(letterPattern.test(dataStr[0]));
          
          return "LetterError";
        } else {
          // console.log(letterPattern.test(dataStr[0]));
          const isSpace = findSpace(dataStr);
          return isSpace;
        }
      } else {
        return "OK";
      }
    }
  }
}

function findUserIndex(id) {
  for (let i = 0; i < userList.value.length; i++) {
    if (userList.value[i].id == id) {
      return i;
    }
  }
}

export default function useUsers() {
  return { userList, addUser, delUser, compareUser, validateName, };
}
