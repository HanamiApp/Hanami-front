<template>
  <div class="container">
    <div class="row1">
      <p class="text">dai un nome al tuo albero</p>
      <BaseInput height="60" placeholder="albero01" textColor="#A1A1A1" @input="setPlantName" />
    </div>
    <div class="row2">
      <div class="row2__fruit">
        <p class="text">albero da frutta</p>
        <FruitButtons @is-fruit="setFruit" />
      </div>
      <div class="row2__search">
        <p class="text">nome specie</p>
        <BaseInput
          height="60"
          placeholder="cerca"
          textColor="#636363"
          radius="20"
          fontSize="19"
          @input="setSpeciesName"
        />
      </div>
    </div>
    <div class="row3">
      <SpeciesSelector :species="getSpecies" @selected-species="setChoosedPlant" />
    </div>
    <div class="row4">
      <Map :propPlaces="getPlaces" @selected-place="selectedPlace" />
    </div>
    <div class="row5">
      <CollapsibleButton @has-gift="hasGift" @gift-receiver="setUserEmail" />
      <BaseButton
        width="700"
        height="85"
        radius="20"
        color="linear-gradient(135deg, #2c93ff, #2d6aff)"
        @click="saveTree()"
        >Avanti</BaseButton
      >
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import SpeciesSelector from '@/components/SpeciesSelector.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import CollapsibleButton from '@/components/CollapsibleButton.vue'
import Map from '@/components/Map.vue'
import FruitButtons from '@/components/FruitButtons.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'Adopt',
  components: {
    BaseInput,
    SpeciesSelector,
    BaseButton,
    CollapsibleButton,
    Map,
    FruitButtons
  },
  data() {
    return {
      plantName: '',
      speciesName: '',
      fruit: null,
      choosedPlant: '',
      choosedPlace: '',
      isGift: '',
      userGiftEmail: null
    }
  },
  mounted() {
    this.loadSpecies()
    this.loadPlaces()
  },
  computed: {
    getSpecies() {
      return this.species()
    },
    getPlaces() {
      return this.places()
    }
  },
  methods: {
    ...mapActions(['loadSpecies', 'loadPlaces', 'searchSpecies', 'createPlant']),
    ...mapState(['species', 'places']),
    setPlantName(event) {
      this.plantName = event.target.value
    },
    setSpeciesName(event) {
      this.speciesName = event.target.value
      var data = { name: this.speciesName, fruit: this.fruit }
      this.searchSpecies(data).then(() => this.species)
    },
    setFruit(event) {
      this.fruit = event
      var data = { name: this.speciesName, fruit: this.fruit }
      this.searchSpecies(data).then(() => this.species)
    },
    setChoosedPlant(event) {
      this.choosedPlant = event
    },
    hasGift(event) {
      this.isGift = event
    },
    setUserEmail(event) {
      this.userGiftEmail = event
    },
    selectedPlace(event) {
      this.choosedPlace = event.id
    },
    saveTree() {
      // TODO:SE è UN REGALO, DOVE LO SALVO L'EMAIL DI QUELLO CHE LO DEVE RICEVERE?
      var data = {
        name: this.speciesName,
        isGift: this.isGift,
        place: this.choosedPlace,
        species: this.choosedPlant
      }
      this.createPlant(data).then(() => this.$router.push('/home'))
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  height: 90%;
  border-radius: 25px;
  * {
    display: flex;
    align-items: center;
  }
  .row1 {
    width: 90%;
    height: 15%;
    flex-direction: column;
    align-items: flex-start;
  }
  .row2 {
    width: 90%;
    margin: 15px 0;
    .row2__fruit {
      flex-direction: column;
      width: 30%;
      height: 100%;
      align-items: flex-start;
    }
    .row2__search {
      flex-direction: column;
      width: 70%;
      height: 100%;
      align-items: flex-start;
    }
  }
  .row3 {
    width: 95%;
    height: 30%;
    position: relative;
    left: 2.5%;
  }
  .row4 {
    width: 90%;
    height: 35%;
  }
  .row5 {
    width: 90%;
    height: 15%;
    * {
      color: white;
    }
  }
}
.text {
  margin: 10px 40px;
  color: #5a5a5a;
}
</style>
