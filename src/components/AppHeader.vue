<template>

    <div class="d-flex bg_cream  p-2  justify-content-around align-items-center">

        <div class="c-orange d-flex">

            <img src="/img/logo.png" alt="" class="font-logo">
        </div>

        <div class="d-none d-md-flex d-flex justify-content-center align-items-center  gap-md-5 gap-3 font-icon c-white ">
            <div>
                <RouterLink to="/"><font-awesome-icon :icon="['fas', 'house']" /></RouterLink>
            </div>
            <div>
                <a href="http://127.0.0.1:8000/" target="_blank"><font-awesome-icon :icon="['fas', 'user']" /></a>
            </div>
            <div class="position-relative">
                <router-link class="nav-link" :class="$route.name == 'Cart' ? 'active' : ''" aria-current="page"
                    :to="{ name: 'Cart' }">
                    <font-awesome-icon class="chat-icon" :icon="['fas', 'cart-shopping']" />
                    <span v-if="$store.getters.totalQuantity > 0"
                        class="align-items-center justify-content-center translate-middle badge rounded-pill bg-danger badge">
                        {{ $store.getters.totalQuantity }}
                    </span>
                </router-link>
            </div>
        </div>

        <nav class=" d-md-none d-sm-block">
            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><font-awesome-icon icon="fa-solid fa-bars" /></button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <RouterLink to="/">Home</RouterLink>
                </div>
                <div>
                    <a href="http://127.0.0.1:8000/" target="_blank">Profilo</a>
                </div>
                <div>
                    <router-link class="nav-link" :class="$route.name == 'Cart' ? 'active' : ''" aria-current="page"
                        :to="{ name: 'Cart' }">
                        <font-awesome-icon class="chat-icon" :icon="['fas', 'cart-shopping']" />
                        <span v-if="$store.getters.totalQuantity > 0"
                            class="align-items-center justify-content-center translate-middle badge rounded-pill bg-danger badge">
                            {{ $store.getters.totalQuantity }}
                        </span>
                    </router-link>
                </div>
            </div>
            </div>
        </nav>
    </div>

</template>

<script>
export default {
    data() {
        return {

        }
    }
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

.position-relative {
    position: relative;
}

.badge {
    position: absolute;
    top: 33px;
    left: 30px;
    height: 25px;
    width: 25px;
    display: flex;

}
</style>