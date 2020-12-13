<template>
  <button :style="style">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    width: {
      type: String,
      default: "162"
    },
    height: {
      type: String,
      default: "55"
    },
    color: {
      type: String,
      default: "#F4E3EB"
    },
    active: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      default: "15"
    }
  },
  computed: {
    style() {
      return {
        height: this.height + "px",
        width: this.width + "px",
        "border-radius": this.radius + "px",
        "background-color": this.active ? this.color : "#FFFFFF"
      };
    }
  }
};
</script>

<style lang="sass" scoped>
button
  display: flex
  align-items: center
  justify-content: center
  font-weight: bold
  font-size: 17px
  border: none
  height: 55px
  width: 162px
  border-radius: 15px
  padding: 0
  background-color: #F4E3EB
  margin: 10px 0 10px 0
</style>
