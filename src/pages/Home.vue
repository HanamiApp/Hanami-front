<template>
  <div id="home">
    <div class="left">
      <div class="title">Hanami</div>
      <router-link to="/home">
        <BaseButton :active="buttonActive == 1" @click="changeActive(1)">
          <BaseIcon :active="buttonActive == 1">
            <HomeIcon />
          </BaseIcon>
          <p class="route-name">Home</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/plant">
        <BaseButton :active="buttonActive == 2" @click="changeActive(2)">
          <BaseIcon :active="buttonActive == 2">
            <HomeIcon />
          </BaseIcon>
          <p class="route-name">Piante</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/adopt">
        <BaseButton :active="buttonActive == 3" @click="changeActive(3)">
          <BaseIcon :active="buttonActive == 3">
            <HomeIcon />
          </BaseIcon>
          <p class="route-name">Adotta</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/trip">
        <BaseButton :active="buttonActive == 4" @click="changeActive(4)">
          <BaseIcon :active="buttonActive == 4">
            <HomeIcon />
          </BaseIcon>
          <p class="route-name">Viaggio</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/challenges">
        <BaseButton :active="buttonActive == 5" @click="changeActive(5)">
          <BaseIcon :active="buttonActive == 5">
            <HomeIcon />
          </BaseIcon>
          <p class="route-name">Challenges</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/tasks">
        <BaseButton :active="buttonActive == 6" @click="changeActive(6)">
          <BaseIcon :active="buttonActive == 6">
            <HomeIcon />
          </BaseIcon>
          <p class="route-name">Tasks</p>
        </BaseButton>
      </router-link>
    </div>
    <div class="center">
      <router-view />
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import HomeIcon from "@/assets/icons/HomeIcon.vue";

export default {
  components: {
    BaseButton,
    BaseIcon,
    HomeIcon
  },
  name: "Home",
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
#home
  display: flex
  height: 100%
  width: 100%
.left
  width: 20%
  height: 100%
  display: flex
  align-items: center
  flex-direction: column
  & .title
    font-size: 33px
    font-weight: bold
    margin: 50px
  & .route-name
    display: flex
    justify-content: center;
    align-items: center;
    width: 100px;
    margin-right: 10px
a
  display: flex
  justify-content: center
  align-items: center
  text-decoration: none
  color: black
  margin-left: 5px
.icon
  margin-left: 3px
.center
  min-width: 900px
  min-height: 700px
  width: 50%
  border-radius: 25px
  background-color: #F6F7FB
  margin: 10px
  display: flex
  justify-content: center
  align-items: center
.right
  width: 30%
  height: 100%
  background-color: rosybrown
</style>
