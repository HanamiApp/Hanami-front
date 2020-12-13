<template>
  <div class="plant-page">
    <div class="header">
      <BaseButton
        width="160"
        height="73"
        color="#FFB800"
        :active="buttonActive == 1"
        radius="30"
        @click="changeActive(1)"
        >adottate</BaseButton
      >
      <BaseButton
        width="160"
        height="73"
        color="#FFB800"
        :active="buttonActive == 2"
        radius="30"
        @click="changeActive(2)"
        >regalate</BaseButton
      >
    </div>
    <div class="body">
      <BasePlantCard />
      <BasePlantCard />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import BasePlantCard from "@/components/base/BasePlantCard.vue";

export default {
  name: "Plant",
  components: {
    BaseButton,
    BasePlantCard
  },
  data() {
    return {
      buttonActive: 1
    };
  },
  methods: {
    changeActive(toActive) {
      this.buttonActive = toActive;
    }
  }
};
</script>

<style lang="sass" scoped>
.plant-page
  padding: 20px
  & .header
    display: flex
    & *
      margin-left: 10px
      font-weight: normal
  & .body
</style>
