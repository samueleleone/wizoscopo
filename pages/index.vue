<template>
  <div v-switch="this.$store.state.choice.step">
    <div v-case="0">
  
      <Start />
      <div class="flex justify-center pt-2 space-x-2">
        <nuxt-link to="/"
          ><button
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
            @click="nextPage"
          >
            Iniziamo!
          </button></nuxt-link
        >
      </div>
    </div>

    <div v-case="1">
     
      <p><One /></p>
      <div class="flex justify-center pt-4 space-x-2">
        <button
          class="
            bg-white
            hover:bg-gray-100
            text-gray-800
            font-semibold
            py-2
            px-5
            border border-gray-400
            rounded
            shadow
          "
          @click="addValue_one"
        >
          Si
        </button>
        <button
          class="
            bg-white
            hover:bg-gray-100
            text-gray-800
            font-semibold
            py-2
            px-4
            border border-gray-400
            rounded
            shadow
          "
          @click="incrementZero"
        >
          No
        </button>
      </div>

     
    </div>

     <div v-case="2">
  
        <p><Two /></p>
        <div class="flex justify-center pt-4 space-x-2">
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-semibold
              py-2
              px-5
              border border-gray-400
              rounded
              shadow
            "
            @click="addValue_two"
          >
            Si
          </button>
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-semibold
              py-2
              px-4
              border border-gray-400
              rounded
              shadow
            "
            @click="incrementZero"
          >
            No
          </button>
        </div>
      </div>

         <div v-case="3">
       
        <p><Third /></p>
        <div class="flex justify-center pt-4 space-x-2">
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-semibold
              py-2
              px-5
              border border-gray-400
              rounded
              shadow
            "
            @click="addValue_three"
          >
            Si
          </button>
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-semibold
              py-2
              px-4
              border border-gray-400
              rounded
              shadow
            "
            @click="incrementZero"
          >
            No
          </button>
        </div>
         </div>

       <div v-case="4">
   

        <p><Fourth /></p>
        <div class="flex justify-center pt-4 space-x-2">
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-semibold
              py-2
              px-5
              border border-gray-400
              rounded
              shadow
            "
            @click="addValue_fourth"
          >
            Si
          </button>
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-semibold
              py-2
              px-4
              border border-gray-400
              rounded
              shadow
            "
            @click="incrementZero"
          >
            No
          </button>
        </div>
         </div>

          <div v-case="5">
           Step da store:    {{ this.$store.state.choice.step }}<br>
      Risposte tot: {{ this.$store.state.choice.counter }}<br>
      <div class="revealation">

         <client-only placeholder="Loading...">
  <div>
        
         

    <h4 class="text-2xl leading-7 font-semibold flex justify-center">
      Ho finito!
    </h4>
    
   
    <br />

   
     
  
    <div v-switch="this.$store.state.choice.counter">
      
     
       
      <h4 v-case="0">Non hai mai risposto sì!</h4>

      <div class="flex justify-center" v-case="1">
        <div>
          <h4 class="flex justify-center">&#9800; Ariete</h4><br>
         
          <p class="message">
           
         {{ this.timestamp }}<br><br>
          <q>{{ data.message.text }}</q>
            
           
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="2">
        <div>
          <h4 class="flex justify-center">&#9801; Toro</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
              <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="3">
        <div>
          <h4 class="flex justify-center">&#9802; Gemelli</h4><br>
          <p class="message">
          
        {{ this.timestamp }}<br><br>
               <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="4">
        <div>
          <h4 class="flex justify-center">&#9803; Cancro</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
                <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="5">
        <div>
          <h4 class="flex justify-center">&#9804; Leone</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
                 <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="6">
        <div>
          <h4 class="flex justify-center">&#9805; Vergine</h4><br>
          <p class="message">
          
        {{ this.timestamp }}<br><br>
                <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="7">
        <div>
          <h4 class="flex justify-center">&#9806; Bilancia</h4><br>
          <p class="message">
          
        {{ this.timestamp }}<br><br>
               <q>{{ data.message.text }}</q>          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="8">
        <div>
          <h4 class="flex justify-center">&#9810; Acquario</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
                 <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="9">
        <div>
          <h4 class="flex justify-center">&#9808; Sagittario</h4><br>
          <p class="message">
            
        {{ this.timestamp }}<br><br>
                 <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="10">
        <div>
          <h4 class="flex justify-center">&#9811; Pesci</h4><br>
          <p class="message">
        
        {{ this.timestamp }}<br><br>
               <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="11">
        <div>
          <h4 class="flex justify-center">&#9809; Capricorno</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
                <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="12">
        <div>
          <h4 class="flex justify-center">&#9807; Scorpione</h4><br>
          <p class="message">
            
        {{ this.timestamp }}<br><br>
             <q>{{ data.message.text }}</q>
          </p>
        </div>
      </div>

      <h4 class="flex justify-center" v-case="15">
        Hai cliccato qualche sì di troppo
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
 </client-only>
      </div>

     

     

         </div>

  </div>
