<template>
<div class="revelation">
        
     

 
   
   
   <div v-switch="this.$store.state.choice.error">
      <div class="flex justify-center" v-case="0">
        <div>
          <h4 class="flex justify-center">{{ this.$store.state.choice.display_sign }} </h4><br>
          <p v-if="this.astrologer == true" class="message">
            
          valido dal {{ json_brezsny.start_date }} al {{ json_brezsny.end_date }}<br><br>
           

              
          <q>{{ json_brezsny.prediction }}</q><br><br>
           <i>Rob Breszny </i>
      <br><br>
     
            

          </p>

           <p v-if="this.astrologer == false" class="message">
            
          {{ json_fox.today }}<br><br>
           

              
          <q>{{ json_fox.prediction }}</q><br><br>
           <i>Paolo Fox </i>

     <br><br>
            Cielo Settimanale?

          </p>  
                 <div class="flex justify-center">
            

                      <v-switch  color="white" inset v-model="astrologer"></v-switch>
           
          
                 </div>
        </div>
      </div>

      
       <div class="flex justify-center" v-case="1" >
        <div>
          <h4 class="flex justify-center">Il cielo è un po' offuscato..</h4><br>
          <p class="message">
            
            {{ this.$store.state.choice.display_sign }} 
       
          </p>
        </div>
      </div>

   </div>

     
    
   
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
import Vue from 'vue'
import VSwitch from 'v-switch-case'

Vue.use(VSwitch);

export default {
  data() {
    return {
      astrologer: true,
      
     
    }
  }, 

   
  layout: "wizology",
  methods: {
    resetValues() {
      this.$store.commit("choice/reset");
      this.$store.commit("choice/resetClick");
    },
    setSign() {
      this.$store.commit("choice/setSign");
    },
  },
   
  async asyncData({ store, $axios }) {

    var json_brezsny = {};
    var json_fox ={};
    store.commit("choice/setSign");
  
    
      var url_brezsny =
      "https://foxapi.vercel.app/api/horoscope?sign=" +
      store.state.choice.sign+'&astrologer=brezsny';



      var url_fox = "https://foxapi.vercel.app/api/horoscope?sign=" +
      store.state.choice.sign+'&astrologer=fox';
    

    json_brezsny = await $axios.$get(url_brezsny);
    json_fox = await $axios.$get(url_fox)
    

    return {
      json_brezsny,
      json_fox
    };
  },
};
</script>
<style>


</style>
