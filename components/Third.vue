<template>
  <div class="flex justify-center space-x-2">
    <table>
         <tr> <td>  <h4 class="flex justify-center" > Dammi ancora un attimo..</h4> </td></tr><br>
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
        <td><p class="flex justify-center">Ci siamo quasi, dimmi se c'è ora :</p></td>
        <td></td>
      </tr>
    
      
      <tr><td>

  
      </td></tr>
    </table>
  </div>
</template>

<script>
export default {
    transition: {
    name: 'home',
    mode: 'out-in'
  },
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
          },
          
      }
};
</script>

