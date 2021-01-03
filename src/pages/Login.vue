<template>
  <!-- LEFT -->
  <div class="left"></div>
  <!-- RIGHT -->
  <div class="right">
    <div class="container">
      <div class="__fields">
        <base-form-field>
          <base-input
            type="email"
            placeholder="email"
            :width="500"
            :height="70"
            @input="updateEmail"
          ></base-input>
        </base-form-field>
        <base-form-field>
          <base-input
            type="password"
            placeholder="password"
            :width="500"
            :height="70"
            @input="updatePassword"
          ></base-input>
        </base-form-field>
      </div>
      <base-button :width="500" :height="70" @click="authentication()">Login</base-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseButton from '../components/base/BaseButton.vue'
import BaseFormField from '../components/base/BaseFormField.vue'
import BaseInput from '../components/base/BaseInput.vue'
import { ToasterTypes } from '@/utils/toasterTypes'

export default {
  components: { BaseInput, BaseFormField, BaseButton },
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login', 'updateToaster']),
    updateEmail(event) {
      this.email = event.target.value
    },
    updatePassword(event) {
      this.password = event.target.value
    },
    async authentication() {
      if (this.email == '' || this.password == '') return
      let data = { email: this.email, password: this.password }
      const isLoggedIn = await this.login(data)
      if (isLoggedIn) {
        this.$router.push('/home')
      } else {
        this.updateToaster({
          active: true,
          type: ToasterTypes.ERROR,
          message: 'Credenziali errate'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.left {
  height: 100vh;
  width: 60vw;
  float: left;
}
.right {
  height: 100vh;
  width: 40vw;
  float: right;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 40vh;
  }
}
</style>
