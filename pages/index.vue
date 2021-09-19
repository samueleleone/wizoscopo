<template>
 
   <div>
        <h4 class="text-2xl flex justify-center leading-7 font-semibold">
          L'oroscopo magico &#x1F52E;
        </h4>
        <p class="mt-3 flex justify-center text-white-600">
          Pensa il tuo segno zodiacale
          
    
        </p>
       
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed"></p>
          <div class="flex justify-center pt-2 space-x-2">
          <nuxt-link to="neptune"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-600 rounded shadow"> Iniziamo! </button></nuxt-link>
          </div>
        
   </div>
  
  
   
</template>


<script>

export default {
    transition: {
    name: 'home',
    mode: 'out-in'
  },
    layout: "wizology",
    methods: {
          addValue(){
              
               this.$store.commit('choice/increment_first')
          },
             resetClick(){
              this.$store.commit('choice/resetClick')
          },
          incrementZero(){
             this.$store.commit('choice/incrementZero')
          }
      },
    
};
</script>

