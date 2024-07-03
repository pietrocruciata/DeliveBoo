<template>
    <div class="container-lg ">
        <h5 class="btn-orange">L'ordine direttamente a casa tua</h5>
        <div>
            <h6 class="text-center my-4"><strong>Scegli per tipologia</strong></h6>
            <ul class="d-flex gap-5 justify-content-center flex-wrap">
                <li class=" size-types disposition-types " v-for="(type, i) in types " :key="i">
                    <img :src="type.image" alt="" class="text-center font-icon">
                    <div>{{ type.label }}</div>
                </li>

            </ul>
        </div>
        <div class="d-flex justify-content-center my-4">
            <RouterLink to="/restaurant" class="text-center"><strong>Tutti i nostri Ristoranti</strong></RouterLink>
            <div class="card"></div>

        </div>


    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            restaurants: [],
            types: [],
        }
    },

    methods: {

    fetchRestaurants() {
        //chiamata axios
        axios.get('http://127.0.0.1:8000/api/restaurants',{
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
        axios.get('http://127.0.0.1:8000/api/types',{
            // params: {
            // perPage : this.perPage,
            // page: this.currentPage
            // }
        }).then((res) => {
            console.log(res.data.types)

            this.types = res.data.types

            console.log(this.types);
            // this.lastPage = res.data.restaurants.last_page
        })
    },
    },

    created(){
      this.fetchRestaurants(),
      this.fetchTypes()
    }


}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

    .main {
        color: $brand-orange;
    }

    .btn-orange {
        border-radius: 20px;
        border: 1px solid black;
        background-color: #F4EFE7;
        width: 310px;
        padding: 10px;
    }

    .font-icon {
        width: 40px;
    }

    .size-types {
        width: 120px;
    }

    .disposition-types {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>