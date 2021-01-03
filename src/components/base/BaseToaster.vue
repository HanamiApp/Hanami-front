<template>
  <div class="container" v-if="true" :style="position">
    <div class="__toaster" :class="`__toaster--${toasterType}`">
      {{ toasterMessage }}
    </div>
  </div>
</template>

<script>
import { ToasterTypes } from '@/utils/toasterTypes'

export default {
  data() {
    return {
      showToast: false,
      toasterType: null,
      toasterMessage: 'messaggio del Toaster'
    }
  },
  computed: {
    position() {
      if (this.showToast) {
        return 'transform: translateY(50px)'
      } else {
        return {
          transform: 'translateY(-200px)'
        }
      }
    },
    listenToaster() {
      return this.$store.state.toaster
    }
  },
  methods: {
    assignDefaultMessage() {
      switch (this.toasterType) {
        case ToasterTypes.ERROR:
          return 'Si è verificato un errore'
        case ToasterTypes.SUCCESS:
          return 'Operazione completata con successo'
        default:
          this.showToast = false
          console.error(`ToasterError: for ToasterType '${this.toasterType}' message is Required`)
      }
    },
    startTimer() {
      window.setTimeout(() => {
        this.showToast = false
      }, 2000)
    }
  },
  watch: {
    listenToaster(newValue) {
      this.showToast = newValue.active
      if (this.showToast) this.startTimer()
      this.toasterType = newValue.type
      console.log(newValue)
      this.toasterMessage = newValue.message ?? this.assignDefaultMessage()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.container {
  transition: transform 200ms linear;
  top: 0;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  .__toaster {
    border-radius: 0.3rem;
    width: 300px;
    height: 70px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 2rem $black-10;
    &--error {
      background-color: $toaster-error;
      color: $white;
    }
    &--success {
      background-color: $toaster-success;
      color: $white;
    }
    &--info {
      background-color: $toaster-info;
      color: $white;
    }
  }
}
</style>
