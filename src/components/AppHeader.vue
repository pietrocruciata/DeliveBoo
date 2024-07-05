<template>

    <div class="d-flex bg_cream  p-2 justify-content-around align-items-center">


        <div class="c-orange d-flex">

            <img src="/img/logo.png" alt="" class="font-logo">
        </div>

        <div class="d-flex  gap-md-5 gap-3 font-icon c-white">
            <div>
                <RouterLink to="/"><font-awesome-icon :icon="['fas', 'house']" /></RouterLink>
            </div>
            <div>
                <a href="#"><font-awesome-icon :icon="['fas', 'user']" /></a>
            </div>
            <div>
                <!-- <a href="#"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></a> -->
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                        <router-link class="nav-link" :class="$route.name == 'Cart'? 'active':''" aria-current="page" :to="{ name: 'Cart' }">
                            <!-- <i class="bi bi-cart3 h4"></i> -->
                            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                            <span v-if="$store.state.cart.length > 0" class="align-items-center justify-content-center translate-middle badge rounded-pill bg-secondary">
                            {{ $store.state.cart.length }}
                            </span>
                        </router-link>
                    </li>
                </ul>
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
    background-color: $brand-orange;

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

.font-icon {
    font-size: 25px;
    color: white;

    &>*:hover {
        color: $brand-grey
    }

    ;
}

.font-logo {
    width: 100px;
}
</style>