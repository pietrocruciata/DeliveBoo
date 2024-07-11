<template>
  <section class="d-flex flex-column section-container">
    <header>
      <AppHeader />
    </header>

    <main class="flex-grow-1">
      <RouterView />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </section>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue'

export default {
  async mounted() {
    await this.$store.commit('initialiseStore')
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

}
</script>

<style lang="scss">
@use './style/general';


.section-container{
  min-height: 100vh;
}
</style>