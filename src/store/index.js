import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationTypes from './mutation-type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    isLoggedIn: !!localStorage.getItem('token')
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    },
    count: state => {
      return state.count
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    [mutationTypes.LOGIN] (state) {
      state.pending = true
    },
    [mutationTypes.LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true
      state.pending = false
    },
    [mutationTypes.LOGOUT] (state) {
      state.isLoggedIn = false
    }
  },
  actions: {
    login ({ commit }, creds) {
      commit(mutationTypes.LOGIN) // show spinner
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem('token', 'JWT')
          commit(mutationTypes.LOGIN_SUCCESS)
          resolve()
        }, 1000)
      })
    },
    logout ({ commit }) {
      // show pop up
      localStorage.removeItem('token')
      commit(mutationTypes.LOGOUT)
    }
  }
})
