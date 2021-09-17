<template>

  <div class="flex justify-center pt-4 space-x-2">
   
    <table>
         <tr> <td>  <h4> Ok, inizia a pensare al tuo segno zodiacale..</h4> </td></tr><br>
    <tr>
        <td><p class="emoji">&#9800; Ariete </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9802; Gemelli</p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9804; Leone </p>  </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9806; Bilancia </p> </td>
      </tr>
        <tr>
        <td><p class="emoji">&#9808; Sagittario </p>  </td>
      </tr>
         <tr>
        <td><p class="emoji">&#9809; Capricorno </p> </td>
      </tr>
     
      <br />
      <tr>
        <td>Il tuo segno zodiacale è presente ?</td>
        <td></td>
      </tr>
 

     
      
      <tr><td>
        <nuxt-link 
      to="Second"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  @click="addValue" > Si </button></nuxt-link>
      <nuxt-link 
      to="Second"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  @click="incrementZero" > No </button></nuxt-link>
      
      </td></tr>
      <br>

    </table>
  </div>
</template>

<script>

export default {
    
      layout: "wizology",
      mounted(){

      },
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
      
     
        

}
</script>
