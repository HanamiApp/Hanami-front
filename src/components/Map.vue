<template>
  <div class="map-container">
    <div class="search-container">
      <SearchFilter
        :list="loadPlaces()"
        @search-input="searchPlace"
        @selected-zone="selectedZone"
      />
    </div>
    <div id="mapid"></div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import SearchFilter from '@/components/SearchFilter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Map',
  components: { SearchFilter },
  props: {
    propPlaces: null
  },
  data() {
    return {
      map: null,
      searchPlaceName: ''
    }
  },
  watch: {
    propPlaces: function(nuovoP) {
      console.log(nuovoP)
      nuovoP.forEach(place => {
        L.marker([place.latitude, place.longitude])
          .addTo(this.map)
          .on('click', this.selectedPlace)
      })
    }
  },
  mounted() {
    this.map = L.map('mapid').setView([42.418, 14.18], 12)
    L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
    ).addTo(this.map)
  },
  methods: {
    ...mapGetters(['getPlaceByName(er)', 'getPlace']),
    searchPlace(event) {
      this.searchPlaceName = event
      console.log(this.searchPlaceName)
    },
    selectedZone(event) {
      this.map.flyTo([event.latitude, event.longitude], 11, {
        animate: true,
        duration: 2
      })
    },
    loadPlaces() {
      console.log(
        'GET PLACES: ' +
          this.getPlaceByName(this.searchPlaceName) +
          'NAMEPLACE: ' +
          this.searchPlaceName
      )
      return this.getPlaceByName(this.searchPlaceName)
    },
    selectedPlace(event) {
      console.log('SELECTED PLACE: ' + this.getPlace(event))
      this.$emit('selected-place', this.getPlace(event))
    }
  }
}
</script>

<style lang="sass" scoped>
.map-container
  height: 100%
  width: 100%
  position: relative
  align-items: baseline !important
  & .search-container
    width: 40%
    z-index: 5
    display: flex
    position: absolute
    justify-content: center
    align-items: center
    margin: 0 60px
  & #mapid
    position: absolute
    height: 100%
    width: 100%
    z-index: 1
</style>
