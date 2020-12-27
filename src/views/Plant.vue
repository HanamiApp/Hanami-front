<template>
  <div class="plant-page">
    <div class="header">
      <TabBar
        :config="{ numItems: 2, nameItems: ['adottate', 'regalate'] }"
        :style="{ width: '30', height: '30', color: '#FFB800', radius: '30' }"
      />
    </div>
    <div class="body">
      <PlantCards />
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import PlantCards from "@/components/PlantCards.vue";

export default {
  name: "Plant",
  components: {
    TabBar,
    PlantCards
  }
};
</script>

<style lang="sass" scoped>
.plant-page
  display: flex
  align-items: center
  width: 100%
  height: 100%
  padding: 20px
  & .header
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 20%
  & .body
</style>
