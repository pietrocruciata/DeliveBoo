<template>
    <div class="d-flex align-items-center mb-4 gap-4 mx-3">
        <button type="button" @click="addOrRemove()" class="btn custom-pill">
            {{ toAdd ? 'Aggiungi' : 'Cancella' }}
            <!-- <font-awesome-icon :icon="['fas', toAdd ? 'cart-shopping' : 'cart-shopping']" /> -->
        </button>
        <CartAddRemove v-if="!toAdd" :dish="item" />

    </div>
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

            let toastMsg = this.toAdd ? 'Aggiunto al carrello' : 'Rimosso dal carello';
            toast(toastMsg, {
                autoClose: 1000,
                position: 'top-center'
            });

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

<style lang="scss" scoped>
.cart-btn {
    width: 40px;
    height: 38px;
}

.rounded-circle {
    width: 45px;
    height: 45px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FAAF4D;
}

.custom-pill {
    background-color: #FAAF4D;
    width: 100px;
    height: 45px;
    border-radius: 100px;
    cursor: pointer;
    top: 10px;
    left: 10px;
    user-select: none;
}
</style>
