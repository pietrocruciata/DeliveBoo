<template>
    <div>
        <form id="payment-form" @submit.prevent="handleSubmit" action='http://127.0.0.1:8000/api/order/make/payment'
            method="post">
            <!-- Name field with pattern restriction for letters only -->
            <div class="mb-3">
                <label for="customer_name" class="form-label">Nome e Cognome: *</label>
                <input type="text" class="form-control" id="customer_name" name="customer_name" pattern="[A-Za-z\s]+"
                    required title="Name should only contain letters." />
            </div>

            <!-- Email field with built-in email validation -->
            <div class="mb-3">
                <label for="email" class="form-label">Email: *</label>
                <input type="email" class="form-control" id="email" name="email" required />
            </div>

            <!-- Phone field with pattern restriction for phone numbers -->
            <div class="mb-3">
                <label for="phone_number" class="form-label">Numero di telefono: *</label>
                <input type="tel" class="form-control" id="phone_number" name="phone_number" pattern="\d{10}" required
                    title="Phone number should be 10 digits." />
            </div>

            <!-- Address field with minlength and maxlength attributes -->
            <div class="mb-3">
                <label for="address" class="form-label">Indirizzo: *</label>
                <input type="text" class="form-control" id="address" name="address" minlength="10" maxlength="250"
                    required />
            </div>

            <!-- Price field with minimum and maximum value restrictions -->
            <div class="mb-3">
                <label for="total_price" class="form-label">Totale:</label>
                <input type="float" class="form-control" id="total_price" name="total_price" :value="calcTotal()"
                    required readonly />
            </div>
            <input type="hidden" name="orderData" :value="JSON.stringify($store.state.cart)" />
            <!-- BRAINTREE DATA -->
            <input type="hidden" name="amount" :value="calcTotal()" />
            <input type="hidden" name="token" :value="authorization" />

            <div id="dropin-container"></div>
            <button type="submit" class="btn btn-primary mb-2">Effettua il pagamento</button>
        </form>
    </div>
</template>
<style scoped>
form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}


.form-label {
    font-weight: bold;
}

.form-control {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 10px;
}


input[type="hidden"] {
    display: inline-block;

    margin-bottom: 10px;

}


#dropin-container {
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
}

.btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
}

.btn-primary:hover {
    background-color: #0056b3;
}


.alert {
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
}

.alert-success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
}

.alert-danger {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
}
</style>


<script>
import dropin from 'braintree-web-drop-in';

export default {
    props: { authorization: { required: true, type: String }, myOrder: Object },
    data() {
        return {
            instance: null
        };
    },
    watch: {
        authorization: {
            handler() {
                if (this.authorization) {
                    this.initDropin();
                }
            },
            deep: true,
        },
    },
    methods: {
        calcTotal() {
            let tot = 0;
            this.$store.state.cart.forEach(element => {
                tot += element.qty * element.price;
            });
            return tot;
        },
        initDropin() {
            dropin.create({
                authorization: this.authorization,
                container: "#dropin-container",
            }, (err, instance) => {
                if (err) {
                    console.error(err);
                    return;
                }
                this.instance = instance;
            });
        },
        handleSubmit() {
            if (!this.instance) {
                console.error('Braintree instance non inizializzata');
                return;
            }

            this.instance.requestPaymentMethod((err, payload) => {
                if (err) {
                    console.error(err);
                    this.$router.push({ path: '/error' });
                    return;
                }

                const form = document.querySelector("#payment-form");
                const nonceInput = document.createElement("input");
                nonceInput.setAttribute("type", "hidden");
                nonceInput.setAttribute("name", "payment_method_nonce");
                nonceInput.setAttribute("value", payload.nonce);
                form.appendChild(nonceInput);

                const formData = new FormData(form);

                fetch(form.action, {
                    method: "POST",
                    body: formData,
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            this.$router.push({ path: '/succes' });
                        } else {
                            console.error("Errore nel processare il pagamento");
                            this.$router.push({ path: '/error' });
                        }
                    })
                    .catch(error => {
                        console.error("Errore nel processare il pagamento", error);
                        this.$router.push({ path: '/error' });
                    });
                this.$store.commit('clearCart');

            });

        }
    }
};
</script>