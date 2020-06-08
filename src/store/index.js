import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {baseUrl} from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  actions: {
    async fetchUsers({commit}, pageNumber) {
      try {
        const {data: {data}} = await axios(`${baseUrl}/users?delay=3&page=${pageNumber}`)
        commit('setUsers', data)
      } catch (e) {
        console.log(e.error)
      }
    }
  },
  mutations: {
    setUsers(state, users) {
      console.log('mut', users)
      this.state.users = users
    }
  },
  getters: {
    users(state) {
      return state.users
    }
  }
})
