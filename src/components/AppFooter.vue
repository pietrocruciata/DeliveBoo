<template>
    <footer>
        <div class="container_info">
            <div class="row">
                <div class="company_info col-sm-12 col-md-3">
                    <img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, at maiores earum beatae cum ducimus sapiente, aspernatur ad inventore, quisquam in. Nihil harum ipsa veniam voluptatem reprehenderit autem et minima.</p>
                </div>
                <div class="company_links col-sm-12 col-md-3">
                    <h2>Chi siamo</h2>
                    <ul class="list-unstyled d-flex flex-column">
                        <li>Luigi</li>
                        <li>Pietro</li>
                        <li>Thomas</li>
                        <li>Giulio</li>
                        <li>Valerio</li>
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