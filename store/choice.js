export const state = () => ({
    counter: 0,
    //cnt: 0
  })

 
  export const mutations = {
    increment_first(state) {
      state.counter = state.counter + 1 
      //state.cnt = state.cnt + 1
    },
    
     increment_second(state) {
      state.counter = state.counter + 2
      //state.cnt = state.cnt + 1
    }, 
    increment_third(state) {
 
      state.counter = state.counter + 4
      //state.cnt = state.cnt + 1
    },
    increment_fourth(state) {
      
      state.counter = state.counter + 8
      //state.cnt = state.cnt + 1
    },
    reset(state){
      state.counter = 0
      //state.cnt = 0
    },
    resetClick(state){
      //state.cnt = 0
    },
    incrementZero(state){
      state.counter = state.counter + 0
    }
  }

