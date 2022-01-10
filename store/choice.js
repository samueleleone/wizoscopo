export const state = () => ({
    counter: 0,
    //cnt: 0
    step: 0,
    reveal : 0,
    sign: 'blank',
    sign_en: 'blank',
    display_sign: 'null',
    error: 0,
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
      state.error = 0
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
    setSign(state){
      if(state.counter == 0){
        state.display_sign = 'Non hai mai risposto alle mie domande'
        state.error = 1
      }else{
        if(state.counter == 1){
          state.sign = 'ariete'
          state.sign_en = 'aries'
          state.display_sign = '♈ Ariete'
        }else{
          if(state.counter == 2){
            state.sign = 'toro'
            state.sign_en = 'taurus'
            state.display_sign = '♉ Toro'
          }else{
            if(state.counter == 3){
              state.sign = 'gemelli'
              state.sign_en = 'gemini'
              state.display_sign = '♊ Gemelli'
            }else{
              if(state.counter == 4){
                state.sign = 'cancro'
                state.sign_en = 'cancer'
                state.display_sign = '♋ Cancro'
              }else{
                if(state.counter == 5){
                  state.sign = 'leone'
                  state.sign_en = 'leo'
                  state.display_sign = '♌ Leone'
                }else{
                  if(state.counter == 6){
                    state.sign = 'vergine'
                    state.sign_en = 'virgo'
                    state.display_sign = '♍ Vergine'
                  }else{
                    if(state.counter == 7){
                      state.sign = 'bilancia'
                      state.sign_en = 'libra'
                      state.display_sign = '♎ Bilancia'
                    }else{
                      if(state.counter == 8){
                        state.sign = 'acquario'
                        state.sign_en = 'aquarius'
                        state.display_sign = '♒ Acquario'
                      }else{
                        if(state.counter == 9){
                          state.sign = 'sagittario'
                          state.sign_en = 'sagittarius'
                          state.display_sign = '♐ Sagittario'
                        }else{
                          if(state.counter == 10){
                            state.sign = 'pesci'
                            state.sign_en = 'pisces'
                            state.display_sign = '♓ Pesci'
                          }else{
                            if(state.counter == 11){
                              state.sign = 'capricorno'
                              state.sign_en = 'capricorn'
                              state.display_sign = '♑ Capricorno '
                            }else{
                              if(state.counter == 12){
                                state.sign = 'scorpione'
                                state.sign_en = 'scorpio'
                                state.display_sign = '♏ Scorpione '
                              }else{
                                if(state.counter == 15){
                                  state.display_sign = ' Hai risposto sempre sì, è impossibile! '
                                  state.error = 1
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      }
     


  }

