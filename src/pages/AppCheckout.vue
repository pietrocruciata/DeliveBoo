<template>
<Payment :authorization="this.tokenApi"/>


</template>

<script>
import Payment from '../components/Payment.vue';
import axios from 'axios';

export default {
    components: {
        Payment
    },
    data() {
        return {
            tokenApi: "",
        }
    },



    async mounted() {
        let response = await axios.get("http://127.0.0.1:8000/api/order/generate");
        this.tokenApi = response.data.token;
        console.log(this.tokenApi);
    },
}




</script>

<style lang="scss"></style>