<template>
<div>
    <div class="panel">
      <client-only>
        <Particles
          color="#fff"
          :particles-number="100"
          shape-type="circle"
          :particle-size="1"
          movement-direction="top"
          lines-color="#dedede"
          :line-linked="false"
          :move-speed="0.75"
        />
      </client-only>
    </div>
  <div
    class="
      relative
      bg-transparent
      flex
      items-center
      justify-center
      min-h-screen
      sm:items-center
      sm:pt-0
      content
    "
  >

    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1 class="flex justify-center pt-8 sm:pt-0"><nuxt-link to="/">wizology</nuxt-link></h1>

      <div
        class="
          mt-3
          bg-white bg-opacity-30
          overflow-hidden
          shadow
          sm:rounded-lg
          p-6
        "
      >
        <Nuxt />
      </div>
      <div class="flex justify-center pt-4 space-x-2">
        <a href="https://github.com/wiztoth" target="_blank">
          <svg
            height="32"
            style="filter: invert(100%); margin-top: 10%"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </div>
      <div class="flex justify-center pt-4 space-x-2">
        
        <p> <a href="https://github.com/wiztoth" target="_blank"> github.com/wiztoth </a></p></div>
        
    </div>
  </div>
</div>
</template>


<script>
import Particles from "~/components/Particles.vue";

export default {
  components: {
    Particles,
  },
};
</script>



<style>

.content {
  z-index: 100;
  position: absolute;
}
.panel {
  height: 100vh !important;
  width: 100vw !important;
  position: fixed !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-blend-mode: overlay !important;
  background-attachment: fixed !important;
  background-position: fixed !important;
  z-index: -1 !important;
}

body {
  font-size: 15px !important;
  color: rgb(231, 231, 231);
  font-family: "Montserrat", serif !important;
}

.emoji {
  font-size: 18px;
}

h1 {
  font-size: 55px !important;
  color: white;
  font-family: "Libre Caslon Text", cursive !important;
}

h4 {
  font-size: 25px !important;
  font-family: "Alata", cursive !important;
}

#particles-instance {
  height: 100vh !important;
  width: 100vw !important;
  position: fixed !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  z-index: 2 !important;
}

.particles-js{
display: flex;
    width: 100vw;
    height: 100vh;
}
</style>


