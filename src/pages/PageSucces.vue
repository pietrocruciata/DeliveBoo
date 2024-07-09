<template>
    <div class="success-container">
        <div class="success-message">
            <h1>Pagamento Effettuato con Successo!</h1>
            <p>Grazie per il tuo acquisto. Il tuo pagamento è stato elaborato correttamente.</p>
            <router-link to="/" class="home-link">Torna alla Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuccessPage"
};
</script>

<style scoped>
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
    border: 2px solid #4caf50;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.success-message h1 {
    color: #4caf50;
    margin-bottom: 10px;
}

.success-message p {
    margin-bottom: 20px;
}

.home-link {
    display: inline-block;
    padding: 10px 20px;
    color: #ffffff;
    background-color: #4caf50;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.home-link:hover {
    background-color: #45a049;
}
</style>