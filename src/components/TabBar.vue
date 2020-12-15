<template>
  <div
    class="container"
    :key="index"
    v-for="(item, index) in this.generateTabBar"
  >
    <BaseButton
      width="this.style.width"
      height="this.style.height"
      :active="buttonActive == index"
      radius="this.style.radius"
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
    }
  },
  methods: {
    changeActive(toActive) {
      console.log("ACTIVE: " + toActive);
      this.buttonActive = toActive;
      console.log("Button: " + this.buttonActive);
    }
  }
};
</script>

<style lang="sass" scoped></style>
