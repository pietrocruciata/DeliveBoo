<template>
  <section>
    <header>
      <AppHeader />
    </header>

    <main>
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
@use './style/general'
</style>