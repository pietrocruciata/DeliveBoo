<template>
    <li class=" size-types disposition-types col-xl-2">
        <div @click="$emit('filter')"
            :class="selectedType.includes(item.label) ? 'btn-cream selected' : 'btn-cream'">
            <img :src="item.image" alt="" class="text-center font-icon">
            <div>{{ item.label }}</div>
        </div>
    </li>

</template>

<script>
export default {
    props: {
        item: {
            type: Object,
        },
        selectedType:{
            type: Array
        }

    },
    data() {
        return {
         
        }
    },

    methods: {
       
    },
}
</script>

<style lang="scss" >
@use '../style/partials/variables' as *;

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