<template>
    <div class="col-sm-12 col-md-6 col-xl-4 p-2">
        <div class="card card_restaurant">
            <img :src="'http://127.0.0.1:8000/api/download' + convertText(restaurant.image)" alt="">
            <div class="card-body">
                <h3 class="card-title">{{ restaurant.name }}</h3>
                <p>{{ restaurant.description }}</p>
                <p><strong>Indirizzo:</strong> {{ restaurant.address }}</p>
                <p><strong>Email:</strong> {{ restaurant.email }}</p>
                <div class="">
                    <ul class="d-flex gap-3 justify-content-center p-0 m-0">
                        <li v-for="(type, j) in restaurant.types" :key="j">
                            <div class="type-pill">
                                <p class="m-0 type_label"><strong>{{ type.label }}</strong></p>
                            </div>
                        </li>
                    </ul>
                </div>
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
            return{

            }
        },

        methods: {
            convertText(inputString) {
                return inputString.replace("\\uploads", '');
            },
        }

    }
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card_restaurant{
    box-shadow: 0 0 5px lightgrey;

    &:hover{
        transform: scale(1.02);
        box-shadow: 1px 1px 8px 3px $brand-orange;
    }
    .type-pill{
        border: none;
        padding: 5px 20px;
        border-radius: 999px;
        background-color: $brand-orange;
        .type_label{
            color: $brand-orange;
            color: white;
        }
    }

}
</style>