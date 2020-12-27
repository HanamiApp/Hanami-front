<template>
  <div class="card" ref="card">
    <div class="front" v-show="!flipped">
      <p>{{ front.name }}</p>
      <p>{{ front.co2 + " gr/anno" }}</p>
    </div>
    <div class="back" v-show="flipped">
      <p>{{ back }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseFlipCard",
  props: {
    front: {
      name: {
        type: String,
        required: true
      },
      co2: {
        type: String,
        required: true
      }
    },
    back: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      flipped: false
    };
  },
  methods: {
    toggleCard() {
      this.flipped = !this.flipped;
      var el = this.$refs.card;
      el.classList.toggle("rotated");
    }
  }
};
</script>

<style lang="sass" scoped>
.card
  position: relative
  flex: 0 0 30%
  height: 100%
  width: 25%
  background-color: #FFF3D2
  border-radius: 20px
  text-align: center
  margin: 0 7px 0 7px
  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 15%, 85% 0);
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 15%, 85% 0);
  -webkit-transition: all 0.5s cubic-bezier(.39,.58,.57,1)
  -moz-transition: all 0.5s cubic-bezier(.39,.58,.57,1)
  -o-transition: all 0.5s cubic-bezier(.39,.58,.57,1)
  transition: all 0.5s cubic-bezier(.39,.58,.57,1)
  & *
    display: flex
    justify-content: center
    align-items: center
  & .front
    flex-direction: column
    width: 100%
    height: 100%
    & p
      display: block-inline
      text-align: center
      background-color: rgba(255,255,255,0.9)
      width: 80%
      height: 18%
      border-radius: 10px
      color: #4F4F4F
  & .back
    & p
      -webkit-transform : rotateY(180deg)
      -moz-transform : rotateY(180deg)
      -ms-transform : rotateY(180deg)
      -o-transform : rotateY(180deg)
      transform : rotateY(180deg)
.rotated
  -webkit-transform : rotateY(-180deg)
  -moz-transform : rotateY(-180deg)
  -ms-transform : rotateY(-180deg)
  -o-transform : rotateY(-180deg)
  transform : rotateY(-180deg)
.front:after
  position: absolute
  content: ''
  right: 0
  top: 0
  border-bottom: 35px solid #FFE59E
  border-right: 35px solid white
  border-radius: 0 10px
</style>
