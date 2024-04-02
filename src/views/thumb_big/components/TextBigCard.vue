<template>
  <div class="contain text-center big">
    <div class="row row-cols-3">
      <router-link
        to=""
        v-for="({ img, imgTitle }, index) of pages"
        :key="index"
      >
        <div class="card">
          <img :src="require(`@/img/template/${img}.png`)" alt="" />
        </div>
        <div class="card-body">
          <p class="card-text">{{ imgTitle }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextBigCard",
  props: {
    pages: {
      type: Array,
      required: true,
      img: String,
      imgTitle: String,
    },
  },
};
</script>

<style scoped>
.row a {
  width: 500px;
  height: 500px;
  border-radius: 20px;
  margin-bottom: 150px;
  margin-right: 40px;
  padding: 0;
  box-shadow: 4px 4px 10px 5px #33333340;
  overflow: inherit;
}
.row a .card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.row a .card-body p {
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
}
.row a .card img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>