</template>


<script>
import Vue from "vue";
import VSwitch from "v-switch-case";
import Fourth from '../components/Fourth.vue';
import moment from 'moment'

Vue.use(VSwitch);

export default {

  data() {
    return {
      timestamp: moment().locale("it").format('LLLL'),
    }
  }, 

   async asyncData({ store, $axios }) {
     var data = ''

      if(store.state.choice.counter == 1){
       data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/aries/today') // 1 
      }else{
        if(store.state.choice.counter == 2){
            data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/taurus/today') // 2
        }else{
          if(store.state.choice.counter == 3){
            data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/gemini/today') // 3
        }else{
          if(store.state.choice.counter == 4){
            data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/cancer/today') // 4
          }else{
            if(store.state.choice.counter == 5){
            data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/leo/today') // 5
            }else{
              if(store.state.choice.counter == 6){
            data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/virgo/today') // 6
            }else{
              if(store.state.choice.counter == 7){
            data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/libra/today') // 7

              }else{
                if(store.state.choice.counter == 8 ){
              data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/cancer/today') // 8

                }else{
                  if(store.state.choice.counter == 9){
                data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/sagittarius/today') // 9

                  }else{
                    if(store.state.choice.counter == 10){
                 data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/pisces/today') // 10

                    }else{
                      if(store.state.choice.counter == 11){
                    data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/aquarius/today') // 11

                      }else{
                        if(store.state.choice.counter == 12){
                      data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/scorpio/today') // 12

                        }else{
                          if(store.state.choice.counter == 0 || store.state.choice.counter == 15){
                          data = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/virgo/today') // 4

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
      
      //const data = await Promise.all([virgo,taurus,aries,aquarius,sagittarius,libra,gemini,cancer,leo,pisces,capricorn,scorpion])
      
      return { 
        data
        }
    },


  components: { Fourth },
  layout: "wizology",

    loading: true,
 
 

  methods: {
     nextPage() {
      this.$store.commit("choice/increment_step")
      
    },
    resetValues() {
      this.$store.commit("choice/reset")
      this.$store.commit("choice/resetClick")
      
    },
  
    addValue_one() {
      this.$store.commit("choice/increment_first")
      this.nextPage()
    },

       addValue_two() {
      this.$store.commit("choice/increment_second")
      this.nextPage()
    },

       addValue_three() {
      this.$store.commit("choice/increment_third")
      this.nextPage()
    },
       addValue_fourth() {
      this.$store.commit("choice/increment_fourth")
      this.nextPage()
    },

    
    incrementZero() {
      this.$store.commit("choice/incrementZero")
      this.nextPage()
    },
     
  },
};
</script>


<style>
.message{
font-family: 'Ovo', serif;
text-align: center;
font-size: 15px;
margin: 5px;
font-style: italic;

}
</style>