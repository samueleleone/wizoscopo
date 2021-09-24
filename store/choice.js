export const state = () => ({
    counter: 0,
    //cnt: 0
    step: 0,
    reveal : 0,
  })

 
  export const mutations = {
    addSign(state, sign) {
      state.sign.push(sign)
    },
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
      state.step = 0
      //state.cnt = 0
    },
    resetClick(state){
      //state.cnt = 0
    },
    incrementZero(state){
      state.counter = state.counter + 0
    },
    increment_step(state){
      state.step = state.step + 1
    },
    setReveal(state){
      state.reveal = state.counter
    }


  }

