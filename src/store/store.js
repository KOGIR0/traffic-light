import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        timeLeft: 15,
        direction: '',
        previousRoute: '/'
    },
    mutations: {
        setTimeLeft(state, payload)
        {
            state.timeLeft = payload;
        },
        setDirection(state, payload)
        {
            state.direction = payload;
        },
        setPreviousRoute(state, payload)
        {
            state.previousRoute = payload;
        }
    },
    plugins: [createPersistedState()]
})