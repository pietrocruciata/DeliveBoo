<template>
    <div class=" col-sm-12 col-md-6 col-xl-4 p-2">
        <div class="card card-h">
            <img class="card-img-top image-h" :src="dish.image" alt="foto">
            <div class="card-body d-flex flex-column p-2">
                <div class="d-flex justify-content-between mb-2">
                    <h3 class="m-0 fs-6"> {{ dish.name }}</h3>
                    <div class="flex-shrink-0"><span class="euro-char">&euro; </span><strong>{{ dish.price }}</strong>
                    </div>
                </div>
                <div>
                    <div>Dettagli</div>
                    <p class="m-0 description-air">{{ dish.description }}</p>
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
            <div class="availabile-badge d-flex justify-content-center align-items-center p-1"
                :class="{ 'd-none': dish.available === false }">disponibile a breve</div>
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
    height: 550px;
    // width: 300px;
}

.card-h:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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


.euro-char {
    font-size: 18px;
    color: $brand-orange;
}

.description-air {
    color: grey;
    font-size: 18px;
    height: 120px;
    overflow: auto;

}

.availabile-badge {
    background-color: $brand-salmon;
    color: white;
    position: absolute;
    top: 8px;
    right: 0px;
    font-size: 14px;
}
</style>