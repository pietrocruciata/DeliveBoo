<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <img :src="'http://127.0.0.1:8000/api/download' + convertText(restaurant.image)" alt="">
            </div>
            <div class="col-6 d-flex flex-column">
                <div>{{ restaurant.name }}</div>
                <div>{{ restaurant.email }}</div>
                <div>{{ restaurant.address }}</div>
            </div>
        </div>
    </div>

    <div class="container mt-3 fs-3 d-flex align-items-center justify-content-center">Le Nostre Specialità</div>
    <div class="container mt-3">
        <RouterLink to="/" class="back-btn"><font-awesome-icon :icon="['fas', 'angle-left']" /></RouterLink>
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
            dishes:[],
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
            })
        },
        convertText(inputString) {
            return inputString?.replace("\\uploads", '');
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
</style>