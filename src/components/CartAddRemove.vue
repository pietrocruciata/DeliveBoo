<template>
    <div v-if="dish" class="input-group plus-minus">
        <button class="btn btn-outline-secondary" :class="loading ? 'disabled' : ''" @click="addOrRemove(-1)"
            type="button" id="button-addon1">-</button>
        <input type="number" v-model="qty" disabled class="form-control form-control-sm" placeholder=""
            aria-label="Example text with button addon" aria-describedby="button-addon1">
        <button class="btn btn-outline-secondary" :class="loading ? 'disabled' : ''" @click="addOrRemove(1)"
            type="button" id="button-addon1">+</button>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'CartAddRemove',
    props: ['dish'],
    data() {
        return {
            qty: 1,
            loading: false
        }
    },
    methods: {
        async addOrRemove(number) {
            this.loading = true;
            if (number === 1) {
                if (this.qty < 10) {
                    this.qty++;
                    this.dish.qty = this.qty;
                    await this.$store.commit('updateCart', { dish: this.dish });
                    toast.success('Carrello aggiornato', {
                        autoClose: 1000,
                        position: 'top-center'  // Posiziona il toast al centro della pagina
                    });
                } else {
                    toast.warning('Hai raggiunto il limite', {
                        autoClose: 3000,
                        position: 'top-center'
                    });
                }
            }
            if (number === -1) {
                if (this.qty > 1) {
                    this.qty--;
                    this.dish.qty = this.qty;
                    await this.$store.commit('updateCart', { dish: this.dish });
                    toast.success('Carrello aggiornato', {
                        autoClose: 1000,
                        position: 'center-center'
                    });
                } else {
                    toast.warning('Hai raggiunto il limite', {
                        autoClose: 3000,
                        position: 'top-center'
                    });
                }
            }
            this.loading = false;
        }
    },
    mounted() {
        this.qty = this.dish.qty;
    }
}
</script>

<style>
.plus-minus input {
    max-width: 50px;
}
</style>
