<template>
 
   <div>
        <h4 class="text-2xl leading-7 font-semibold">
          Indovino al segno zodiacale che stai pensando! &#x1F52E;
        </h4>
        <p class="mt-3 text-white-600">
          Non dirmelo, pensalo soltanto e dimmi solo se lo vedi tra le liste che ti propongo<br>
          
    
        </p>
       
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          <nuxt-link to="First"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-600 rounded shadow"> Iniziamo! </button></nuxt-link>
        </p>
   </div>
  
  
   
</template>


<script>

export default {
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

