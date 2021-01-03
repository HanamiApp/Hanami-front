<template>
  <button class="button" :class="`--${color}`" :style="style">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    // data
    active: {
      type: Boolean,
      default: false
    },
    // style
    width: {
      type: [String, Number],
      default: 165
    },
    height: {
      type: [String, Number],
      default: 55
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    style() {
      return {
        height: this.height + 'px',
        width: this.width + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.button {
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $input-text-size;
  border: none;
  transition: all 200ms linear;
  cursor: pointer;
  &.--primary {
    color: $white;
    background: linear-gradient(145deg, $blue-light, $blue-dark);
  }
  &:focus-within {
    outline: none;
  }
}
</style>
