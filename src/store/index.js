import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store({
  state: {
    roomshow: false,
    showm: false
  },
  mutations: {
    get_rcloud_userId(state, payload) {
      state.showm = payload.userid
    }
  }
})
