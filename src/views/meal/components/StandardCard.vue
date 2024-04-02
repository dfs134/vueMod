<template>
  <div class="contain text-center standard">
    <div class="row row-cols-3">
      <router-link
        v-bind:to="`/${router}`"
        v-for="({ router, img }, index) of pages"
        :key="index"
      >
        <div class="card">
          <img :src="require(`@/img/dm09/meal/${img}.png`)" alt="" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "StandardCard",
  props: {
    pages: {
      type: Array,
      required: true,
      img: String,
    },
  },
};
</script>

<style scoped>
.row a {
  width: 500px;
  height: 250px;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 70px;
  margin-right: 40px;
  padding: 0;
  box-shadow: 4px 4px 10px 5px #33333340;
}
.row a .card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 2;
}
.row a .card img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

/* @media(max-width: 1500px){
    .row a{
      width: 45%;
    }
  }
  @media(max-width: 1100px){
    .row a{
      width: 45%;
      margin: 30px auto;
    }
  } */
</style>