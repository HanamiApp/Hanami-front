<template>
  <div class="collapsible-button" ref="button">
    <div class="button">
      <BaseButton
        width="65"
        height="65"
        radius="12"
        :active="true"
        color="#FFB800"
        @click="collapse"
      ></BaseButton>
    </div>
    <BaseInput
      placeholder="inserisci nome utente"
      backgroundColor="#FFF3D2"
      fontSize="20"
      v-if="this.isCollapse"
      @input="setUserEmail"
    />
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'

export default {
  name: 'CollapsibleButton',
  components: { BaseButton, BaseInput },
  props: {
    placeholder: null
  },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    collapse() {
      if (!this.isCollapse) {
        this.$refs.button.style.width = '700px'
        this.isCollapse = !this.isCollapse
      } else {
        this.$refs.button.style.width = '85px'
        this.isCollapse = !this.isCollapse
      }
      this.$emit('has-gift', this.isCollapse)
    },
    setUserEmail(event) {
      this.$emit('gift-receiver', event.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
.collapsible-button
  display: flex
  align-items: center
  width: 85px
  height: 85px
  background-color: #FFF3D2
  border-radius: 20px
  transition: all 300ms linear
</style>
