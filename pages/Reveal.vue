<template>
  <div>
    <h4 class="text-2xl leading-7 font-semibold">Ho finito!</h4><br>
    <p class="mt-3 text-white-600">Il segno a cui stai pensando è: <br /></p><br>

    <div v-switch="zodiac_sign">
      <h4 v-case="0">Non stai pensando a nessun segno</h4>
      <h4 v-case="1"> &#9800; Ariete</h4>
      <h4 v-case="2">&#9801; Toro</h4>
      <h4 v-case="3">&#9802; Gemelli</h4>
      <h4 v-case="4">&#9803; Cancro</h4>
      <h4 v-case="5">&#9804; Leone</h4>
      <h4 v-case="6">&#9805; Vergine</h4>
      <h4 v-case="7">&#9806; Bilancia</h4>
      <h4 v-case="8">&#9810; Acquario</h4>
      <h4 v-case="9">&#9808; Sagittario</h4>
      <h4 v-case="10">&#9811; Pesci</h4>
      <h4 v-case="11">&#9809; Capricorno</h4>
      <h4 v-case="12">&#9807; Scorpione</h4>
      <h4 v-case="15"> Non è possibile che sia in tutte le liste</h4>
      
    </div>
    <br />
    <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
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
          Let's start again!
        </button></nuxt-link
      >
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import VSwitch from "v-switch-case";

Vue.use(VSwitch);

export default {
  data() {
    return {
      zodiac_sign: this.$store.state.choice.counter,
    };
  },

  layout: "wizology",
  mounted() {},
  methods: {
    resetValues() {
      this.$store.commit("choice/reset");
      this.$store.commit("choice/resetClick");
    },
  },
};
</script>

