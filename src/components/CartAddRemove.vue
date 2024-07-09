<template>




    <div v-if="dish">
        <div class="justify-content-center input-group plus-minus">
            <button class="btn btn-outline-secondary" :class="loading ? 'disabled' : ''" @click="addOrRemove(-1)"
                type="button" id="button-addon1">-</button>
            <input type="number" v-model="qty" disabled class="form-control form-control-sm" placeholder=""
                aria-label="Example text with button addon" aria-describedby="button-addon1">
            <button class="btn btn-outline-secondary" :class="loading ? 'disabled' : ''" @click="addOrRemove(1)"
                type="button" id="button-addon1">+</button>

        </div>
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
                if (this.qty < 100) {
                    this.qty++;
                    this.dish.qty = this.qty;
                    await this.$store.commit('updateCart', { dish: this.dish });
                    toast.success('Carrello aggiornato', {
                        autoClose: 1000,
                        position: 'top-right'  // Posiziona il toast al centro della pagina
                    });
                } else {
                    toast.warning('Hai raggiunto il limite', {
                        autoClose: 3000,
                        position: 'top-right'
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
                        position: 'top-right'
                    });
                } else {
                    toast.warning('Hai raggiunto il limite', {
                        autoClose: 3000,
                        position: 'top-right'
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

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.plus-minus input {
    max-width: 50px;
}

.custom-btn {
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}


.custom-pill {
    background-color: $brand-orange;
    width: 100px;
    height: 45px;
    border-radius: 100px;
    cursor: pointer;
    top: 10px;
    left: 10px;
    user-select: none;
}

.rounded-circle {
    width: 45px;
    height: 45px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $brand-orange;
}
</style>
