<template>

    <div class="d-flex bg_cream  p-3 justify-content-around align-items-center">


        <div class="c-orange d-flex">
           
          <img src="/img/logo.png" alt="">
        </div>

        <div class="d-flex  gap-md-5 gap-3 font-icon c-white">
            <div >
                <RouterLink to="/"><font-awesome-icon :icon="['fas', 'house']" /></RouterLink>
            </div>
            <div >
                <a href="#"><font-awesome-icon :icon="['fas', 'user']" /></a>
            </div>
            <div >
                <a href="#"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></a>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.bg_cream {
    background-color: $brand-orange
}

.c-orange {
    color: $brand-orange
}


.button-orange {
    background-color: $brand-orange;
    text-align: center;
    padding: 5px;
    width: 100px;
    border: 1px solid rgb(141, 100, 23);
    border-radius: 20px;
}

.font-icon{
    font-size: 20px;
    color: white;

    &>*:hover{
        color:$brand-grey
    };
}



</style>