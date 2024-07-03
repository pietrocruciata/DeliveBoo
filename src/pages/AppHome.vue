<template>
    <div class="container ">
        <!-- <h5 class="btn-orange">L'ordine direttamente a casa tua</h5> -->
        <div>
            <h6 class="text-center my-4"><strong>Scegli per tipologia</strong></h6>
            <ul class="d-flex gap-5 justify-content-center flex-wrap">
                <!-- <li>
                     <div class="text-center font-icon disposition-types" @click="selectedType = [] ">
                        <div class="btn-orange">tutti i ristoranti</div>
                    </div> 
                </li> -->
                <li class=" size-types disposition-types col-xl-2" v-for="(type, i) in types " :key="i">
                    <div @click="filterByType(type.label, type)"
                        :class="selectedType.includes(type.label) ? 'btn-cream selected' : 'btn-cream'">
                        <img :src="type.image" alt="" class="text-center font-icon">
                        <div>{{ type.label }}</div>
                    </div>
                </li>
            </ul>

        </div>
    </div>

    <section>
        <div class="container">
            <div class="my-4 row ">
                <strong class="text-center">Tutti i nostri Ristoranti</strong>
                <RouterLink to="/restaurant">
                    <div v-if="filteredRestaurants.length === 0">
                        <p>Nessun ristorante corrispondente.</p>
                    </div>
                    <div v-else class="my-4 row">

                        <template v-for="(restaurant, index) in filteredRestaurants" :key="index">
                            <AppRestaurantCard :restaurant="restaurant"/>
                        </template>

                    </div>
                </RouterLink>
            </div>
        </div>
    </section>






</template>

<script>
import axios from 'axios'
import AppRestaurantCard from '../components/AppRestaurantCard.vue'

export default {

    components: {
        AppRestaurantCard,
    },
    data() {
        return {
            restaurants: [],
            types: [],
            selectedType: [],

        }
    },

    methods: {

        convertText(inputString) {
            return inputString.replace("\\uploads", '');
        },

        fetchRestaurants() {
            //chiamata axios
            axios.get('http://127.0.0.1:8000/api/restaurants', {
                // params: {
                // perPage : this.perPage,
                // page: this.currentPage
                // }
            }).then((res) => {
                console.log(res.data.restaurants)

                this.restaurants = res.data.restaurants

                console.log(this.restaurants);
                // this.lastPage = res.data.restaurants.last_page
            })
        },

        fetchTypes() {
            //chiamata axios
            axios.get('http://127.0.0.1:8000/api/types', {
                // params: {
                // perPage : this.perPage,
                // page: this.currentPage
                // }
            }).then((res) => {
                console.log(res.data.types)

                this.types = res.data.types

                // console.log(this.types);
                // this.lastPage = res.data.restaurants.last_page
            })
        },

        filterByType(typeLabel, i) {
            const index = this.selectedType.indexOf(typeLabel);
            if (index === -1) {
                this.selectedType.push(typeLabel);
                // console.log(this.selectedType);
            } else {
                this.selectedType.splice(index, 1);
                // console.log(this.selectedType);
            }

        }
    },

    created() {
        this.fetchRestaurants(),
            this.fetchTypes()
    },

    computed: {
        filteredRestaurants() {
            if (this.selectedType.length === 0) {
                return this.restaurants;
            } else {
                return this.restaurants.filter(restaurant => {
                    return restaurant.types.some(type => this.selectedType.includes(type.label));
                });
            }
        }
    },


}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.main {
    color: $brand-orange;
}

.btn-cream {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    // border: 1px solid black;
    background-color: #F4EFE7;
    width: 110px;
    padding: 10px;
    cursor: pointer;

}

.font-icon {
    width: 40px;
}

// .size-types {
//     width: 120px;
// }

.disposition-types {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.selected {
    background-color: $brand-orange;
}
</style>