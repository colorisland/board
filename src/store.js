import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  isLoggedIn: !!localStorage.getItem("user"),
  authToken: null,
  user: {
    id: null,
    username: null,
    token: null,
    avatarUrl: null,
    isAdmin: false,
    timezone: null,
    timeformat: null,
    defaultRowsPerPage: null
  }
}

const getters = {
  authToken: (state) => {
    if (!state.isLoggedIn) {
      return null;
    }
    try {
      if (!state.authToken) {
        if (!state.user || !state.user.username) {
          var data = localStorage.getItem("user");
          if (!data) {
            return null;
          }
          state.user = JSON.parse(data);
        }
        state.authToken = state.user.token;
      }
      return state.authToken;
    } catch (error) {
      return null;
    }
  }
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },
  signin(state) {
    state.pending = true;
  },
  signinSuccess(state, user) {
    state.isLoggedIn = true;
    state.pending = false;
    state.user = user;
    state.authToken = user.token;
  },
  signout(state) {
    state.isLoggedIn = false;
    state.user = null;
    console.log("signout::"+JSON.stringify(state)) 
  }
}

const actions = {
  signout({
    commit
  }) {
    console.log("actions::signout") 
    localStorage.removeItem("user");
    commit("signout");
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})