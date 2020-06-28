import { createStore } from '@mpxjs/core'

const store = createStore({
  state: {
    count: 0,
    list: [
        {
          content: '全军出击',
          id: 0,
          active: true
        },
        {
          content: '猥琐发育，别浪',
          id: 1,
          active: false
        }
      ]
  },
  getters: {
    activeList(state){
        return state.list.filter(item=>item.active)
    }
  },
  mutations: {
    increment (state,n) {
      state.count+=n
    }
  },
  actions: {
    increment ({commit}) {
        commit('increment')
    }
  }
})

export default store;