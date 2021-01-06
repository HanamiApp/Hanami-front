<template>
  <div id="page">
    <div class="page__left">
      <div class="page__left__title">Hanami</div>
      <router-link to="/home">
        <BaseButton :active="buttonActive == 1" @click="changeActive(1)">
          <BaseIcon :active="buttonActive == 1">
            <HomeIcon />
          </BaseIcon>
          <p class="page__left__route-name">home</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/plant">
        <BaseButton :active="buttonActive == 2" @click="changeActive(2)">
          <BaseIcon :active="buttonActive == 2">
            <HomeIcon />
          </BaseIcon>
          <p class="page__left__route-name">piante</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/adopt">
        <BaseButton :active="buttonActive == 3" @click="changeActive(3)">
          <BaseIcon :active="buttonActive == 3">
            <HomeIcon />
          </BaseIcon>
          <p class="page__left__route-name">adotta</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/trip">
        <BaseButton :active="buttonActive == 4" @click="changeActive(4)">
          <BaseIcon :active="buttonActive == 4">
            <HomeIcon />
          </BaseIcon>
          <p class="page__left__route-name">viaggio</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/challenges">
        <BaseButton :active="buttonActive == 5" @click="changeActive(5)">
          <BaseIcon :active="buttonActive == 5">
            <HomeIcon />
          </BaseIcon>
          <p class="page__left__route-name">challenges</p>
        </BaseButton>
      </router-link>
      <router-link to="/home/tasks">
        <BaseButton :active="buttonActive == 6" @click="changeActive(6)">
          <BaseIcon :active="buttonActive == 6">
            <HomeIcon />
          </BaseIcon>
          <p class="page__left__route-name">tasks</p>
        </BaseButton>
      </router-link>
    </div>
    <div class="page__center">
      <router-view />
    </div>
    <div class="page__right"></div>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import HomeIcon from '@/assets/icons/HomeIcon.vue'

export default {
  components: {
    BaseButton,
    BaseIcon,
    HomeIcon
  },
  name: 'Home',
  data() {
    return {
      buttonActive: 1
    }
  },
  methods: {
    changeActive(toActive) {
      this.buttonActive = toActive
    }
  }
}
</script>

<style lang="scss" scoped>
#page {
  display: flex;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .page__left {
    width: 25%;
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-right: 1.5px solid #d4d4d4;
    .page__left__title {
      font-size: 33px;
      font-weight: bold;
      margin: 50px;
    }
    .page__left__route-name {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      margin-right: 10px;
    }
  }
  .page__center {
    min-width: 900px;
    min-height: 700px;
    width: 45%;
    height: 100%;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page__right {
    width: 30%;
    height: 90%;
    border-left: 1.5px solid #d4d4d4;
  }
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-left: 5px;
}
</style>
