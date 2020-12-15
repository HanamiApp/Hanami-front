<template>
  <div class="plant-page">
    <div class="header">
      <TabBar
        :config="{ numItems: 2, nameItems: ['adottate', 'regalate'] }"
        :style="{ width: '160', height: '73', color: 'FFB800', radius: '30' }"
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
  padding: 20px
  & .header
    display: flex
  & .body
</style>
