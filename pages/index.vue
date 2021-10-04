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
      
         </div>


          

  </div>
</template>


<script>
import Vue from 'vue'
import VSwitch from 'v-switch-case'
import Fourth from '../components/Fourth.vue';
import moment from 'moment'

Vue.use(VSwitch);

export default {

  data() {
    return {
      
    }
  }, 

   


  components: { Fourth },
  layout: "wizology",

  
 
 

  methods: {
     nextPage() {
      this.$store.commit("choice/increment_step")
      
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