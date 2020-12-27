<template>
  <div class="container">
    <div class="row1">
      <BaseInput
        height="60"
        placeholder="dai un nome al tuo albero"
        textColor="#A1A1A1"
        @input="setPlantName"
      />
    </div>
    <div class="row2">
      <BaseInput
        width="45"
        height="90"
        placeholder="cerca per specie"
        textColor="#636363"
        radius="10"
        fontSize="19"
        @input="setSpeciesName"
      />
      <BaseTreeSwitch @fruit="setFruit" />
    </div>
    <div class="row3">
      <SpeciesSelector
        :species="getSpecies"
        @selected-species="setChoosedPlant"
      />
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
        :active="true"
        color="#C4C4C4"
        @click="saveTree()"
        >conferma</BaseButton
      >
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import SpeciesSelector from "@/components/SpeciesSelector.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import CollapsibleButton from "@/components/CollapsibleButton.vue";
import Map from "@/components/Map.vue";
import BaseTreeSwitch from "@/components/base/BaseTreeSwitch.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Adopt",
  components: {
    BaseInput,
    SpeciesSelector,
    BaseButton,
    CollapsibleButton,
    Map,
    BaseTreeSwitch
  },
  data() {
    return {
      plantName: "",
      speciesName: "",
      fruit: null,
      choosedPlant: "",
      choosedPlace: "",
      isGift: "",
      userGiftEmail: null
    };
  },
  mounted() {
    this.loadSpecies();
    this.loadPlaces();
  },
  computed: {
    getSpecies() {
      return this.species();
    },
    getPlaces() {
      return this.places();
    }
  },
  methods: {
    ...mapActions([
      "loadSpecies",
      "loadPlaces",
      "searchSpecies",
      "createPlant"
    ]),
    ...mapState(["species", "places"]),
    setPlantName(event) {
      this.plantName = event.target.value;
    },
    setSpeciesName(event) {
      this.speciesName = event.target.value;
      var data = { name: this.speciesName, fruit: this.fruit };
      this.searchSpecies(data).then(() => this.species);
    },
    setFruit(event) {
      this.fruit = event;
      var data = { name: this.speciesName, fruit: this.fruit };
      this.searchSpecies(data).then(() => this.species);
    },
    setChoosedPlant(event) {
      this.choosedPlant = event;
    },
    hasGift(event) {
      this.isGift = event;
    },
    setUserEmail(event) {
      this.userGiftEmail = event;
    },
    selectedPlace(event) {
      this.choosedPlace = event;
    },
    saveTree() {
      // TODO:SE è UN REGALO, DOVE LO SALVO L'EMAIL DI QUELLO CHE LO DEVE RICEVERE?
      var data = {
        name: this.speciesName,
        isGift: this.isGift,
        place: "",
        species: this.choosedPlant
      };
      this.createPlant(data).then(() => this.$router.push("/home"));
    }
  }
};
</script>

<style lang="sass" scoped>
.container
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  background-color: #FFFFFF
  width: 90%
  height: 90%
  border-radius: 25px
  & *
    display: flex
    align-items: center
  & .row1
    width: 90%
    height: 15%
  & .row2
    width: 90%
    height: 7%
    justify-content: space-between
  & .row3
    width: 95%
    height: 30%
    position: relative
    left: 2.5%
  & .row4
    width: 90%
    height: 35%
  & .row5
    width: 90%
    height: 15%
</style>
