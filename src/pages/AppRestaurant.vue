<template>
    <div>
        <RouterLink to="/">torna alla home</RouterLink>
        <div class="container container-h">
            <div class="row">
                <template v-for="dish in dishes " key="dish.id">
                    <DishCard :dish="dish"></DishCard>
                </template>
            </div>
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
                { name: 'Spagetti', description: 'Buoni spagettoni', price: '12', available: true, image: '', id: 1 },
                { name: 'Pizza', description: 'Buona pizza', price: '8', available: true, image: '', id: 2 },
                { name: 'Bistecca', description: 'Buona bisteccona', price: '20', available: true, image: '', id: 3 },
                { name: 'Zuppa', description: 'Buona zuppa', price: '5', available: true, image: '', id: 4 },
                { name: 'Piatto freddo', description: 'Piatttone buonone', price: '18', available: true, image: '', id: 5 },
                { name: 'Piatto siciliano', description: 'Molto molto buono', price: '90', available: true, image: '', id: 6 },
                { name: 'Piatto siciliano', description: 'Molto molto buono', price: '90', available: true, image: '', id: 6 },
                { name: 'Piatto siciliano', description: 'Molto molto buono', price: '90', available: true, image: '', id: 6 },
            ]


        }
    }

}
</script>

<style lang="scss" scoped>
.container-h {

    border: 1px solid black;
}

.card-h {
    height: 300px;
}
</style>