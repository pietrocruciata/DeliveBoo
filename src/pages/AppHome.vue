<template>
    <div>
      <!-- Caricamento -->
      <div v-if="loading" class="loading-overlay">
        <div class="loader"></div>
      </div>
  
      <div v-else>
        <div class="container-fluid p-0">
          <AppHero />
        </div>
  
        <div class="container">
          <div>
            <h6 class="text-center my-4"><strong>Scegli per tipologia</strong></h6>
            <ul class="d-flex gap-5 justify-content-center flex-wrap p-0">
              <TypesComponents v-for="(type, i) in types" :key="i" :item="type" :selectedType="selectedType" 
              @filter="filterByType(type.label, type)">
              </TypesComponents>
            </ul>
          </div>
        </div>
  
        <div class="container">
          <div class="my-4 row justify-content-center">
            <strong class="text-center">Tutti i nostri Ristoranti</strong>
            <div v-if="filteredRestaurants.length === 0">
              <p>Nessun ristorante corrispondente.</p>
            </div>
            <div v-else class="my-4 row">
              <template v-for="(restaurant, index) in filteredRestaurants" :key="index">
                <RouterLink
                  :to="{ name: 'restaurant.show', params: { id: restaurant.id } }"
                  class="col-sm-12 col-md-6 col-xl-4 p-2"
                >
                  <AppRestaurantCard :restaurant="restaurant" />
                </RouterLink>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  

<script>
import axios from 'axios'
import AppRestaurantCard from '../components/AppRestaurantCard.vue'
import AppHero from '../components/AppHero.vue'
import TypesComponents from '../components/TypesComponents.vue';
export default {

    components: {
        AppRestaurantCard,
        AppHero,
        TypesComponents
    },

    data() {
        return {
            restaurants: [],
            types: [],
            selectedType: [],
            loading: true,
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

                this.loading = false;
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

                this.loading = false;

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
                    return this.selectedType.every(selectedTypeLabel => 
                        restaurant.types.some(type => type.label === selectedTypeLabel)
                )});
            }
        }
    },


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
  background-color: rgba(255, 255, 255, 0.4); /* Sfondo sfocato */
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

.main {
  color: $brand-orange;
}

.btn-cream {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #f4efe7;
  width: 110px;
  padding: 10px;
  cursor: pointer;
}

.font-icon {
  width: 40px;
}

.disposition-types {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selected {
  background-color: $brand-orange;
}
</style>
