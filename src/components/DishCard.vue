<template>
    <div class=" col-sm-12 col-md-4 col-xl-3 p-2">
        <div class="card card-h">
            <img class="card-img-top image-h" :src="dish.image" alt="foto">
            <div class="card-body d-flex flex-column gap-2">
                <div class="d-flex justify-content-between">
                    <h3 class="m-0 fs-6"> {{ dish.name }}</h3>
                    <div>{{ dish.price }}$</div>
                </div>
                <div>
                    <div>Dettagli</div>
                    <p class="m-0">{{ dish.description }}</p>
                </div>
            </div>
            <div class="d-flex justify-content-center mb-3">
                <button class="btn mt-auto rounded-circle" :class="{ 'd-none': quantity > 0 }" @click="add">+</button>

                <div class="d-flex justify-content-center align-items-center gap-2 custom-pill"
                    :class="{ 'd-none': quantity < 1 }">
                    <button class="custom-btn" :class="{ 'd-none': quantity < 1 }" @click="subtract">-</button>
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
        add() {
            this.quantity++
            console.log(this.quantity)
            return this.quantity
        },

        subtract() {
            this.quantity--
            console.log(this.quantity)
            return this.quantity
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card-h {
    height: 500px;
    // width: 300px;
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
    height: 200px;
    max-width: 100%;
    object-fit: cover;
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