<template>
   
            <div class="d-flex bg_cream p-3 justify-content-end gap-5 ">
                <div>
                    <RouterLink to="/">Home</RouterLink>
                </div>
                <div>
                    <a href="#">Accedi</a>
                </div>
                <div class="me-5">
                   <a href="#">registrati</a> 
                </div>
            </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.bg_cream{
    background-color: $brand-cream
}
</style>