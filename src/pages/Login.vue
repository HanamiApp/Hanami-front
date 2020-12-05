<template>
  <div>
    <input placeholder="Insert Email" v-model="email" />
    <input placeholder="Insert Password" v-model="password" />
    <button @click="authentication()">Login</button>
  </div>
</template>

<script>
import { login } from '@/services/auth.js'

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""      
    };
  },
  methods: {
    //vedere come chiamare le actions e come visualizzare gli store.state
    //mettere il token in un cookie
    async authentication() {
      if (this.email != "" && this.password != "") {
        login( this.email, this.password)
          .then( response => console.log(response.data))
          .catch( error => console.log(error));              
      } else {
        console.log("Riprovaci");
      }
    }
  }
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 25px;
  margin-top: 20px;
  right: 20px;
}
</style>
