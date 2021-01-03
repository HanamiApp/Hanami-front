import { createStore } from 'vuex'
import { signIn } from '@/services/auth.js'
import * as SpeciesAPI from '@/services/species.js'
import * as PlantAPI from '@/services/plant.js'
import * as PlacesAPI from '@/services/place.js'

export default createStore({
  state: {
    userId: null,
    species: [],
    places: [],
    // TODO: separare lo store in moduli
    toaster: {
      active: true,
      type: null,
      message: null
    }
  },
  getters: {
    getPlaceByName(state) {
      return placeName => {
        console.log(placeName)
        var result = []
        state.places.forEach(place => {
          if (place.name.includes(placeName)) {
            result.push(place)
          }
        })
      }
    },
    getPlace(state, coordinate) {
      state.places.forEach(place => {
        if (place.latitude == coordinate.latitude && place.longitude == coordinate.longitude)
          return place
      })
      return null
    }
  },
  mutations: {
    SET_USER_ID(state, userId) {
      state.userId = userId
    },
    SET_SPECIES(state, species) {
      state.species = species
    },
    SET_PLACES(state, places) {
      state.places = places
    },
    SET_TOASTER_STATE(state, toasterState) {
      state.toaster = toasterState
    }
  },
  actions: {
    updateToaster({ commit }, toasterState) {
      commit('SET_TOASTER_STATE', toasterState)
    },
    // TODO:AGGIUNGERE SE è ANDATA BENE O è ANDATA MALE E VEDERE SE SI PUO METTERE DENTRO IL PUNTO THEN
    // AUTH
    async login({ commit }, data) {
      let outcome = null
      await signIn(data.email, data.password)
        .then(response => {
          commit('SET_USER_ID', response.data.data.id)
          outcome = true
        })
        .catch(() => {
          outcome = false
        })
      return outcome
    },
    // SPECIES
    loadSpecies({ commit }) {
      SpeciesAPI.getAll()
        .then(response => {
          commit('SET_SPECIES', response.data.data)
        })
        .catch(error => console.log(error))
    },
    searchSpecies({ commit }, data) {
      SpeciesAPI.search(data.name, data.fruit)
        .then(response => {
          commit('SET_SPECIES', response.data.data)
        })
        .catch(error => console.log(error))
    },
    // PLANT
    createPlant(data) {
      PlantAPI.create(data)
    },
    // PLACE
    loadPlaces({ commit }) {
      PlacesAPI.getPlaces()
        .then(response => {
          commit('SET_PLACES', response.data.data)
        })
        .catch(error => console.log(error))
    },
    searchPlaces({ commit }, data) {
      PlacesAPI.search(data)
        .then(response => {
          commit('SET_PLACES', response.data.data)
        })
        .catch(error => console.log(error))
    }
  }
})
