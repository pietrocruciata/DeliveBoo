<template>
    <div class="success-container">
        <div class="success-message">
            <h1>Pagamento Fallito</h1>
            <p>Siamo spiacenti, ma il tuo pagamento non è andato a buon fine.</p>
            <p>Per favore, prova di nuovo o contatta il supporto clienti per assistenza.</p>
            <router-link to="/cart" class="home-link">Torna al carrello</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageError"
};
</script>

<style lang="scss" scoped>
.success-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f8ff;
}

.success-message {
    text-align: center;
    padding: 20px;
    border: 2px solid #FE8B79;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.success-message h1 {
    color: #FE8B79;
    margin-bottom: 10px;
}

.success-message p {
    margin-bottom: 20px;
}

.home-link {
    display: inline-block;
    padding: 10px 20px;
    color: white;
    background-color: #FE8B79;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.home-link:hover {
    background-color: #FE8B79;
}
</style>