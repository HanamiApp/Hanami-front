<template>
  <div>
    <input placeholder="Insert Email" type="email" v-model="email" />
    <input placeholder="Insert Password" type="password" v-model="password" />
    <button @click="authentication()">Login</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    async authentication() {
      if (this.email != "" && this.password != "") {
        let data = { email: this.email, password: this.password };
        this.login({ data }) //da vedere data perchè passata così
          //await this.login({data}) <= se non funziona il reject e cazzi e mazzi
          .then(() => this.$router.push("/home"))
          .catch(err => console.log(err));
      } else {
        console.log("Riloggati");
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
