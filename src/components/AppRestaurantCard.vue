<template>
    <div class="card card_restaurant">
        <img v-if="restaurant.image" :src="'http://127.0.0.1:8000/api/download' + convertText(restaurant.image)" alt=""
            class="img-size">
            <img v-if="!restaurant.image" src="/img/notfound.png" alt=""
            class="img-size">
        <div class="card-body">
            <h3 class="card-title">{{ restaurant.name }}</h3>
            <p>{{ restaurant.description }}</p>
            <p><strong>Indirizzo:</strong> {{ restaurant.address }}</p>
            <p><strong>Email:</strong> {{ restaurant.email }}</p>
            <div class="overflow">
                <ul class="d-flex gap-3 p-0 m-0">
                    <li v-for="(type, j) in restaurant.types" :key="j">
                        <template v-if="j <= 2">
                            <div class="type-pill">
                                <p class="m-0 type_label"><strong>{{ type.label }}</strong></p>
                            </div>
                        </template>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        restaurant: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },

    methods: {
        convertText(inputString) {
            return inputString.replace("\\uploads", '').replace("uploads", '');
        },
    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card_restaurant {
    box-shadow: 0 0 5px lightgrey;

    height: 100%;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .type-pill {
        border: none;
        padding: 4px 7px;
        border-radius: 999px;
        background-color: $brand-orange;

        .type_label {
            color: $brand-orange;
            color: white;
            width: max-content;
        }
    }

}

.overflow {
    overflow: auto;

}

.img-size {
    width: 100%;
    height: 250px;

}
</style>