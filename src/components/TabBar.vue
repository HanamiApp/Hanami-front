<template>
  <div
    class="container"
    :style="containerStyle"
    :key="index"
    v-for="(item, index) in this.generateTabBar"
  >
    <BaseButton
      :active="buttonActive == index"
      :color="this.style.color"
      @click="changeActive(index)"
      >{{ item.name[index] }}</BaseButton
    >
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "TabBar",
  components: { BaseButton },
  props: {
    config: {
      numItems: {
        type: Number,
        required: true
      },
      nameItems: Array
    },
    style: {
      width: String,
      height: String,
      color: String,
      radius: String
    }
  },
  data() {
    return {
      buttonActive: 0
    };
  },
  computed: {
    generateTabBar() {
      var state = [];
      for (var i = 0; i < this.config.numItems; i++) {
        var item = { name: this.config.nameItems };
        state.push(item);
      }
      return state;
    },
    containerStyle() {
      return {
        height: this.style.height + "%",
        width: this.style.width + "%",
        "border-radius": this.style.radius + "px"
      };
    }
  },
  methods: {
    changeActive(toActive) {
      this.buttonActive = toActive;
    }
  }
};
</script>

<style lang="sass" scoped>
.container
  display: flex
  align-items: center
  justify-content: center
</style>
