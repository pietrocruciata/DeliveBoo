<template>
    <button type="button" @click="addOrRemove()" class="cart-btn btn btn-sm btn-outline-secondary me-2">
        <font-awesome-icon :icon="['fas', 'cart-shopping']" :class="toAdd ? 'bi bi-cart' : 'bi bi-cart-check'" />
    </button>
    <CartAddRemove v-if="!toAdd" :dish="item" />
</template>

<script>
import CartAddRemove from './CartAddRemove.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    props: ['dish'],
    components: { CartAddRemove },
    data() {
        return {
            toAdd: true,
            item: {},
        };
    },
    methods: {
        async addOrRemove() {
            this.item.qty = 1; // Assicurati che 'qty' sia definito correttamente
            console.log("Clicked, Dish:", this.item); // Aggiungi console log per tracciare 'item'
            this.$store.commit('addRemoveCart', { dish: this.item, toAdd: this.toAdd });

            let toastMsg = this.toAdd ? 'Added to cart' : 'Removed from cart';
            toast(toastMsg, { autoClose: 1000 });

            this.toAdd = !this.toAdd;
        },
    },
    mounted() {
        let cart = this.$store.state.cart;
        let obj = cart.find(o => o.id === this.dish.id);
        if (obj) {
            this.toAdd = false;
            this.item = { ...obj }; // Copia dell'oggetto per evitare modifiche dirette a oggetti condivisi
        } else {
            this.item = { ...this.dish }; // Copia dell'oggetto per evitare modifiche dirette a oggetti condivisi
            this.toAdd = true;
        }
    },
};
</script>

<style>
.cart-btn {
    width: 40px;
    height: 38px;
}
</style>
