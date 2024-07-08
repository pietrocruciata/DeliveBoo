<template>
    <section class="h-100 h-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card border-0">
                        <div class="card-body p-4">

                            <div class="row">
                                <div class="col-lg-7">
                                    <template v-if="$store.state.restaurantId">
                                        <h5 class="mb-3"><router-link
                                                :to="{ name: 'restaurant.show', params: { id: $store.state.restaurantId } }"
                                                class="text-body"><i
                                                    class="fas fa-long-arrow-alt-left me-2"></i>Continua a
                                                fare
                                                acquisti</router-link></h5>
                                    </template>

                                    <template v-if="!$store.state.restaurantId">
                                        <h5 class="mb-3"><router-link :to="{ name: 'Home' }" class="text-body"><i
                                                    class="fas fa-long-arrow-alt-left me-2"></i>Torna ai
                                                ristoranti</router-link></h5>
                                    </template>
                                    <hr>

                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <p class="mb-0">Hai {{ $store.state.cart.length }} articoli nel tuo carrello
                                            </p>
                                        </div>
                                    </div>

                                    <div v-for="item in $store.state.cart" class="card mb-3 shadow-sm border-0"
                                        :key="item.id">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <img :src="'http://127.0.0.1:8000/api/download' + convertText(item.image)"
                                                            class="img-fluid rounded-3" alt="Shopping item">
                                                    </div>
                                                    <div class="ms-3">
                                                        <p>{{ item.name }}</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <CartAddRemove :dish="item" />
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <h5 class="mb-0"><i class="bi bi-currency-dollar"></i>{{
                                                            item.price * item.qty }} &euro;</h5>
                                                        <small v-if="item.hasDiscount"
                                                            class="text-muted text-decoration-line-through"><i
                                                                class="bi bi-currency-dollar"></i>{{
                                                            item.price }}</small>
                                                    </div>
                                                    <a role="button" @click="removeItem(item)" class="ms-4"
                                                        style="color: #cecece;"><font-awesome-icon
                                                            :icon="['fas', 'trash']" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-5">

                                    <div class="card card-custom text-white rounded-0 border-0">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <h5 class="mb-0">Dettagli</h5>
                                                <i class="bi bi-cart3 h1"></i>
                                            </div>
                                            <hr class="my-4">
                                            <!-- <div class="d-flex justify-content-between">
                                                <p class="mb-2">Subtotale</p>
                                                <p class="mb-2"><i class="bi bi-currency-dollar"></i>{{
                                        $store.state.cartTotal }} &euro;</p>
                                            </div> -->
                                            <div class="d-flex justify-content-between mb-4">
                                                <p class="mb-2">Totale</p>
                                                <p class="mb-2"><i class="bi bi-currency-dollar"></i>{{
                                                    $store.state.cartTotal }} &euro;</p>
                                            </div>
                                            <router-link :to="{ name: 'checkout' }">
                                                <button type="button" class="btn  btn-custom  btn-block btn-lg">
                                                    Vai alla cassa
                                                </button>
                                            </router-link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import CartAddRemove from '../components/CartAddRemove.vue';
import AppRestaurant from '../pages/AppRestaurant.vue';
// import { createStore } from '..store/index.js'
export default {
    components: { CartAddRemove, AppRestaurant },
    methods: {
        removeItem(item) {
            this.$store.commit('addRemoveCart', { dish: item, toAdd: false })
        },
        convertText(inputString) {
            return inputString?.replace("\\uploads", '').replace("uploads", '');
        },
    },
    mounted() {

    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card-custom {
    background-color: $brand-blue;
}

.btn-custom {
    background-color: $brand-salmon;
}

img {
    width: 150px;
    height: 100px;
    object-fit: cover;
}
</style>