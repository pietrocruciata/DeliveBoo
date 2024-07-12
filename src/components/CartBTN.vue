<template>
    <div class="d-flex align-items-center mb-4 gap-4 mx-3">
        <button type="button" @click="addOrRemove()" class="btn custom-pill">
            {{ toAdd ? 'Aggiungi' : 'Cancella' }}
        </button>
        <CartAddRemove v-if="!toAdd" :dish="item" />
    </div>
    <div v-if="confirmDeleteCart" class="modal">
        <div class="modal-content ">
            <!-- <p>Stai aggiungendo il piatto di un altro ristorante. Vuoi svuotare il
                carrello?</p> -->
            <p>Stai cambiando il ristorante. Vuoi aggiungere questo piatto nel carrello?</p>
            <div class="d-flex gap-3 justify-content-center">
                <button class="btn-cream" @click="handleClearCart">SI</button>
                <button class="btn-cream" @click="confirmDeleteCart = false">NO</button>
            </div>
        </div>
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
            confirmDeleteCart: false,
        };
    },
    methods: {
        async addOrRemove() {
            if (!this.item.qty) {
                this.item.qty = 1;
            }
            if (this.$store.state.restaurantId && this.$store.state.restaurantId !== this.item.restaurant_id && this.toAdd) {
                // Show modal instead of using confirm
                this.confirmDeleteCart = true;
                return;
            }
            this.updateCart();
        },
        handleClearCart() {
            this.$store.commit('clearCart');
            this.updateCart();
            this.confirmDeleteCart = false;
        },
        updateCart() {
            this.$store.commit('addRemoveCart', { dish: this.item, toAdd: this.toAdd });
            let toastMsg = this.toAdd ? 'Aggiunto al carrello' : 'Rimosso dal carello';
            toast(toastMsg, {
                autoClose: 1000,
                position: 'bottom-right'
            });
            this.toAdd = !this.toAdd;
        }
    },
    mounted() {
        let cart = this.$store.state.cart;
        let obj = cart.find(o => o.id === this.dish.id);
        if (obj) {
            this.toAdd = false;
            this.item = { ...obj };
        } else {
            this.item = { ...this.dish };
            this.toAdd = true;
        }
    },
};
</script>
<style lang="scss" scoped>
@use '../style/partials/variables' as *;

/* Style your modal here */
.modal {
    background-color: rgba(0, 0, 0, 0.5); 
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-content {
    background: $brand-orange;
    padding: 20px;
    border-radius: 20px;
    max-width: 300px;
    text-align: center;
    color: rgb(238, 238, 238);
    font-size: 20px;
}
.btn-cream {
    border-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    /* border: 1px solid black; */
    background-color: #F4EFE7;
    width: 110px;
    padding: 10px;
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
}
</style>
