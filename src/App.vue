<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

  export default {
    components: {
    AppHeader,
    AppMain,
    AppFooter
  },
    
  }
</script>

<style lang="scss">
@use './style/general'

</style>