<template>
  <div class="search">
    <BaseInput height="100" placeholder="search" fontSize="19" @input="setEventName" />
    <div class="result-box" v-if="show">
      <div
        class="single-result"
        :key="index"
        v-for="(item, index) in list"
        @click="selectZone(item.latitude, item.longitude)"
      >
        <p>{{ item.name + ', ' + item.city }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'

export default {
  name: 'SearchFilter',
  components: { BaseInput },
  props: {
    list: null
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    setEventName(event) {
      this.$emit('search-input', event.target.value)
      this.show = !this.show
    },
    selectZone(latitude, longitude) {
      var coordinate = { latitude: latitude, longitude: longitude }
      console.log(coordinate)
      this.$emit('selected-zone', coordinate)
      this.show = !this.show
    }
  }
}
</script>

<style lang="sass" scoped>
.search
  width: 100%
  height: 100%
  margin: 10px
  & .result-box
    height: 180px
    background-color: #FFFFFF
    overflow: scroll
    margin: 10px 3px 0 3px
    cursor: pointer
    transition: all 300ms linear
    & .single-result
      height: 50px
      display: flex
      align-items: center
      &:hover
        background-color: #EDF0F9
</style>
