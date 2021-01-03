<template>
  <div class="container" :style="styleContainer">
    <input class="__input" :class="`--${color}`" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
// TODO: aggiungere icona 'corretto' o 'errato' all'input
export default {
  name: 'BaseInput',
  props: {
    // data
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
    // style
    width: {
      type: [String, Number],
      default: '100'
    },
    height: [String, Number],
    color: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      // Style data
      styleContainer: {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.container {
  transition: all 200ms linear;
  position: relative;
  border: 0.3rem solid $white;
  border-radius: 1.3rem;
  .__input {
    width: 100%;
    height: 100%;
    padding: 0 6% 0 6%;
    box-sizing: border-box;
    transition: all 200ms linear;
    font-size: $input-text-size;
    border-radius: 1.1rem;
    &.--primary {
      border: 0.2rem solid $white;
      background-color: $white;
      box-shadow: 0 0 30px #00000010;
      color: $blue-light;
      &:focus-within {
        border-color: $blue-light;
      }
    }
    &::placeholder {
      color: $disabled-grey;
      font-weight: $placeholder-text-weight;
    }
    &:focus-within {
      outline: none;
    }
  }
  &:focus-within {
    border-color: $blue-light-50;
  }
}
</style>
