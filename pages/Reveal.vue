<template>

  <div>
          {{setSign()}}
         {{ setMessage() }}
         

    <h4 class="text-2xl leading-7 font-semibold flex justify-center">
      Ho finito!
    </h4>
    <br />
    <p class="mt-3 text-white-600lex justify-center">
      Il segno a cui stai pensando è:
    </p>
    <br />

   
     
  
    <div v-switch="zodiac_sign">
      
      
       
      <h4 v-case="0">Non hai mai risposto sì!</h4>

      <div class="flex justify-center" v-case="1">
        <div>
          <h4 class="flex justify-center">&#9800; Ariete</h4>
          <br />
          <p class="message">
           
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="2">
        <div>
          <h4 class="flex justify-center">&#9801; Toro</h4>
          <br />
          <p class="message">
           
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="3">
        <div>
          <h4 class="flex justify-center">&#9802; Gemelli</h4>
          <br />
          <p class="message">
          
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="4">
        <div>
          <h4 class="flex justify-center">&#9803; Cancro</h4>
          <br />
          <p class="message">
           
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="5">
        <div>
          <h4 class="flex justify-center">&#9804; Leone</h4>
          <br />
          <p class="message">
           
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="6">
        <div>
          <h4 class="flex justify-center">&#9805; Vergine</h4>
          <br />
          <p class="message">
          
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="7">
        <div>
          <h4 class="flex justify-center">&#9806; Bilancia</h4>
          <br />
          <p class="message">
          
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="8">
        <div>
          <h4 class="flex justify-center">&#9810; Acquario</h4>
          <br />
          <p class="message">
           
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="9">
        <div>
          <h4 class="flex justify-center">&#9808; Sagittario</h4>
          <br />
          <p class="message">
            
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="10">
        <div>
          <h4 class="flex justify-center">&#9811; Pesci</h4>
          <br />
          <p class="message">
        
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="11">
        <div>
          <h4 class="flex justify-center">&#9809; Capricorno</h4>
          <br />
          <p class="message">
           
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="12">
        <div>
          <h4 class="flex justify-center">&#9807; Scorpione</h4>
          <br />
          <p class="message">
            
       
            {{ this.message }}
          </p>
        </div>
      </div>

      <h4 class="flex justify-center" v-case="15">
        Hai risposto sempre sì, è impossibile!
      </h4>
    </div>
    <div></div>
    <br />
    <p class="pt-4 text-gray-800 border-t border-dashed"></p>
    <div class="flex justify-center pt-4 space-x-2">
      <nuxt-link to="/"
        ><button
          @click="resetValues"
          class="
            bg-white
            hover:bg-gray-100
            text-gray-800
            font-semibold
            py-2
            px-4
            border border-gray-600
            rounded
            shadow
          "
        >
          Vuoi riprovare?
        </button></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VSwitch from "v-switch-case";

Vue.use(VSwitch);

export default {
  components: {},
  data() {
    return {
      message: "",
      zodiac_sign_string:"",
      sign: [""],
      zodiac_sign: this.$store.state.choice.counter,
    }
  }, layout: "wizology",
  mounted() {},
  methods: {
    resetValues() {
      this.$store.commit("choice/reset");
      this.$store.commit("choice/resetClick");
    },
    async loadData() {
      var api_url =
        "https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/" +
        this.sign +
        "/today";
      this.message = await this.$axios
        .$get(api_url)
        .then((resp) => (this.message = resp.message.text));
    },
    setSign() {
      if(this.zodiac_sign == 1){
          this.sign = 'aries';
      }else{
        if(this.zodiac_sign == 2){
          this.sign = 'taurus'
        }else{
          if(this.zodiac_sign == 3){
            this.sign = 'gemini'
          }else{
            if(this.zodiac_sign == 4){
              this.sign = 'cancer'
            }else{
              if(this.zodiac_sign == 5){
                this.sign = 'leone'
              }else{
                if(this.zodiac_sign == 6){
                  this.sign = 'virgo'
                }else{
                  if(this.zodiac_sign == 7){
                    this.sign = 'libra'
                  }else{
                    if(this.zodiac_sign == 8){
                      this.sign = 'acquarius'
                    }else{
                      if(this.zodiac_sign == 9){
                        this.sign = 'sagittarius'
                      }else{
                        if(this.zodiac_sign == 10){
                          this.sign = 'pisces'
                        }else{
                          if(this.zodiac_sign == 11){
                            this.sign = 'capricorn'
                          }else{
                            if(this.zodiac_sign == 12){
                              this.sign = 'scorpion'
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
        
    },
    setMessage() {
      this.loadData();
    },
  },
};
</script>


