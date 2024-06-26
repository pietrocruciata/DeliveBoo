<template>
    <div>
        <h1  class="main">home</h1>
        <RouterLink to="/restaurant">restaurant</RouterLink>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.main{
    color: $brand-orange;
}
</style>