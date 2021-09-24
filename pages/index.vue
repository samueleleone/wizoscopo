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
          <q>{{ data_aries.message.text }}</q>
            
           
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="2">
        <div>
          <h4 class="flex justify-center">&#9801; Toro</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
              <q>{{ data_taurus.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="3">
        <div>
          <h4 class="flex justify-center">&#9802; Gemelli</h4><br>
          <p class="message">
          
        {{ this.timestamp }}<br><br>
               <q>{{ data_gemini.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="4">
        <div>
          <h4 class="flex justify-center">&#9803; Cancro</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
                <q>{{ data_cancer.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="5">
        <div>
          <h4 class="flex justify-center">&#9804; Leone</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
                 <q>{{ data_leo.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="6">
        <div>
          <h4 class="flex justify-center">&#9805; Vergine</h4><br>
          <p class="message">
          
        {{ this.timestamp }}<br><br>
                <q>{{ data_virgo.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="7">
        <div>
          <h4 class="flex justify-center">&#9806; Bilancia</h4><br>
          <p class="message">
          
        {{ this.timestamp }}<br><br>
               <q>{{ data_libra.message.text }}</q>          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="8">
        <div>
          <h4 class="flex justify-center">&#9810; Acquario</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
                 <q>{{ data_aquarius.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="9">
        <div>
          <h4 class="flex justify-center">&#9808; Sagittario</h4><br>
          <p class="message">
            
        {{ this.timestamp }}<br><br>
                 <q>{{ data_sagittarius.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="10">
        <div>
          <h4 class="flex justify-center">&#9811; Pesci</h4><br>
          <p class="message">
        
        {{ this.timestamp }}<br><br>
               <q>{{ data_pisces.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="11">
        <div>
          <h4 class="flex justify-center">&#9809; Capricorno</h4><br>
          <p class="message">
           
        {{ this.timestamp }}<br><br>
                <q>{{ data_capricorn.message.text }}</q>
          </p>
        </div>
      </div>

      <div class="flex justify-center" v-case="12">
        <div>
          <h4 class="flex justify-center">&#9807; Scorpione</h4><br>
          <p class="message">
            
        {{ this.timestamp }}<br><br>
             <q>{{ data_scorpio.message.text }}</q>
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
     var data_aries = ''
     var data_taurus=''
     var data_gemini= ''
     var data_cancer=''
     var data_leo=''
     var data_virgo=''
     var data_libra=''
     var data_aquarius=''
     var data_sagittarius=''
     var data_pisces=''
     var data_scorpio=''
     var data_capricorn=''
     data_aries = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/aries/today')
     data_taurus = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/taurus/today')
     data_gemini = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/gemini/today')
     data_cancer = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/cancer/today')
     data_leo = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/leo/today')
     data_virgo = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/virgo/today')
     data_libra = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/libra/today')
     data_aquarius = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/aquarius/today')
     data_sagittarius = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/sagittarius/today')
     data_pisces = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/pisces/today')
     data_scorpio = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/scorpio/today')
     data_capricorn = await $axios.$get('https://gbt28i645g.execute-api.eu-west-1.amazonaws.com/dev/paolofox/capricorn/today')

      return { 
        data_aries,
        data_taurus,
        data_gemini,
        data_cancer,
        data_leo,
        data_virgo,
        data_libra,
        data_aquarius,
        data_sagittarius,
        data_pisces,
        data_scorpio,
        data_capricorn
        }
    },


  components: { Fourth },
  layout: "wizology",

  
 
 

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