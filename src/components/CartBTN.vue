<template>
    <div class="d-flex align-items-center mb-4 gap-4 mx-3">
        <button type="button" @click="addOrRemove()" class="btn custom-pill">
            {{ toAdd ? 'Aggiungi' : 'Cancella' }}

        </button>
        <CartAddRemove v-if="!toAdd" :dish="item" />

        <!-- <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal{{item.id}}">
            Delete
        </button>

        <div class="modal fade" id="exampleModal{{item.id}}" tabindex="-1"
            aria-labelledby="exampleModalLabel{{item.id}}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel{{item.id}}">Attention</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Do you really want to delete {{ item.name }}?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div> -->


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
            console.log("Clicked, Dish:", this.item);


            if (this.$store.state.restaurantId && this.$store.state.restaurantId !== this.item.restaurant_id && this.toAdd) {
                if (confirm('stai aggiungendo il piatto di un altro ristorante, vuoi svuotare il carrello?')) {
                    this.$store.commit('clearCart'); // Svuota il carrello se l'utente conferma
                    this.$store.commit('addRemoveCart', { dish: this.item, toAdd: this.toAdd });

                    let toastMsg = this.toAdd ? 'Aggiunto al carrello' : 'Rimosso dal carello';
                    toast(toastMsg, {
                        autoClose: 1000,
                        position: 'bottom-right'
                    });

                    this.toAdd = !this.toAdd;
                    this.confirmDeleteCart = false
                }
                return;
            }

            this.$store.commit('addRemoveCart', { dish: this.item, toAdd: this.toAdd });

            let toastMsg = this.toAdd ? 'Aggiunto al carrello' : 'Rimosso dal carello';
            toast(toastMsg, {
                autoClose: 1000,
                position: 'bottom-right'
            });

            this.toAdd = !this.toAdd;
        },
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
