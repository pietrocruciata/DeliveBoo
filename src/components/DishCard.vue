<template>
    <div class=" col-sm-12 col-md-6 col-xl-4 p-2">
        <div class="card card-h p-2">
            <h3 class="m-0">piatto: {{ dish.name }}</h3>
            <p class="m-0">descrizzione: {{ dish.description }}</p>
            <div>prezzo: {{ dish.price }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dish: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card-h {
    height: 300px;
}
</style>