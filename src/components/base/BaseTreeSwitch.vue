<template>
  <div class="switch-container">
    <div class="icon" @click="changeActive(1)">
      <AppleIconTrue />
    </div>
    <div class="text" @click="changeActive(2)">
      all
    </div>
    <div class="icon" @click="changeActive(3)">
      <AppleIconFalse v-if="active != 3" />
      <AppleIconFalseActive v-if="active == 3" />
    </div>
    <div class="slide" :class="style()"></div>
  </div>
</template>

<script>
import AppleIconFalse from '@/assets/icons/AppleIconFalse.vue'
import AppleIconTrue from '@/assets/icons/AppleIconTrue.vue'
import AppleIconFalseActive from '@/assets/icons/AppleIconFalseActive.vue'

export default {
  name: 'BaseTreeSwitch',
  components: {
    AppleIconFalse,
    AppleIconTrue,
    AppleIconFalseActive
  },
  data() {
    return {
      active: 2
    }
  },
  methods: {
    changeActive(active) {
      this.active = active
      this.$emit('fruit', active)
    },
    style() {
      switch (this.active) {
        case 1:
          return 'apple'
        case 2:
          return 'all'
        case 3:
          return 'noApple'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.switch-container
  display: flex
  align-items: center
  justify-content: space-between
  position: relative
  width: 45%
  height: 90%
  background-color: #F4F4F4
  border-radius: 30px
  padding: 0 10px
  & .icon
    width: 36px
    height: 36px
    border-radius: 30px
  & .text
    width: 66px
    height: 36px
    border-radius: 50px
    font-size: 20px
  & .icon, .text
    display: flex
    border: 2px solid #FFFFFF
    align-items: center
    justify-content: center
    cursor: pointer
    box-shadow: 0px 0px 7px 0px rgba(236, 236, 236, 1)
    cursor: pointer
    z-index: 1
  & .slide
    position: absolute
    background-color: #FFFFFF
    height: 36px
    border-radius: 30px
    transition: all 200ms linear

.apple
  width: 36px
  left: 3.3%
.all
  width: 66px
  left: 40.5%
.noApple
  width: 36px
  left: 86.3%
</style>
