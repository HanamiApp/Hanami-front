<template>
  <div class="icon" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    width: {
      type: String,
      default: '49'
    },
    height: {
      type: String,
      default: '49'
    },
    color: {
      type: String,
      default: '#FAF1F6'
    },
    active: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      default: '13'
    }
  },
  computed: {
    style() {
      return {
        height: this.height + 'px',
        width: this.width + 'px',
        'border-radius': this.radius + 'px',
        'background-color': this.active ? this.color : '#FFFFFF'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.icon
  display: flex
  align-items: center
  justify-content: center
</style>
