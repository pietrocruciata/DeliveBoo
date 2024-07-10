<template>
    <div class="container">
        <RouterLink to="/" class="back-btn my-3"><font-awesome-icon :icon="['fas', 'angle-left']" /></RouterLink>
        <div class="container pt-5">
            <div class="card restaurant_card">
                <div class="row">

                    <div class="col-6 ">
                        <img :src="'http://127.0.0.1:8000/api/download' + convertText(restaurant.image)" alt="">

                    </div>
                    <div class="col-6">
                        <div class="card-body  px-2">
                            <h5 class="card-title my-3"><strong>Nome del ristorante: </strong> {{ restaurant.name }}
                            </h5>
                            <p><strong>Email: </strong> {{ restaurant.email }}</p>
                            <p><strong>Indirizzo: </strong> {{ restaurant.address }}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>




    <div class="container mt-3 fs-3 d-flex align-items-center justify-content-center">Le Nostre Specialità</div>
    <div class="container mt-3">
        <div class="row">
            <template v-for="dish in dishes " key="dish.id">
                <DishCard :dish="dish"></DishCard>
            </template>
        </div>
    </div>

</template>

<script>
import DishCard from '../components/DishCard.vue'
import axios from 'axios'


export default {
    components: {
        DishCard
    },
    data() {
        return {
            restaurantId: this.$route.params.id,
            restaurant: {},
            dishes: [],
        }
    },
    methods: {
        fetchDishes() {
            //chiamata axios
            axios.get(`http://127.0.0.1:8000/api/restaurants/${this.restaurantId}`, {
                // params: {
                // perPage : this.perPage,
                // page: this.currentPage
                // }
            }).then((res) => {
                console.log(res.data.restaurant.dishes)

                this.restaurant = res.data.restaurant

                this.dishes = res.data.restaurant.dishes
                console.log(this.dishes)
            })
        },
        convertText(inputString) {
            return inputString?.replace("\\uploads", '').replace("uploads", '');
        },
    },

    created() {
        this.fetchDishes()
    }


}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.back-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;

    &:hover {
        background-color: $brand-orange;
        color: white;
    }
}

.image-h {
    height: 400px;
    max-width: 100%;
    object-fit: cover;
}

.restaurant_card {
    box-shadow: 0 0 8px lightgrey;
}
</style>