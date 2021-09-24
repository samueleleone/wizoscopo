<template>
  <div class="flex justify-center space-x-2">
     
    <table>
        <tr> <td>  <h4 class="flex justify-center" > Ho capito.. continuiamo </h4> </td></tr><br>
      <tr>
        <td><p class="emoji">&#9809;  Capricorno </p>  </td>
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
        <td><p class="emoji">&#9801; Toro </p> </td>
      </tr>
      <br />
               <p class="pt-4 text-gray-800 border-t border-dashed"></p>

      <tr>
        <td><p class="flex justify-center"> Non sono ancora sicuro, adesso lo vedi ?</p></td>
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