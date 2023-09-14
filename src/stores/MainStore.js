import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state: () => ({
    loader: false
  }),
  actions: {
    loaderTrue () {
      this.loader = true
    },
    loaderFalse () {
      this.loader = false
    },
    test () {
      console.log('funcionnananananana')
    }
  }
})
