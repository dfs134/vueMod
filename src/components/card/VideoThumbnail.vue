<template>
    <div class="container text-center">
            <div class="row row-cols-3">
                <router-link to="" v-for="{img, VideoName }, index of pages" :key="index">
                    <div class="card">
                        <img :src="require(`../../img/${img}.jpg`)" alt="">
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{VideoName}}</p>
                    </div>
                </router-link>
            </div>
        </div>
</template>

<script>
export default {
    name:"VideoThumbnailVue",
    props:{
        pages: {
            type: Array,
            required: true,
            img: String,
            VideoName: String,
        },
    }
}
</script>

<style scoped>
    .text-center .row .card{
        padding: 0;
        height: 170px;
        overflow: hidden;
    }
    .container .card-body{
        padding-top: 0.5rem;
    }
</style>