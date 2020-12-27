<template>
  <div id="scrolling-list">
    <button class="left-arrow" @click="scroll('back')" v-show="buttonShowLeft">
      <ArrowIconRight />
    </button>
    <BaseFlipCard
      class="card"
      :key="index"
      v-for="(item, index) in species"
      :id="item.id"
      :front="{ name: item.name, co2: item.co2 }"
      :back="item.description"
      @click="selectedSpecies(item.id)"
    />
    <button
      id="slide"
      class="right-arrow"
      @click="scroll('forward')"
      v-show="buttonShowRight"
    >
      <ArrowIconLeft />
    </button>
  </div>
</template>

<script>
import BaseFlipCard from "@/components/base/BaseFlipCard.vue";
import ArrowIconRight from "@/assets/icons/ArrowIconRight.vue";
import ArrowIconLeft from "@/assets/icons/ArrowIconLeft.vue";

export default {
  name: "SpeciesSelector",
  components: {
    ArrowIconRight,
    ArrowIconLeft,
    BaseFlipCard
  },
  props: {
    species: null
  },
  data() {
    return {
      buttonShowLeft: true,
      buttonShowRight: true
    };
  },
  methods: {
    scroll(direction) {
      var element = document.getElementById("scrolling-list");
      var scroll = 0;
      var slideTimer = setInterval(function() {
        if (direction == "back") {
          element.scrollLeft -= 25;
        } else {
          element.scrollLeft += 25;
        }
        scroll += 10;
        if (scroll >= 100) {
          window.clearInterval(slideTimer);
        }
      }, 25);
    },
    buttonShow() {},
    selectedSpecies(speciesId) {
      this.$emit("selected-species", speciesId);
    }
  }
};
</script>

<style lang="sass" scoped>
button
  display: flex
  justify-content: center
  align-items: center
  position: absolute
  background-color: inherit
  border: 0
.right-arrow
  right: 1%
.left-arrow
  left: -3%
#scrolling-list
  flex-direction: row
  width: 100%
  height: 90%
  flex-wrap: nowrap
  overflow-x: auto
  scrollbar-width: none
  -ms-overflow-style: none
#scrolling-list::-webkit-scrollbar
  display: none
</style>
