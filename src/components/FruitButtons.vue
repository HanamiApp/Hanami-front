<template>
  <div class="buttons">
    <BaseButton
      width="70"
      height="70"
      color="#EEF4FF"
      radius="20"
      :class="{ 'buttons--active': this.withFruit }"
      @click="selectedButton(true)"
    >
      <FruitIcon v-if="!this.withFruit" />
      <FruitIconActive v-else />
    </BaseButton>
    <BaseButton
      width="70"
      height="70"
      color="#EEF4FF"
      radius="20"
      :class="{ 'buttons--active': this.withoutFruit }"
      @click="selectedButton(false)"
    >
      <NoFruitIcon v-if="!this.withoutFruit" />
      <NoFruitIconActive v-else />
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import FruitIcon from "@/assets/icons/FruitIcon.vue";
import FruitIconActive from "@/assets/icons/FruitIconActive.vue";
import NoFruitIcon from "@/assets/icons/NoFruitIcon.vue";
import NoFruitIconActive from "@/assets/icons/NoFruitIconActive.vue";

export default {
  name: "FruitButtons",
  components: {
    BaseButton,
    FruitIcon,
    FruitIconActive,
    NoFruitIcon,
    NoFruitIconActive
  },
  data() {
    return {
      withFruit: true,
      withoutFruit: false
    };
  },
  methods: {
    selectedButton(isFruit) {
      if (isFruit) {
        this.withFruit = !this.withFruit;
      } else {
        this.withoutFruit = !this.withoutFruit;
      }
      this.$emit("is-fruit", isFruit);
    }
  }
};
</script>

<style lang="scss" scoped>
.buttons--active {
  background: linear-gradient(135deg, #2c93ff, #2d6aff) !important;
}
</style>
