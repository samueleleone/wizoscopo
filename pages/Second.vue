<template>
  <div class="flex justify-center space-x-2">
     
    <table>
        <tr> <td>  <h4> Ottimo lavoro, continua così..</h4> </td></tr><br>
      <tr>
        <td><p class="emoji">&#9809;  Capricorn </p>  </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9802; Gemelli </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9811; Pesci </p>  </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9806; Bilancia </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9805; Vergine </p> </td>
      </tr>
         <tr>
        <td><p class="emoji">&#9808; Sagittario </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9801; Toro </p> </td>
      </tr>
      <br />
               <p class="pt-4 text-gray-800 border-t border-dashed"></p>

      <tr>
        <td><p class="flex justify-center">Il tuo segno zodiacale è presente ?</p></td>
        <td></td>
      </tr>
   
      
      <tr><td>

        <div class="flex justify-center pt-4 space-x-2">
          <nuxt-link to="Third"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded shadow"  @click="addValue" > Si </button></nuxt-link>
      <nuxt-link to="Third"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  @click="incrementZero" > No </button></nuxt-link>
        </div>
        </td></tr>
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
              
              this.$store.commit('choice/increment_second')
          },
            resetClick(){
              this.$store.commit('choice/resetClick')
          },
           incrementZero(){
             this.$store.commit('choice/incrementZero')
          }
      
      }

};
</script>