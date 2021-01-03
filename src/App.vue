<template>
  <div class="app">
    <base-toaster></base-toaster>
    <router-view />
  </div>
</template>

<script>
import BaseToaster from './components/base/BaseToaster.vue'
export default {
  components: { BaseToaster }
}
</script>

<style>
#app,
.app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
</style>
