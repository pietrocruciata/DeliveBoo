<template>
    <!-- Caricamento -->
    <div v-if="loading" class="loading-overlay">
        <div class="loader"></div>
    </div>
    <div v-else>
        <div class="container">
            <RouterLink to="/" class="back-btn my-3"><font-awesome-icon :icon="['fas', 'angle-left']" /></RouterLink>
            <div class="container pt-5">
                <div class="card restaurant_card">
                    <div class="row">
    
                        <div class="col-sm-6 ">
                            <img v-if="restaurant.image" :src="'http://127.0.0.1:8000/api/download' + convertText(restaurant.image)" alt="">
                            <img v-if="!restaurant.image" src="/img/notfound.png" alt=""
                class="img-size">
                        </div>
                        <div class="col-sm-6">
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
            loading: true,
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

                this.loading = false;
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

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(223, 222, 222, 0.8); /* Sfondo sfocato */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid $brand-orange;
  animation:
    l20-1 0.8s infinite linear alternate,
    l20-2 1.6s infinite linear;
}

@keyframes l20-1 {
  0% { clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0% ); }
  12.5% { clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0% ); }
  25% { clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100% ); }
  50% { clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0 100% ); }
  62.5% { clip-path: polygon(50% 50%, 100% 0, 100% 0, 100% 0, 100% 100%, 50% 100%, 0 100% ); }
  75% { clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0 100% ); }
  100% { clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0 100% ); }
}

@keyframes l20-2 {
  0% { transform: scaleY(1) rotate(0deg); }
  49.99% { transform: scaleY(1) rotate(135deg); }
  50% { transform: scaleY(-1) rotate(0deg); }
  100% { transform: scaleY(-1) rotate(-135deg); }
}

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