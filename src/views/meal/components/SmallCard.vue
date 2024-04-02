<template>
  <div class="contain text-center small">
    <div class="row row-cols-3">
      <router-link
        v-bind:to="`/${router}`"
        v-for="({ router, img }, index) of pages"
        :key="index"
      >
        <div class="card">
          <img :src="require(`@/img/template/${img}.png`)" alt="" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallCard",
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
.contain {
  margin: 0 80px;
}
.row a {
  width: 250px;
  height: 250px;
  border-radius: 20px;
  margin-bottom: 40px;
  margin-right: 45px;
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
      width: 20%;
    }
  }
  @media(max-width: 1100px){
    .row a{
      width: 26%;
      margin: 30px auto;
    }
  } */
</style>