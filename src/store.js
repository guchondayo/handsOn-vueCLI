import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        messeage:'Hello Vuex',
        count:0
    },
    mutations:{
        increment (state, n) {
            state.count += n
          }
    }
})

1
store.commit('increment',1)
store.commit('increment',1)
store.commit('increment',1)
store.commit('increment',1)
store.commit('increment',1)

console.log(store.state.count)
export default store



