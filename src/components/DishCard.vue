<template>
    <div class=" col-sm-12 col-md-6 col-xl-4 p-2">
        <div class="card">
            <img class="card-img-top" :src="dish.image" alt="foto">
            <div class="card-body">
                <h3 class="m-0"> {{ dish.name }}</h3>
                <p class="m-0">{{ dish.description }}</p>
                <div>{{ dish.price }}$</div>
                <button class="btn btn-primary" :class="{ 'd-none': quantity > 0 }" @click="addFood">Aggiungi al
                    carello</button>
                <div class="d-flex justify-content-center gap-2">
                    <button class="custom-btn" :class="{ 'd-none': quantity < 1 }" @click="subtrack">-</button>
                    <div :class="{ 'd-none': quantity < 1 }">{{ quantity }}</div>
                    <button class="custom-btn" :class="{ 'd-none': quantity < 1 }" @click="add">+</button>
                </div>
            </div>
        </div>
    </div>







</template>









<script>



export default {

    props: {
        dish: {
            type: Object,
            required: true
        }
    },


    data() {
        return {
            quantity: 0,
        }
    },


    methods: {
        addFood() {
            this.quantity++
            return this.quantity
        },

        add() {
            this.quantity++
            return this.quantity
        },

        subtrack() {
            this.quantity--
            return this.quantity
        }


    }
}
</script>

<style lang="scss" scoped>
.card-h {
    height: 400px;
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

.image-h {
    height: 150px;
}
</style>