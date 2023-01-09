import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        messeage:'Hello Vuex',
        count:0,
        getGetterGettist:"GETTER取れたよ"
    },
    mutations:{
        increment (state, n) {
            state.count += n
          }
    },
    getters: {
        toreteYokatta (state){
            console.log(state.getGetterGettist)
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



