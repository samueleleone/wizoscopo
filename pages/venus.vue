<template>
  <div class="flex justify-center space-x-2">
    <table>
         <tr> <td>  <h4 class="flex justify-center" > Ancora un piccolo sforzo!</h4> </td></tr><br>
       <tr>
        <td><p class="emoji">&#9808; Sagittario </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9810; Acquario </p>  </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9807; Scorpione </p>  </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9811; Pesci </p>  </td>
      </tr>
    
      <tr>
        <td><p class="emoji">&#9809; Capricorno </p> </td>
      </tr>
      <br />
               <p class=" pt-4 text-gray-800 border-t border-dashed"></p>

      <tr>
        <td><p class="flex justify-center">Ormai ci siamo.. il tuo segno è tra questi? </p></td>
        <td></td>
      </tr>
     
      
      <tr><td>

        <div class="flex justify-center pt-4 space-x-2">
          <nuxt-link 
      to="mercury"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded shadow"  @click="addValue" > Si </button></nuxt-link>
      <nuxt-link 
      to="mercury"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  @click="incrementZero" > No </button></nuxt-link>
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
              this.$store.commit('choice/increment_fourth')
          },
            resetClick(){
              this.$store.commit('choice/resetClick')
          },
           incrementZero(){
             this.$store.commit('choice/incrementZero')
          },
           incrementZero(){
             this.$store.commit('choice/incrementZero')
          }
      }
};
</script>