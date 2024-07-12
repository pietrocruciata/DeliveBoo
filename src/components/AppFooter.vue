<template>
    <footer>
        <div class="container_info">
            <div class="container">
                <div class="row m-0">
                    <div class="company_info col-sm-12 col-md-3">
                        <img>
                        <p>DeliveBoo - Il tuo cibo preferito, consegnato a casa tua. Scopri i migliori ristoranti della città e ordina con un clic.<br> © 2024 DeliveBoo. Tutti i diritti riservati.</p>
                    </div>
                    <div class="company_links col-sm-12 col-md-3">
                        <h2>Chi siamo</h2>
                        <ul class="list-unstyled d-flex flex-column">
                            <li><a href=""></a> Luigi</li>
                            <li><a href="https://github.com/">Pietro</a> </li>
                            <li><a href=""></a> Thomas</li>
                            <li><a href="">Giulio</a> </li>
                            <li><a href=""></a> Valerio</li>
                        </ul>
                    </div>
                    <div class="company_contacts col-sm-12 col-md-3">
                        <h2>Contatti</h2>
                        <ul class="list-unstyled d-flex flex-column">
                            <li>info@deliveboo.com</li>
                            <li>+99 (0) 101 0000 888</li>
                        </ul>
                    </div>
                    <div class="company_contacts col-sm-12 col-md-3">
                        <h2>Social</h2>
                        <div class="socials d-flex gap-3">
                            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-whatsapp" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-threads" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
    export default {

        data() {
            return{
            }
        }
    }
</script>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

footer{
    padding-top: 50px;
    .container_info{
        min-height: 300px;
        background-color: $brand-grey;
        color: white;

        .company_info,
        .company_links,
        .company_contacts,
        .company_map{
            padding: 20px 30px;

            ul{
                gap: 10px;

                li:hover{
                    color: $brand-orange;
                    cursor: pointer;
                }
            }
        }
    }

    .socials {
        gap: 15px;

        &>*:hover{
            color: $brand-orange;
        }
    }
}
</style>