<template>

    <div class="d-flex bg_cream  py-2 px-4 justify-content-between justify-content-sm-around align-items-center">

        <div class="c-orange d-flex">
            <RouterLink to="/">

                <img src="/img/logo.png" alt="" class="font-logo">
            </RouterLink>
        </div>

        <div
            class="d-none d-md-flex d-flex justify-content-center align-items-center  gap-md-5 gap-3 font-icon c-white ">
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
           
            <button class="btn c-white bg-cream dropdown-toggle hamburger" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
            <span v-if="$store.getters.totalQuantity > 0"
                                    class="align-items-center justify-content-center translate-middle badge rounded-pill bg-danger dropdown-badge-hamburger">
                                    {{ $store.getters.totalQuantity }}
                                </span>
            <div class="dropdown">

                <ul class="dropdown-menu">
                    <li>
                        <RouterLink class="dropdown-item" to="/">Home
                        </RouterLink>
                    </li>
                    <li><a class="dropdown-item" href="http://127.0.0.1:8000/" target="_blank">Profilo</a></li>
                    <li>
                        <div class="position-relative dropdown-item">
                            <router-link class="nav-link" :class="$route.name == 'Cart' ? 'active' : ''"
                                aria-current="page" :to="{ name: 'Cart' }">
                                Carrello
                                <span v-if="$store.getters.totalQuantity > 0"
                                    class="align-items-center justify-content-center translate-middle badge rounded-pill bg-danger dropdown-badge">
                                    {{ $store.getters.totalQuantity }}
                                </span>
                            </router-link>
                        </div>
                    </li>
                </ul>
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

.c-white{
    color: white;
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

.dropdown-badge{
    position: absolute;
    top: 17px;
    left: 95px;
    height: 25px;
    width: 25px;
    display: flex;
}
.dropdown-toggle::after {
    display: none;
}

.hamburger{
    font-size: 30px;
    position: relative;
}
.dropdown-badge-hamburger{
    position: absolute;
    top: 27px;
    left: 359px;
    height: 25px;
    width: 25px;
    display: flex;
}

</style>