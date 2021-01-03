<template>
  <div class="container">
    <BaseIcon width="178" height="178" color="#EDF0F9" :active="true" radius="25" />
    <div class="info"><slot /></div>
  </div>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue'

export default {
  name: 'BasePlantCard',
  components: { BaseIcon }
}
</script>

<style lang="sass" scoped>
.container
  display: flex
  align-items: center
  height: 224px
  width: 600px
  border-radius: 30px
  background-color: #FFFFFF
  margin: 10px 0 10px 0
  & .info
</style>
