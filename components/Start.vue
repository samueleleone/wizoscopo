<template>
  <div>
    <h4 class="text-2xl flex justify-center leading-7 font-semibold">
      L'oroscopo magico &#x1F52E;
    </h4>
    <p class="mt-3 flex justify-center text-white-600">
      Pensa il tuo segno zodiacale
    </p>

    <p class="mt-4 pt-4 text-gray-800 border-t border-dashed"></p>
  </div>
</template>


<script>
export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
  layout: "wizology",
  methods: {
    nextPage() {
      this.$store.commit("choice/increment_step");
    },
    addValue() {
      this.$store.commit("choice/increment_first");
      nextPage();
    },

    resetClick() {
      this.$store.commit("choice/resetClick");
    },
    incrementZero() {
      this.$store.commit("choice/incrementZero");
      nextPage();
    },
  },
};
</script>

