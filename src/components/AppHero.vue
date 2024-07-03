<template>
    <section>
        <div>
            <div class="imgBox">
                <img class="image-fluid"
                    src="https://assets3.thrillist.com/v1/image/3130793/1584x1188/scale;webp=auto;jpeg_quality=60;progressive.jpg"
                    alt="">
            </div>
        </div>
        <div class="slogan text-center f-size">
            <div>Scopri i migliori ristoranti con noi! </div>
        </div>


    </section>
</template>

<script>


export default {

}
</script>

<style lang="scss" scoped>
.imgBox {
    height: 400px;
    object-fit: cover;
    overflow: hidden;
}

section {
    position: relative;
}

.imgBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slogan {
    font-weight: 800;
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}

@media (min-width: 300px) {
    .f-size {
        font-size: 30px;
    }

    .slogan {
        width: 85%;
    }
}

@media (min-width: 576px) {
    .f-size {
        font-size: 60px;
    }

    .slogan {
        width: 85%;
    }
}

@media (min-width: 768px) {
    .f-size {
        font-size: 50px;
    }

    .slogan {
        width: 70%;
    }
}

@media (min-width: 992px) {
    .f-size {
        font-size: 50px;
    }

    .slogan {
        width: 70%;
    }
}

@media (min-width: 1200px) {
    .f-size {
        font-size: 80px;
    }

    .slogan {
        width: 70%;
    }
}
</style>