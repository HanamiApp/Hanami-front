<template>
  <button :style="style">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    width: {
      type: String,
      default: '165'
    },
    height: {
      type: String,
      default: '55'
    },
    color: {
      type: String,
      default: '#F4E3EB'
    },
    active: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      default: '15'
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
button
  display: flex
  align-items: center
  justify-content: center
  font-weight: bold
  font-size: 17px
  border: none
  padding: 0
  margin: 10px
  transition: all 200ms linear
  & :hover
    cursor: pointer
</style>
