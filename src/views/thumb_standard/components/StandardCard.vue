<template>
  <div class="contain text-center standard standard-card">
    <div class="row row-cols-3">
      <router-link to="" v-for="({ img }, index) of pages" :key="index">
        <div class="card">
          <img :src="require(`@/img/template/${img}.png`)" alt="" />
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