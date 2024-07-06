<template>
    <button type="button" @click="addOrRemove()" class="cart-btn btn btn-sm btn-outline-secondary me-2">
        <font-awesome-icon :icon="['fas', toAdd ? 'cart-shopping' : 'cart-check']" />
    </button>
    <CartAddRemove v-if="!toAdd" :dish="item" />
</template>

<script>
import CartAddRemove from './CartAddRemove.vue';
import { toast } from 'vue3-toastify';

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
            if (!this.item.qty) {
                this.item.qty = 1; // Assicurati che 'qty' sia definito correttamente
            }
            console.log("Clicked, Dish:", this.item); // Aggiungi console log per tracciare 'item'

            // Controlla se il ristorante corrente è definito nel Vuex store
            if (this.$store.state.restaurantId && this.$store.state.restaurantId !== this.item.restaurant_id && this.toAdd) {
                if (confirm("Stai cercando di aggiungere un elemento da un altro ristorante. Vuoi svuotare il carrello?")) {
                    this.$store.commit('clearCart'); // Svuota il carrello se l'utente conferma
                }
                return;
            }

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
