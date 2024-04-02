<template>
  <div class="contain text-center standard standard-text-card">
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
  name: "StandardText",
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