<template>
  <div class="container" :key="index" v-for="(item, index) in plant">
    <BasePlantCard></BasePlantCard>
  </div>
</template>

<script>
import BasePlantCard from '@/components/base/BasePlantCard.vue'

export default {
  name: 'PlantCards',
  components: { BasePlantCard }
}
</script>

<style lang="sass" scoped>
.container
  display: flex
  align-items: center
  flex-direction: column
</style>
