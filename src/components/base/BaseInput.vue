<template>
  <div class="input-container" :style="styleContainer">
    <input :placeholder="placeholder" :style="styleInput" />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    width: {
      type: String,
      default: "100"
    },
    height: String,
    placeholder: String,
    textColor: {
      type: String,
      default: "A1A1A1"
    },
    radius: {
      type: String,
      default: "20"
    },
    backgroundColor: {
      type: String,
      default: "#F6F6F6"
    },
    fontSize: {
      type: String,
      default: "26"
    },
    fontWeight: {
      type: String,
      default: "normal"
    }
  },
  data() {
    return {
      // Style data
      styleContainer: {
        width: this.width + "%",
        height: this.height + "%",
        "border-radius": this.radius + "px"
      },
      styleInput: {
        color: this.textColor,
        "border-radius": this.radius + "px",
        "background-color": this.backgroundColor,
        border: "2px solid " + this.backgroundColor,
        "font-size": this.fontSize + "px",
        "font-weight": this.fontWeight
      }
    };
  }
};
</script>

<style lang="sass" scoped>
.input-container
  position: relative
input
   width: 100%
   height: 100%
   padding: 0 6% 0 6%
   box-sizing: border-box
   transition: all 200ms linear
   &:focus-within
      outline: none
</style>
