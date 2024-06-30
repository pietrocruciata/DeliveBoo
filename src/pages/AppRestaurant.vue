<template>
    <div class="container mt-3 fs-3 d-flex align-items-center justify-content-center">Le Nostre Specialità</div>
    <div class="container mt-3">
        <!-- <RouterLink to="/">torna alla home</RouterLink> -->
        <div class="row">
            <template v-for="dish in dishes " key="dish.id">
                <DishCard :dish="dish"></DishCard>
            </template>
        </div>
    </div>

</template>

<script>
import DishCard from '../components/DishCard.vue'

export default {
    components: {
        DishCard
    },
    data() {
        return {
            dishes: [
                { name: 'Spagetti alla carbonara', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aperiam recusandae excepturi id, quis veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aperiam recusandae excepturi id, quis veritatis!', price: '1.99', available: false, image: 'https://www.welovepasta.it/wp-content/uploads/2017/10/Spaghetti_pomodorini.jpg', id: 1 },
                { name: 'Pizza', description: 'Buona pizza', price: '8.99', available: false, image: 'https://www.welovepasta.it/wp-content/uploads/2017/10/Spaghetti_pomodorini.jpg', id: 2 },
                { name: 'Bistecca', description: 'Buona bisteccona', price: '20.50', available: true, image: 'https://www.welovepasta.it/wp-content/uploads/2017/10/Spaghetti_pomodorini.jpg', id: 3 },
                { name: 'Zuppa', description: 'Buona zuppa', price: '5', available: false, image: 'https://www.welovepasta.it/wp-content/uploads/2017/10/Spaghetti_pomodorini.jpg', id: 4 },
                { name: 'Piatto freddo', description: 'Piatttone buonone', price: '18.99', available: true, image: 'https://www.welovepasta.it/wp-content/uploads/2017/10/Spaghetti_pomodorini.jpg', id: 5 },
                { name: 'Piatto siciliano', description: 'Molto molto buono', price: '90', available: false, image: 'https://www.welovepasta.it/wp-content/uploads/2017/10/Spaghetti_pomodorini.jpg', id: 6 },
            ]




        }
    }

}
</script>

<style lang="scss" scoped></style>