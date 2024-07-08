<template>
    <!-- FORM -->
    <div>
        <form id="payment-form" action='http://127.0.0.1:8000/api/order/make/payment' method="post">
            


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
                <label for="price" class="form-label">Totale:</label>
                <input type="float" class="form-control" id="price" name="price" :value="calcTotal()" required
                    readonly />
            </div>
            <input type="hidden" name="orderData" :value="JSON.stringify($store.state.cart)" />
            <!-- BRAINTREE DATA -->
            <input type="hidden" name="amount" :value="calcTotal()" />
            <input type="hidden" name="token" :value="authorization" />

            <div id="dropin-container"></div>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
    </div>

</template>

<script>

export default {
    props: { authorization: { required: true, type: String }, myOrder: Object },
    watch: {
        authorization: {
            handler() {
                if (this.authorization) {
                    this.dropin();
                }
            },
            deep: true,
        },
    },
    methods: {
        calcTotal() {
            let tot = 0;
            this.$store.state.cart.forEach(element => {
                tot = tot + (element.qty * element.price)
            });
            return tot;
        },
        dropin() {
            console.log;
            var button = document.querySelector("#submit-button");

            braintree.dropin.create(
                {
                    authorization: this.authorization,
                    selector: "#dropin-container",
                },
                function (err, instance) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    button.addEventListener("click", function () {
                        instance.requestPaymentMethod(function (err, payload) {
                            if (err) {
                            } else {
                            }
                        });
                    });
                }
            );
        },

        formCatch() {
            document
                .getElementById("payment-form")
                .addEventListener("submit", function (e) {
                    e.preventDefault(); // Previene il comportamento di default del form

                    var formData = new FormData(this);
                    /*  let loading = document.getElementById("loading");
                     loading.style.display = "block"; */
                    fetch(this.action, {
                        method: "POST",
                        body: formData,
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.success) {

                                console.log("successo");

                            } else {

                                console.log("fail");

                            }
                        })
                        .catch((error) => {
                            console.log("fail");
                        });
                });
        },
    },
}


</script>
