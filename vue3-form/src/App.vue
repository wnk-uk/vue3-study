<template>
  <form action="" @submit.prevent="submitForm">
      <div>
          <label for="userId">ID: </label>
          <input id="userId" type="text" v-model="username">
      </div>
      <div>
          <label for="password">PW: </label>
          <input id="password" type="text" v-model="password">
      </div>
      <button type="submit">로그인</button>
  </form>
</template>

<script>
  //import 라이브러리이름 form '패키지이름'
  import axios from 'axios';
import { ref } from 'vue';

  export default {
    // data() {
    //   return {
    //     username : '',
    //     password: '',
    //   }
    // },
    // methods: {
    //     submitForm() {
    //       // event.preventDefault();
    //       //fake api
    //       const data = {
    //         username: this.username,
    //         password: this.password,
    //       }
    //       axios.post('https://jsonplaceholder.typicode.com/users/', data)
    //       .then(response => {
    //         console.log(response);
    //       })
    //       //console.log('제출됨');
    //     }
    //   }
    //컴포지션 api
      setup() {
        // data
        var username = ref('');
        var password = ref('');

        var submitForm = () => { 
          axios.post('https://jsonplaceholder.typicode.com/users/', {
            username: username.value,
            password: password.value
          }).then(response => {
            console.log(response);
          })
        }

        return { username, password, submitForm }
      },
      methods: {
        logText() {

        }
      }
  }
</script>

<style scoped>

</style>