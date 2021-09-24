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
     data() {
    return {
     
      zodiac_sign: this.$store.state.choice.counter,
    }
    },
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
             console.log(zodiac_sign)
          },
           incrementZero(){
             this.$store.commit('choice/incrementZero')
          },
         
      
          
      }
};
</script>