<template>
  <div class="flex justify-center space-x-2">
    <table>
         <tr> <td>  <h4> Ci siamo quasi..</h4> </td></tr><br>
      <tr>
        <td><p class="emoji">&#9803; Cancro </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9804; Leone </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9804; Vergine </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9806; Bilancia </p> </td>
      </tr>
          <tr>
        <td><p class="emoji">&#9807; Scorpione </p>  </td>
      </tr>
      <br />
               <p class=" pt-4 text-gray-800 border-t border-dashed"></p>

      <tr>
        <td>Il tuo segno zodiacale è presente ?</td>
        <td></td>
      </tr>
    
      
      <tr><td>

        <div class="flex justify-center pt-4 space-x-2">
         <nuxt-link 
      to="Fourth"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded shadow"  @click="addValue" > Si </button></nuxt-link>
      <nuxt-link 
      to="Fourth"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  @click="incrementZero" > No </button></nuxt-link>
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
              this.$store.commit('choice/increment_third')
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

