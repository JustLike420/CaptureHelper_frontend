import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        backendUrl: "http://127.0.0.1:8000/api/v1",
        isAuthenticated: false,
        token: '',
        username: ''
    },
    mutations: {
        initializeSite(state) {
            if (localStorage.getItem('auth_token')) {
                state.username = localStorage.getItem('username')
                state.token = localStorage.getItem('auth_token')
                state.isAuthenticated = true
            } else {
                state.token = ''
                state.isAuthenticated = false
            }
        },
        setToken(state, token) {
            state.token = token
            state.isAuthenticated = true
        },
        removeToken(state) {
            state.token = ''
            state.isAuthenticated = false
        },
        setUsername(state, username) {
            state.username = username
        }
    },
    actions: {},
    modules: {},
    getters: {
        getServerUrl: state => {
            return state.backendUrl
        }
    }
})

export default store